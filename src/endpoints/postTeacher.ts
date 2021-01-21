import { Request, Response } from "express";
import {createTeacher} from "../data/createTeacher";

export const postTeacher = async (req: Request, res: Response): Promise<void> => {
  try {
  

    await createTeacher(
      req.body.name,
      req.body.email,
      req.body.birth_date,
      req.body.specialities,
      req.body.mission_id
    );

    res.status(200).send(`Professor ${req.body.name} inserido com sucesso!`);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
