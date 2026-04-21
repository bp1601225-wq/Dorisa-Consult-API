import { prisma } from "../prisma/client"

export const projectService = {

async FetchAllProjects(){

return prisma.project.findMany({

select: {
id:true,

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

}
}
})

},

async CreateProjects(data: any) {
  const { id, ...rest } = data;

  return prisma.$transaction(async (tx) => {

    await tx.proposal.update({
      where: { id },
      data: { status: "APPROVED" }
    });

    const project = await tx.project.create({
      data: {
        proposal_id: id,
        ...rest
      }
    });

    return project;
  });
},


async updateProject(id:string, data:any){
    return prisma.project.update({
        where: {id},
        data
    })

},


async getProject(id: string) {
  return prisma.project.findUnique({
    where: { id },
    include: {
      proposal: true
    }
  });
}










}
