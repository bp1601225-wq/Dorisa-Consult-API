import { MileStoneStatus } from "../generated/prisma/client";
import { prisma } from "../prisma/client"

export const projectService = {

async FetchAllProjects(){

return prisma.project.findMany({


select: {
id:true,

projectStatus:true,
progress:true,

service: {

select: {
id:true,
ServiceName:true,
Description:true
}
},

client: {
select: {
id:true,
email:true,
phone:true,
firstName:true,
middleName:true,
lastName:true,
fullName:true
} 
   },

proposal: {
    select: {
    id:true,
    scope:true,
    deliverables:true,
    timeline:true, 
    pricing:true,
    status:true,  
    termsAndConditions:true,

      versions:{
        orderBy:{
          createdAt:"desc"
        }
      },

  }
},

MileStone:{
  select:{
    id:true,
    title:true,
    description:true,
    amount:true,
    projectId:true,
    status:true

  }
}

// As 

},



orderBy: {
  createdAt: "desc"
},



})

},

async CreateProjects(data: any) {
  const { proposal_id, client_request_id, ...rest } = data;

  return prisma.$transaction(async (tx) => {
    // 1. Validate proposal exists (optional but recommended)
    const proposal = await tx.proposal.findUnique({
      where: { id: proposal_id },
    });

    if (!proposal) {
      throw new Error("Proposal not found");
    }

    // 2. Update proposal status
    await tx.proposal.update({
      where: { id: proposal_id },
      data: { status: "APPROVED" },
    });

    // 3. Update client request status
    const clientRequest = await tx.clientRequest.update({
      where: { id: client_request_id },
      data: { request_status: "ONGOING" },
    });

    // 4. Create project
    const project = await tx.project.create({
      data: {
        proposal_id,
        client_request_id,
        ...rest,
      },
    });

    return {
      project,
      proposal,
      clientRequest,
    };
  });
},


async updateProject(id:string, data:any){
    return prisma.project.update({
        where: {id},
        data
    })

},


async getProjectId(id: string) {
  return prisma.project.findUnique({
    where: { id },
    select: {
      id:true,
      proposal: {
        select: {
          id:true,
          scope:true,
          deliverables:true,
          timeline:true,
          pricing:true,
          termsAndConditions:true,
          versions:true
        }
      },

      service:{
          select: {
            id:true,
            Description:true
          }
      }
    }
  });
},

async updateProjectProgress(projectId: string,

  progress: number) {
  return prisma.$transaction(async (tx) => {

// start a $transaction


    // 1. update status
    const updatedProject = await tx.project.update({
      where: {
        id: projectId,
      },
      data: {
        projectStatus: "IN_PROGRESS",
        progress: progress,
      },
    });



 


    

    return updatedProject;
  });
},

async GetAllMileStones(){
  return prisma.mileStone.findMany({
    select: {
      id:true,
      title:true,
      description:true,
      projectId:true,
      amount:true
    },

    orderBy:{
      createdAt:"asc"
    }
  })

  
},


// attain a milestone
async AttainMileStone(data: any) {
  const { amount, description, projectId, title } = data;

  const convertedAmount = Number(amount);

  if (isNaN(convertedAmount)) {
    throw new Error("Amount must be a number");
  }

  return prisma.$transaction(async (tx) => {

    // 1. Get project + proposal
    const project = await tx.project.findUnique({
      where: { id: projectId },
      include: {
        proposal: true
      }
    });

    if (!project) {
      throw new Error("Project not found");
    }

    // 2. Get current total milestone amount
    const result = await tx.mileStone.aggregate({
      where: {
        projectId: projectId
      },
      _sum: {
        amount: true
      }
    });

    const currentTotal = result._sum.amount || 0;

    // 3. Check if new milestone exceeds proposal budget
    const newTotal = currentTotal + convertedAmount;

    if (newTotal > project.proposal.pricing) {
      throw new Error(
        "Cannot create milestone: exceeds proposal contract value"
      );
    }

    // 4. Create milestone
    const milestone = await tx.mileStone.create({
      data: {
        amount: convertedAmount,
        description,
        projectId,
        title,
      },
    });

    return milestone;
  });
},

async updateMileStoneStatus(mileStoneId: string, status: MileStoneStatus) {
  return await prisma.$transaction(async (tx) => {

    // 1. Get current milestone
    const currentMilestone = await tx.mileStone.findUnique({
      where: { id: mileStoneId }
    });

    if (!currentMilestone) {
      throw new Error("Milestone not found");
    }

    // 2. Get project
 const project = await tx.project.findUnique({
  where: { id: currentMilestone.projectId },
  include: {
    proposal: true
  }
});

    if (!project) {
      throw new Error("Project not found");
    }

    // 3. If project is PLANNING → switch to IN_PROGRESS
    if (project.projectStatus === "PLANNING") {
      await tx.project.update({
        where: { id: project.id },
        data: {
          projectStatus: "IN_PROGRESS"
        }
      });
    }

    // 4. Update milestone
    const updatedMilestone = await tx.mileStone.update({
      where: { id: mileStoneId },
      data: { status }
    });

    // 5. Check remaining pending milestones
    const pendingCount = await tx.mileStone.count({
      where: {
        projectId: currentMilestone.projectId,
        status: "PENDING"
      }
    });

    // 6. If no pending milestones → complete project
    if (pendingCount === 0) {
      await tx.project.update({
        where: { id: project.id },
        data: {
          projectStatus: "COMPLETED",
          progress: 100
        }
      });
    }


    // 7. get the milestone price count
 const result = await tx.mileStone.aggregate({
  where: {
    projectId: project.id
  },
  _sum: {
    amount: true
  }
})

const totalMilestones = result._sum.amount || 0;

// 8. Check if project price is grater than milestone total
if (totalMilestones > project.proposal.pricing) {
  throw new Error("Milestone total exceeds proposal pricing");
}

    return updatedMilestone;
  });
}







}
