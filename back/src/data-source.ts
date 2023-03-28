import "reflect-metadata";
import "dotenv/config";
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";
import { Contacts } from "./entities/contacts";
import { Users } from "./entities/usersEntity";
import { contacts1679397477558 } from "./migrations/1679397477558-contacts";
import { fixContact1679633322339 } from "./migrations/1679633322339-fixContact";
export const setDataSourceConfig = (): DataSourceOptions => {
  const nodeEnv = process.env.NODE_ENV;

  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [Users, Contacts],
      migrations: [contacts1679397477558, fixContact1679633322339],
    };
  }

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [Users, Contacts],
    };
  }

  return {
    type: "postgres",
    host: process.env.PGHOST,
    port: parseInt(process.env.PGPORT!),
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    logging: true,
    synchronize: false,
    entities: [Users, Contacts],
    migrations: [contacts1679397477558, fixContact1679633322339],
  };
};

const dataSource = setDataSourceConfig();
export const AppDataSource = new DataSource(dataSource);
