import express, { Application, Express, Request, Response } from "express";

import dotenv from "dotenv";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5002;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to SmartCity.");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
