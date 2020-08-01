import {MigrationInterface, QueryRunner} from "typeorm";

export class first1596298532969 implements MigrationInterface {
    name = 'first1596298532969'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(36) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `isActive` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `department` (`id` varchar(36) NOT NULL, `departmentName` varchar(255) NOT NULL, `companyId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `company` (`id` varchar(36) NOT NULL, `companyName` varchar(255) NOT NULL, `isActive` tinyint NOT NULL, `userId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `department` ADD CONSTRAINT `FK_1c9f0159b4ae69008bd356bb1ce` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `company` ADD CONSTRAINT `FK_c41a1d36702f2cd0403ce58d33a` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `company` DROP FOREIGN KEY `FK_c41a1d36702f2cd0403ce58d33a`");
        await queryRunner.query("ALTER TABLE `department` DROP FOREIGN KEY `FK_1c9f0159b4ae69008bd356bb1ce`");
        await queryRunner.query("DROP TABLE `company`");
        await queryRunner.query("DROP TABLE `department`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
