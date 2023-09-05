import { MigrationInterface, QueryRunner } from "typeorm";

export class SchemaUpdate1693916312306 implements MigrationInterface {
    name = 'SchemaUpdate1693916312306'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "venue" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "address" character varying NOT NULL, CONSTRAINT "PK_c53deb6d1bcb088f9d459e7dbc0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sport" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, CONSTRAINT "PK_c67275331afac347120a1032825" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "court" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_d8f2118c52b422b03e0331a7b91" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "booking" ("id" SERIAL NOT NULL, "userId" integer, "courtId" integer, CONSTRAINT "PK_49171efc69702ed84c812f33540" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_336b3f4a235460dc93645fbf222" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "booking" ADD CONSTRAINT "FK_af1f96549b26bc9eb36f0afbafb" FOREIGN KEY ("courtId") REFERENCES "court"("id") ON DELETE SET NULL ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_af1f96549b26bc9eb36f0afbafb"`);
        await queryRunner.query(`ALTER TABLE "booking" DROP CONSTRAINT "FK_336b3f4a235460dc93645fbf222"`);
        await queryRunner.query(`DROP TABLE "booking"`);
        await queryRunner.query(`DROP TABLE "court"`);
        await queryRunner.query(`DROP TABLE "sport"`);
        await queryRunner.query(`DROP TABLE "venue"`);
    }

}
