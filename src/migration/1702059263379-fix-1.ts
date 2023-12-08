import { MigrationInterface, QueryRunner } from "typeorm";

export class Fix11702059263379 implements MigrationInterface {
  name = "Fix11702059263379";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "photo" DROP CONSTRAINT "FK_c8c60110b38af9f778106552c39"`
    );
    await queryRunner.query(
      `ALTER TABLE "photo" DROP CONSTRAINT "REL_c8c60110b38af9f778106552c3"`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "photo" ADD CONSTRAINT "REL_c8c60110b38af9f778106552c3" UNIQUE ("user_id")`
    );
    await queryRunner.query(
      `ALTER TABLE "photo" ADD CONSTRAINT "FK_c8c60110b38af9f778106552c39" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}
