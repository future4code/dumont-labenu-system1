import { Request, Response } from 'express'
import {selectTeacherByMission} from '../data/selectTeacherByMission'


export const getTeacherByClass = async(req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        if(isNaN(Number(req.params.id))) {
            errorCode = 422;
            throw new Error("Id inválido")
         }

         const result = await selectTeacherByMission(
             Number(req.params.id)
         )

        res.status(200).send(result)

    } catch(error){
        res.status(errorCode).send(error.message)
    }
}