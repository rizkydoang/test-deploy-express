import { Request, Response } from 'express'
import { CommentSchemaValidate } from './model'
import { PrismaClient } from '@prisma/client'
import { ICreateComment } from './interfaces/IComment';

const prisma = new PrismaClient();

class commentServer {
    addComment = async (req: Request, res: Response) => {
        //data to be saved in database
        const data: ICreateComment = {
            name: req.body?.name,
            comment: req.body?.comment,
            isPresent: req.body?.isPresent
        }

        //validating the request
        const {error, value} = CommentSchemaValidate.validate(data)

        if (error) {
            res.send(error.message)
        } else {
            // insert data comment
            const comment = await prisma.comment.create({
                data: { 
                    name: value.name,
                    comment: value.comment,
                    isPresent: value.isPresent
                }
            })
            res.status(201).send(comment)
        }
    }

    getComments = async (req: Request, res: Response) => {
        const comments = await prisma.comment.findMany()
        res.status(201).send(comments)
    }
}

// export class
export const CommentServer = new commentServer()