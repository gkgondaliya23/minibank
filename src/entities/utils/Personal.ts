import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Personal extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({default:""})
  password: string;

  @Column({})
  firstName: string;

  @Column({})
  lastName: string;

  @Column({unique:true, length:15})
  card_number:string;
}
