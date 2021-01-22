import { connection } from "../index";

export const createTeacher = async (
  name: string,
  email: string,
  birth_date: Date,
  specialities: string,
  mission_id: number
): Promise<void> => {
  await connection.raw(`
    INSERT INTO teachers (name, email, birth_date, specialities, mission_id)
    VALUES(
    "${name}",
    "${email}",
    "${birth_date}",
    "${specialities}",
    ${mission_id}
    );
    
  `);
};
