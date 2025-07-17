import express, { Request, Response } from "express";
import cors from "cors";
import { db } from "./db";

const app = express();
app.use(express.json());
app.use(cors<Request>());

app.listen(4060, () => console.log("hey all, port 4060 here"));

app.get("/api", (_: Request, res: Response) => res.json({ status: "200" }));

app.get("/api/designs", (_: Request, res: Response) => {});
