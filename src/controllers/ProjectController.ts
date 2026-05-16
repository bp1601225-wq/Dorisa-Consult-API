import { Request, Response } from "express";
import { projectService } from "../services/projectServices";

export const ProjectController = {

  async GetAllProjects(_req: Request, res: Response) {
    try {

      const fetchedData = await projectService.FetchAllProjects();

      return res.status(200).json({
        message: "All projects fetched successfully",
        data: fetchedData
      });

    } catch (err) {
      console.log(err);

      return res.status(500).json({
        error: "Internal server error"
      });
    }
  },


  async CreateNewProject(req:Request, res:Response){

    try {
    const incomingData = req.body

  const createdData =   await projectService.CreateProjects(incomingData)

  return res.status(200).json({
    message: "A project has been succesfully created",
    data: createdData
  })
    

    } catch (error:any){
console.log(error)
return res.status(500).json({
    message: "failed to create project",
    error:error.message
})
    }



  },

  async updateProject(req:Request, res:Response){

    try {
  const id = req.params.id as string

    const incomingData = req.body

    const updatedProject = await projectService.updateProject(id, incomingData)

    return res.status(200).json({
        message: "project updated succesfully",
        data: updatedProject
    })

    } catch (error:any){
        console.log(error)
        return res.status(500).json({
            message: "failed to update project",
            error: error.message
        })
    }
  

  },

  async getProjectById(req:Request, res:Response){
    try {

const id = req.params.id as string

const returnedData = await projectService.getProjectId(id)

return res.status(200).json({
    message: "project id fetched succesfully",
    data:returnedData
})


    } catch (error:any){
        console.log(error)
        return res.status(500).json({
            message: "failed to fetch projects by request id",
            error:error.message
        })
    }

  }, 

async updateProgressProject(req: Request, res: Response) {
  try {
    const projectId = req.params.id as string;

    const { progress } = req.body;

    const returnedProgressData =
      await projectService.updateProjectProgress(
        projectId,
        Number(progress)
      );

    return res.status(200).json({
      message: "progress updated",
      data: returnedProgressData,
    });

  } catch (error: any) {
    console.log(error);

    return res.status(500).json({
      message: "failed to update progress",
      error: error.message,
    });
  }
},



async GetALLMileStoneController(_req:Request, res:Response){


try {

const fetchedData = await projectService.GetAllMileStones()

  return res.status(200).json({
  message: "mileStones fetched succesfully",
  data:fetchedData
})


} catch (error:any){
  console.log(error)
  return res.status(500).json({
message:"failed to fetch project milestone",
error:error.message
  })
}
},

async AttainMileStoneController(req:Request, res:Response){

  try {
  const incomingData = req.body

  const data = await projectService.AttainMileStone(incomingData)

  return res.status(200).json({
    message: "Milestone created succesfully",
    data
  })
  
  } catch (error:any){
    console.log(error)

    return res.status(500).json({
      message:"failed to create milestone",
      error:error.message
    })

  }

// update milestone status

},

async UpdateMileStoneStatus(req: Request, res: Response){

  try {

    const milestoneId = req.params.id as string;

    const { status } = req.body;

    const returnedData =
      await projectService.updateMileStoneStatus(
        milestoneId,
        status
      );

    return res.status(200).json({
      message: "mile stone updated successfully",
      data: returnedData
    });

  } catch (error: any){

    console.log(error);

    return res.status(500).json({
      message: "failed to update milestone status",
      error: error.message
    });

  }
}

};