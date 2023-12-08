import { MigrationInterface, QueryRunner } from "typeorm";

export class Initial1702058269320 implements MigrationInterface {
  name = "Initial1702058269320";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" (
        "id" SERIAL NOT NULL,
        "firstName" character varying NOT NULL,
        "lastName" character varying NOT NULL,
        "age" integer NOT NULL,
        "profie_picture_photo_id" integer,
        CONSTRAINT "REL_a6935c7a089315e44e5b0f0bdb" UNIQUE ("profie_picture_photo_id"),
        CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
      )`
    );

    await queryRunner.query(
      `CREATE TABLE "photo" (
        "id" SERIAL NOT NULL,
        "deleted_at" TIMESTAMP,
        "url" character varying NOT NULL,
        "user_id" integer NOT NULL,
        CONSTRAINT "REL_c8c60110b38af9f778106552c3" UNIQUE ("user_id"),
        CONSTRAINT "PK_723fa50bf70dcfd06fb5a44d4ff" PRIMARY KEY ("id")
      )`
    );
    await queryRunner.query(
      `ALTER TABLE "photo" ADD CONSTRAINT "FK_c8c60110b38af9f778106552c39"
        FOREIGN KEY ("user_id")
          REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "user" ADD CONSTRAINT "FK_a6935c7a089315e44e5b0f0bdb9"
        FOREIGN KEY ("profie_picture_photo_id")
          REFERENCES "photo"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "user" DROP CONSTRAINT "FK_a6935c7a089315e44e5b0f0bdb9"`
    );
    await queryRunner.query(
      `ALTER TABLE "photo" DROP CONSTRAINT "FK_c8c60110b38af9f778106552c39"`
    );
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "photo"`);
  }
}
