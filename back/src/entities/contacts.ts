import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./usersEntity";
import { Column, CreateDateColumn } from "typeorm";

@Entity("contacts")
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
