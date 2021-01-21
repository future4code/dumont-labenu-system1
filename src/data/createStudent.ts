import { connection } from "../index";
export const createStudent = async (name: string, email: string, birthdate: Date, mission_id: number): Promise<void> => {
  const result = await connection.raw(`
    INSERT INTO students (name, email, birthdate, mission_id)
    VALUES (
    "${name}",
    "${email}",
    "${birthdate}",
    ${mission_id}
    )`);
}
