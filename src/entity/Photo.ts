import {
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Column,
  Unique,
} from "typeorm";
import { User } from "./User";

@Entity()
@Unique(["user.id", "deletedAt"])
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @DeleteDateColumn({
    type: "timestamp",
    name: "deleted_at",
  })
  public deletedAt: Date;

  @Column()
  url: string;

  @OneToOne(() => User, (user) => user.profilePicture, {
    nullable: false,
    createForeignKeyConstraints: false,
  })
  @JoinColumn({ name: "user_id" })
  user: User;
}
