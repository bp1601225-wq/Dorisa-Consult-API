// validations/clientValidation.ts
import Joi from "joi";
import { serviceStatus } from "../generated/prisma/client";

// User Schema validations

export const serviceSchema = Joi.object({
  id: Joi.string().optional(),

  ServiceName: Joi.string().required(),
  Description: Joi.string().required(),

  status: Joi.string()
    // .valid(...Object.values(serviceStatus)) 
    .required(),

  DateCreated: Joi.date().optional(),
});
// Authentication Schema
export const AuthSchema = Joi.object({
email: Joi.string().email().required(),
password: Joi.string().min(8).required()
})
