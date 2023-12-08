import {
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";
import { User } from "./User";

@Entity()
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
