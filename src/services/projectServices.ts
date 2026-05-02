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
    termsAndConditions:true

  }
},



},

orderBy: {
  createdAt: "desc"
}

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
    include: {
      proposal: true
    }
  });
},

async updateProjectProgress(projectId: string, progress: number) {
  return prisma.$transaction(async (tx) => {

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
}










}
