import { connection } from "../index";

export default async function createStudent(
  id: string,
  name: string,
  email: string,
  birth_date: Date,
  hobby: string
): Promise<any> {
  const result = await connection.raw(`
    INSERT INTO students (id, name, email, birth_date, hobby)
    VALUES
    ${id}
    "${name}"
    "${email}"
    "${birth_date}"
    ${hobby}
    `);

  return result[0];
}
