// validations/clientValidation.ts
import Joi from "joi";

export const createClientSchema = Joi.object({
  email: Joi.string().email().required(),
  phone: Joi.string().min(7).max(15).required(),
  password: Joi.string().min(6).required(),
  country: Joi.string().required(),
  companyName: Joi.string().required(),
  contactPerson: Joi.string().required(),
  companyWebsite: Joi.string().uri().optional().allow(null, ""),
});