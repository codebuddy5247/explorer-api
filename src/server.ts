import express, { Request, Response } from "express";
import { createConnection, getRepository } from "typeorm";
import { transactionHistoryCount } from "./txHistory";
import { TransactionEntity } from "./txHistoryCount.entity";
import Router from "./txRouter";
const app = express();
app.use(express.json());

export const connection = createConnection({
  type: "postgres",
  host: "abul.db.elephantsql.com",
  port: 5432, // default port of postgres
  username: "cubwebeh",
  password: "zm4hxMDSXWEnZKufHrWT0ocDCB_wJ2W0",
  database: "cubwebeh",
  entities: [TransactionEntity],
  synchronize: true,
  logging: false,
})
  .then((connection) => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.get("/", function (req: Request, res: Response) {
  res.send("API running!");
});

app.use(Router);

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server running at port:${port}`);
});
