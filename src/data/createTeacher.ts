import { connection } from "../index";

export const createTeacher = async (name: string, email: string, birth_date: string, specialty: string): Promise<void> => {
  const result = await connection.raw(`
    INSERT INTO students (name, email, birth_date, hobby)
    VALUES
    ${name}
    "${email}"
    "${birth_date}"
    ${specialty}
    `);
}


