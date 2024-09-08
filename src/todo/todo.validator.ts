import { celebrate, Joi } from "celebrate";

export const createValidator = celebrate(
    {
        body: {
            todo: Joi.string().required(),
            completed: Joi.boolean().required(),
        },
    },
    { stripUnknown: true },
);
