// validations/clientValidation.ts
import Joi from "joi";

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
