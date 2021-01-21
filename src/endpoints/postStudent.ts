import { Request, Response } from 'express'
import { createStudent } from '../data/createStudent';


export const postStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        
        await createStudent(
          req.body.name,
          req.body.email,
          req.body.birthdate,
          req.body.mission_id
        );

        res.status(200).send(`Seja bem vinde, ${req.body.name}`);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
