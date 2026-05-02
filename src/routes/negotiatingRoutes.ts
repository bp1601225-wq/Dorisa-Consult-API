import { Router } from 'express';
import { NegotiatingController } from '../controllers/NegotiatingController';

export const NegotiatingRoute = Router()

//  End points
NegotiatingRoute.get("/get-all-negotiating", NegotiatingController.GetAllNegotiaition)
NegotiatingRoute.post("/create-negotiation", NegotiatingController.CreateNegotiation)