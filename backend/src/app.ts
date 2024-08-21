import cors from "cors";
import express from "express";

import { getAuthRouter } from "./routes/auth";

import { logRoutes } from "./assets/logRoutes";

export const app = express();

app.use(cors());
app.use(express.json({}));
app.use(logRoutes);

app.use("/api/auth", getAuthRouter());
