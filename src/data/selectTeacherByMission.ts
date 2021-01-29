import { connection } from "../index";

export const selectTeacherByMission = async (id: number): Promise<any> => {
    const result = await connection.raw(`(
      SELECT name, email from teachers
      WHERE mission_id = ${id}
      )`)

      return result[0]
  }