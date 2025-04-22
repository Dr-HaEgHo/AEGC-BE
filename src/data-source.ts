// src/data-source.ts
import "reflect-metadata";

import { DataSource } from "typeorm";
import path from "path";
import configuration from "./config";

const entityDir = path.join(__dirname, "/entity/");

export const AppDataSource = new DataSource({
  type: "mysql",
  host: configuration.db_host,
  port: configuration.db_port,
  username: configuration.db_username,
  password: configuration.db_password,
  database: configuration.db_database,
  synchronize: true,
  logging: false,
  entities: [`${entityDir}/*.{ts,js}`],
  migrations: [],
  subscribers: [],
});
