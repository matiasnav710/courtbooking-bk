import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1694057004971 implements MigrationInterface {
    name = 'SchemaUpdate1694057004971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "court" ADD "description" character varying NOT NULL DEFAULT ''`);
        await queryRunner.query(`ALTER TABLE "court" ADD "image" character varying NOT NULL DEFAULT ''`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "court" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "court" DROP COLUMN "description"`);
    }

}
