import { Request, Response } from 'express'
import { selectStudentById } from '../data/selectStudentById'

export const getStudentAge = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id

        const result = await selectStudentById(id) as string

        res.status(200).send(result)

    } catch (error) {
        res.status(400).send({ message: error.message });
        console.log(error.sqlMessage || error.message);
    }

}