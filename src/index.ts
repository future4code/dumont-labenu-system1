import express, { Express } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";
import { postClass } from "./endpoints/postClass";
import { postStudent } from "./endpoints/postStudent";
import { getStudentAge } from "./endpoints/getStudentAge";
import { getStudentByClass } from "./endpoints/getStudentByClass";
import {getTeacherByClass} from './endpoints/getTeacherByClass';

dotenv.config();
export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();

app.use(express.json());
app.use(cors());


app.post("/labenu/class", postClass)
app.post("/labenu/class/student", postStudent)
app.get("/labenu/class/student/:id", getStudentAge)
app.get("/labenu/class/:id", getStudentByClass)
app.get("/labenu/class/teacher/:id", getTeacherByClass)


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});