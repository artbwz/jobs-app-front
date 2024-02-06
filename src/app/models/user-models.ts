import Joi from "joi";


export type RUser = {
    name: string;
    email: string;
    password: string;
}

export const userSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string(),
    password: Joi.string(),
})