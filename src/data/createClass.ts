import { connection } from "../index"

export const createClass = async (
    name: string,
    start_date: Date,
    end_date: Date,
    module: number,
    class_type: string
): Promise<void> => {
    await connection.raw(`
        INSERT INTO mission (name, start_date, end_date, module, class_type)
        VALUES ("${name}", "${start_date}", "${end_date}", ${module}, "${class_type}");
    `)
};
