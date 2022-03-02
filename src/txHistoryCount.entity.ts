import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('transactions')
export class TransactionEntity {
  @PrimaryGeneratedColumn()
  id!:string;

  @Column()
  date!: string;
  
  @Column()
  txCount!: string;
}