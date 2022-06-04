import express, { Application, Request, Response } from "express";

import { appConfig } from "./configs";

const app: Application = express();
const port = appConfig.port;

app.get("/", (req: Request, res: Response) => {
  return res.json({
    app: appConfig.appName,
    createdAt: appConfig.appDate,
    host: req.hostname,
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
