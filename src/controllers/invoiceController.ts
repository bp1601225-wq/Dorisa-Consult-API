import { Request, Response, NextFunction } from "express";
import { InvoiceType } from "../GlobalTypes";
import { prisma } from "../prisma/client";


const InvoiceController = {

async CreateInvoice(req:Request, res:Response, next:NextFunction){

    const incomingData: InvoiceType = req.body

    const InvoiceData = await prisma.invoice.create({
     
    })

}


}