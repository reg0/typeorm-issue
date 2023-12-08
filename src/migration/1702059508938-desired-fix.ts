import { MigrationInterface, QueryRunner } from "typeorm";

export class DesiredFix1702059508938 implements MigrationInterface {
  name = "DesiredFix1702059508938";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "photo" ADD CONSTRAINT "FK_c8c60110b38af9f778106552c39"
        FOREIGN KEY ("user_id")
          REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "photo" DROP CONSTRAINT "FK_c8c60110b38af9f778106552c39"`
    );
  }
}
