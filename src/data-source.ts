// src/data-source.ts
import "reflect-metadata";

import { DataSource } from "typeorm";
import path from "path";

const entityDir = path.join(__dirname, "/entity/");

export const AppDataSource = new DataSource({
  type: "mysql",
  database: "aegcdb",
  port: 3306,
  host: "localhost",
  username: "root",
  password: "Password1$",
  synchronize: true,
  logging: false,
  entities: [`${entityDir}/*.{ts,js}`],
  migrations: [],
  subscribers: [],
});
