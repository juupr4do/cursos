import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddCoursesIdToCoursesTagsTable1705956532219 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'courses_tags_tags',
            new TableColumn({
                name: 'coursesId',
                type: 'uuid',
                isNullable: true
            }),
        )

        await queryRunner.createForeignKeys(
            'courses_tags_tags',
            [new TableForeignKey({
                name: 'courses_tags_courses',
                columnNames: ['coursesId'],
                referencedTableName: 'courses',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL'
            })]
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('courses_tags_tags')
        await queryRunner.dropForeignKeys(table, table.foreignKeys)
        await queryRunner.dropColumn('courses_tags_tags', 'coursesId')
    }
}


