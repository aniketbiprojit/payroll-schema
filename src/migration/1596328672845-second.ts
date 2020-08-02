import {MigrationInterface, QueryRunner} from "typeorm";

export class second1596328672845 implements MigrationInterface {
    name = 'second1596328672845'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(36) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `isActive` tinyint NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `company` (`id` varchar(36) NOT NULL, `companyName` varchar(255) NOT NULL, `isActive` tinyint NOT NULL, `userId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `department` (`id` varchar(36) NOT NULL, `departmentName` varchar(255) NOT NULL, `companyId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `designation` (`id` varchar(36) NOT NULL, `designationName` varchar(255) NOT NULL, `departmentId` varchar(36) NULL, `upperId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `employee` (`id` varchar(36) NOT NULL, `firstName` varchar(255) NOT NULL, `lastName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `designationId` varchar(36) NULL, `categoryId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `category` (`id` varchar(36) NOT NULL, `job_type` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `company` ADD CONSTRAINT `FK_c41a1d36702f2cd0403ce58d33a` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `department` ADD CONSTRAINT `FK_1c9f0159b4ae69008bd356bb1ce` FOREIGN KEY (`companyId`) REFERENCES `company`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `designation` ADD CONSTRAINT `FK_db94a67866860fc6d2e4a60388d` FOREIGN KEY (`departmentId`) REFERENCES `department`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `designation` ADD CONSTRAINT `FK_e45d420418f1eae055e8864fc20` FOREIGN KEY (`upperId`) REFERENCES `designation`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `employee` ADD CONSTRAINT `FK_e41e10c17872cdf2f511e5d0097` FOREIGN KEY (`designationId`) REFERENCES `designation`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `employee` ADD CONSTRAINT `FK_1ca0682057905f047445619b0f6` FOREIGN KEY (`categoryId`) REFERENCES `category`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `employee` DROP FOREIGN KEY `FK_1ca0682057905f047445619b0f6`");
        await queryRunner.query("ALTER TABLE `employee` DROP FOREIGN KEY `FK_e41e10c17872cdf2f511e5d0097`");
        await queryRunner.query("ALTER TABLE `designation` DROP FOREIGN KEY `FK_e45d420418f1eae055e8864fc20`");
        await queryRunner.query("ALTER TABLE `designation` DROP FOREIGN KEY `FK_db94a67866860fc6d2e4a60388d`");
        await queryRunner.query("ALTER TABLE `department` DROP FOREIGN KEY `FK_1c9f0159b4ae69008bd356bb1ce`");
        await queryRunner.query("ALTER TABLE `company` DROP FOREIGN KEY `FK_c41a1d36702f2cd0403ce58d33a`");
        await queryRunner.query("DROP TABLE `category`");
        await queryRunner.query("DROP TABLE `employee`");
        await queryRunner.query("DROP TABLE `designation`");
        await queryRunner.query("DROP TABLE `department`");
        await queryRunner.query("DROP TABLE `company`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
