import Joi from 'joi'

//validation schema
export const CommentSchemaValidate = Joi.object({
    name: Joi.string().required(),
    comment: Joi.string().required(),
    isPresent: Joi.boolean().required()
})