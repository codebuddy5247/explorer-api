import express, { Request, Response } from "express";
import { getRepository } from "typeorm";
import { TransactionEntity } from "./txHistoryCount.entity";

const router = express.Router();

router.get("/transactions", async function (req: Request, res: Response) {
  const txRepo = getRepository(TransactionEntity);
  const transactions = await txRepo.find()
  res.json({ data: transactions });
});

router.post("/tx", async function (req: Request, res: Response) {
  const txRepo = getRepository(TransactionEntity);
  const tx = await txRepo.create(req.body);
  const results = await txRepo.save(tx);
  return res.send(results);
});



export default router;
