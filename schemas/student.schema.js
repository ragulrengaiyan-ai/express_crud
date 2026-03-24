import Joi from "joi"


export const createStudentsSchema=joi.object({
    name:Joi.string().required(),
    email:Joi.string().required(),
    course:Joi.string().required(),
    marks:Joi.number().min().max(100).required(),
    created_at:Joi.string().required(),

})