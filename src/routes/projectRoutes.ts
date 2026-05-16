import express from "express"
import { ProjectController } from "../controllers/ProjectController"

export const ProjectRoutes = express.Router()

ProjectRoutes.get("/get-all-projects", ProjectController.GetAllProjects)

ProjectRoutes.get("/get-projects-by-id/:id", ProjectController.getProjectById)

ProjectRoutes.get("/get-all-mileStones", ProjectController.GetALLMileStoneController)


ProjectRoutes.post("/create-projects", ProjectController.CreateNewProject)


ProjectRoutes.post("/create-milestone", ProjectController.AttainMileStoneController)


//  milestone ProjectRoutes

ProjectRoutes.patch("/update-milestone-routes/:id", ProjectController.UpdateMileStoneStatus )


ProjectRoutes.put("/update-project", ProjectController.updateProject)
//  update project progress

ProjectRoutes.patch("/update-project-progress/:id/progress", ProjectController.updateProgressProject)
