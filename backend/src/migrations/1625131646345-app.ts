import {MigrationInterface, QueryRunner} from "typeorm";

export class app1625131646345 implements MigrationInterface {
    name = 'app1625131646345'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `demande` DROP FOREIGN KEY `FK_a47a4b13ca41e84aaad47429d01`");
        await queryRunner.query("ALTER TABLE `demande` CHANGE `datePriseEnCharge` `datePriseEnCharge` date NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `demande` CHANGE `dateSortie` `dateSortie` date NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `demande` CHANGE `createdById` `createdById` int NULL DEFAULT NULL");
        await queryRunner.query("ALTER TABLE `demande` ADD CONSTRAINT `FK_a47a4b13ca41e84aaad47429d01` FOREIGN KEY (`createdById`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `demande` DROP FOREIGN KEY `FK_a47a4b13ca41e84aaad47429d01`");
        await queryRunner.query("ALTER TABLE `demande` CHANGE `createdById` `createdById` int NULL");
        await queryRunner.query("ALTER TABLE `demande` CHANGE `dateSortie` `dateSortie` date NULL");
        await queryRunner.query("ALTER TABLE `demande` CHANGE `datePriseEnCharge` `datePriseEnCharge` date NULL");
        await queryRunner.query("ALTER TABLE `demande` ADD CONSTRAINT `FK_a47a4b13ca41e84aaad47429d01` FOREIGN KEY (`createdById`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
