import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  OneToMany,
  UpdateDateColumn,
} from "typeorm";
import { Transaction } from "./Transaction";
import { Personal } from "./utils/Personal";
import { Banker } from "./Banker";

@Entity("customer")
export class Customer extends Personal {
  @Column({ type: "numeric", default: 0 })
  balance: number;

  @Column({ type: "simple-json", nullable: true })
  address: {
    address: string;
    city: string;
    province: string;
    postcode: number;
  };

  @Column({ type: "simple-array", default: [] })
  familyMember: string[];

  @ManyToMany(() => Banker, {
    cascade: true,
  }
)
  bankers: Banker[];

  @OneToMany(() => Transaction, (transaction) => transaction.customer, {
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "customer_transactions" })
  transactions: Transaction[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
