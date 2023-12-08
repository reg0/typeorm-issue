import { MigrationInterface, QueryRunner } from "typeorm";

export class Fix21702059398241 implements MigrationInterface {
  name = "Fix21702059398241";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "photo" ADD CONSTRAINT "UQ_96e6601a0b422c4d9e0507e141c" UNIQUE ("user_id", "deleted_at")`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "photo" DROP CONSTRAINT "UQ_96e6601a0b422c4d9e0507e141c"`
    );
  }
}
