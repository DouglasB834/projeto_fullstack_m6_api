import "reflect-metadata";
import "express-async-errors";
import express from "express";
import errorHandler from "./errors/errorHandler";
import { contatcRountes, sessionsRoutes, usersRoutes } from "./routes";
import cors from "cors";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("", sessionsRoutes);
app.use("", usersRoutes);
app.use("", contatcRountes);
app.use(errorHandler);
