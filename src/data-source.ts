import "reflect-metadata";
import "dotenv/config";
import path from "path";
import { DataSource } from "typeorm";
import { User } from "./entity/User";
import { Photo } from "./entity/Photo";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOSTNAME,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: false,
  logging: false,
  entities: [User, Photo],
  migrations: [path.join(__dirname, "./migration/*.{ts,js}")],
  subscribers: [],
});
