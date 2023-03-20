import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./usersEntity";

@Entity("registerUsers")
export class Contacts {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Users, (users) => users.contacts)
  user: Users;
}
