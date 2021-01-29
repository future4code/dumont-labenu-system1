import { Request, Response } from 'express'
import { createClass } from '../data/createClass';


export const postClass = async (req: Request, res: Response): Promise<void> => {
    try {
        if (req.body.module < 1 || req.body.module > 7) {
            res.statusCode = 422
            throw new Error(`"module" deve ser entre 1 e 7`)
        }

        let classType = req.body.name
        if(req.body.class_type === "nocturnal"){
            classType = `${req.body.name}-na-night`
        }

        await createClass(
          classType,
          req.body.start_date,
          req.body.end_date,
          req.body.module,
          req.body.class_type
        );

        res.status(200).send(`Turma ${req.body.name} criada`);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
