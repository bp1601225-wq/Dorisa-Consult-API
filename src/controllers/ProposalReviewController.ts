import { Request, response, Response } from "express";
import { ReviewService } from "../services/review.service";

export const ReviewController = {



    //  fetch all reviews

    async GetAllReviews (req:Request, res:Response){
 try {
 const user = (req as any).user;


 const result = await ReviewService.getAllReviews(user);
 
 
 return res.status(200).json({
     message: "All reviews fetched succesfully",
     data: result.data,
     total: result.total
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
 const gatheredData = await ReviewService.createReview(req.body)
 
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
             const EditedReviews = await ReviewService.editReview(id, req.body)
 
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
     const clientId = (req.params.clientId ?? req.params.id) as string;
 
     const reviews = await ReviewService.getReviewsByClientId(clientId);
 
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
 },

 // When client negotiates a proposal review
async NegotiateProposalReview(req:Request, res:Response){

    const incomingData = req.body

    try {

 const {clientId, proposal_id, NegotiatingText} = incomingData

const negotiationData = ReviewService.NegotiateProposalReview({
    clientId,
    proposal_id,
    NegotiatingText
})

return res.status(200).json({
    message: "Negotiation succesful",
    data: negotiationData
})
    } 
    
    
    catch (error:any){

        console.log(error)

        return res.status(500).json({
            message: "Negotiaion failed",
            error: error.message
        })
    }

    
   


},

// fetch all negotiated by clients
async fetchClientsNegotiationDetails(_req:Request, res:Response){
try {
    const AllNegotiatingText = ReviewService.fetchAllClientsNegotatedDetails()

return res.status(200).json({
message: "All negotiating fetched succesfully",
data: AllNegotiatingText
})

} catch (error:any) {
console.log(error)

return res.status(401).json({
    message: "Failed to fetch negotiation",
    error: error.message
})
}

}




 
 }
