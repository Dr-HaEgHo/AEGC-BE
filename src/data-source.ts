// src/data-source.ts
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import path from "path";

const entityDir = path.join(__dirname, '/entity/');

export const AppDataSource = new DataSource({
  type: "mysql",
  database: "aegcdb",
  port:3306,
  username:'root',
  password:'Secret@c0d3.',
  synchronize: true,
  logging: false,
  entities: [`${entityDir}/*.{ts,js}`],
  migrations: [],
  subscribers: [],
});
