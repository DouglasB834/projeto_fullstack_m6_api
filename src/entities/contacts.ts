import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./usersEntity";
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("registerUsers")
export class Contacts {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 15 })
  phone: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => Users, (users) => users.contacts)
  user: Users;
}
