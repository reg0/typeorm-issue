import {
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Column,
} from "typeorm";
import { Photo } from "./Photo";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  @OneToOne(() => Photo, (photo) => photo.user, {
    nullable: true,
    eager: true,
  })
  @JoinColumn({ name: "profie_picture_photo_id" })
  profilePicture: Photo;
}
