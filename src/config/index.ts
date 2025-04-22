import { config } from "dotenv";

config();

const configuration = {
  env: "dev",
  port: process.env.PORT || 8080,
  db_host: process.env.DB_HOST,
  db_port: parseInt(process.env.DB_PORT),
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  db_database: process.env.DB,

  jwt_token_secret: process.env.ACCESS_TOKEN_SECRET,
  jwt_token_expiration: "24h",
};

export default configuration;
