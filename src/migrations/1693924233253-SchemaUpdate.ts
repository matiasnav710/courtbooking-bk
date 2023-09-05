import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1693924233253 implements MigrationInterface {
    name = 'SchemaUpdate1693924233253'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "venue" ADD "startTime" TIMESTAMP WITH TIME ZONE NOT NULL`);
        await queryRunner.query(`ALTER TABLE "venue" ADD "endTime" TIMESTAMP WITH TIME ZONE NOT NULL`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "startTime" TIMESTAMP WITH TIME ZONE NOT NULL`);
        await queryRunner.query(`ALTER TABLE "booking" ADD "endTime" TIMESTAMP WITH TIME ZONE NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "endTime"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP COLUMN "startTime"`);
        await queryRunner.query(`ALTER TABLE "venue" DROP COLUMN "endTime"`);
        await queryRunner.query(`ALTER TABLE "venue" DROP COLUMN "startTime"`);
    }

}
