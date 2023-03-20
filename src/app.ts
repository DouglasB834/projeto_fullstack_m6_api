import "reflect-metadata";
import "express-async-errors";
import express from "express";
import errorHandler from "./errors/errorHandler";
import { sessionsRoutes, usersRoutes } from "./routes";

export const app = express();

app.use(express.json());

app.use("", sessionsRoutes);
app.use("", usersRoutes);
app.use(errorHandler);
