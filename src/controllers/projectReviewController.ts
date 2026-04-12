import { log } from "node:console";
import { prisma } from "../prisma/client";
import { Request, Response } from "express";

export const ReviewController = {

    async GetAllReviews (req:Request, res:Response){
try {
const user = (req as any).user;

const isAdmin = user.role === "Admin";

const allReviews = await prisma.projectReview.findMany({
  where: isAdmin
    ? {} // admin sees everything
    : {
        client_id: user.id, // normal user sees only their own
      },

  select: {
    id: true,
    scope: true,
    deliverables: true,
    timeline: true,
    pricing: true,
    status: true,
    termsAndConditions: true,

    service: {
      select: {
        ServiceName: true,
        Description: true,
      },
    },

    client: {
      select: {
        id: true,
        phone: true,
        email: true,
        country: true,
        fullName: true,
        firstName: true,
        middleName: true,
        lastName: true,
        companyName: true,
        companyWebsite: true,
        industry: true,
      },
    },
  },
});


//  Total number of review pages
const reviewCount = await prisma.projectReview.count()


return res.status(200).json({
    message: "All reviews fetched succesfully",
    data: allReviews,
    total: reviewCount
})


    } catch (error:any) {
        res.status(500).json({
            message: "failed to fetch review ",
            error: error.message
        })
    console.log(error)
}

    }, 

    async CreateReviews (req:Request, res:Response){

        try {
const incomingData = req.body

const gatheredData = await prisma.projectReview.create({
    data:incomingData
})

return res.status(200).json({
    message: "reviews created successfully",
    data: gatheredData
})

        } catch (error:any){
            console.log(error)

            return res.status(500).json({
                message: "failed to submit review",
                error: error.message
            })
        }

    },

    async EditReviews (req:Request, res:Response){
        try {

            const id = req.params.id as string
            const incomingData = req.body


            const EditedReviews = await prisma.projectReview.update({
where: {id},
data: incomingData

            })

            return res.status(200).json({
                message: "review updated",
                data: EditedReviews
            })


        } catch (error:any){
            console.log(error.message)
               return res.status(500).json({
                message: "failed to update review",
                error: error.message
            })

        }
    },



    // Find proposal created by client themselves
async GetReviewsById(req: Request, res: Response) {
  try {
    const clientId = req.params.clientId as string;

    const reviews = await prisma.projectReview.findMany({
      where: {
        client_id: clientId,
      },
    });

    return res.status(200).json({
      message: "User reviews fetched successfully",
      data: reviews,
    });

  } catch (error: any) {
    console.log(error);

    return res.status(500).json({
      message: "Failed to fetch user reviews",
      error: error.message,
    });
  }
}


}