import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1693918161004 implements MigrationInterface {
    name = 'SchemaUpdate1693918161004'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "court" DROP CONSTRAINT "FK_3a8965820bd95c8827a247ab192"`);
        await queryRunner.query(`ALTER TABLE "court" DROP CONSTRAINT "FK_5b522719392646d6fa845221c59"`);
        await queryRunner.query(`ALTER TABLE "court" DROP CONSTRAINT "UQ_3a8965820bd95c8827a247ab192"`);
        await queryRunner.query(`ALTER TABLE "court" DROP CONSTRAINT "UQ_5b522719392646d6fa845221c59"`);
        await queryRunner.query(`ALTER TABLE "court" ADD CONSTRAINT "FK_3a8965820bd95c8827a247ab192" FOREIGN KEY ("venueId") REFERENCES "venue"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "court" ADD CONSTRAINT "FK_5b522719392646d6fa845221c59" FOREIGN KEY ("sportId") REFERENCES "sport"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "court" DROP CONSTRAINT "FK_5b522719392646d6fa845221c59"`);
        await queryRunner.query(`ALTER TABLE "court" DROP CONSTRAINT "FK_3a8965820bd95c8827a247ab192"`);
        await queryRunner.query(`ALTER TABLE "court" ADD CONSTRAINT "UQ_5b522719392646d6fa845221c59" UNIQUE ("sportId")`);
        await queryRunner.query(`ALTER TABLE "court" ADD CONSTRAINT "UQ_3a8965820bd95c8827a247ab192" UNIQUE ("venueId")`);
        await queryRunner.query(`ALTER TABLE "court" ADD CONSTRAINT "FK_5b522719392646d6fa845221c59" FOREIGN KEY ("sportId") REFERENCES "sport"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "court" ADD CONSTRAINT "FK_3a8965820bd95c8827a247ab192" FOREIGN KEY ("venueId") REFERENCES "venue"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
