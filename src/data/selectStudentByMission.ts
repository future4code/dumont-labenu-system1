import { connection } from "../index";

export const selectStudentByMission = async (id: number): Promise<any> => {
    const result = await connection.raw(`
      SELECT name, email from students
      WHERE mission_id = ${id}
      )`)

      return result[0]
  }