import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddTagsIdToCoursesTagsTable1706016306145 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'courses_tags_tags',
            new TableColumn({
                name: 'tagsId',
                type: 'uuid',
                isNullable: true
            }),
        )

        await queryRunner.createForeignKeys(
            'courses_tags_tags',
            [new TableForeignKey({
                name: 'courses_tags_tags',
                columnNames: ['tagsId'],
                referencedTableName: 'tags',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL'
            })]
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('courses_tags_tags')
        await queryRunner.dropForeignKeys(table, table.foreignKeys)
        await queryRunner.dropColumn('courses_tags_tags', 'tagsId')
    }
}

