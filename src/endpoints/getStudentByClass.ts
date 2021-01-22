import { Request, Response } from 'express'
import { selectStudentByMission } from '../data/selectStudentByMission';

export const getStudentByClass = async(req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
        if(isNaN(Number(req.params.id))) {
            errorCode = 422;
            throw new Error("Id inválido")
         }

         const result = await selectStudentByMission(
             Number(req.params.id)
         )

        res.status(200).send(result)

    } catch(error){

    }
}