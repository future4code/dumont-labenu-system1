import { connection } from "../index"

export const selectStudentById = async ( id: string
    
): Promise<any> => {

    const result = await connection.raw(`
    SELECT name, FLOOR(DATEDIFF(CURDATE(), birthdate)/365) AS age
       FROM students
       WHERE id = "${id}";
    `);
    return result[0];
};