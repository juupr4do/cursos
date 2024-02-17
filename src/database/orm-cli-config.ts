import { DataSource } from "typeorm";
import { dataSourceOptions } from "./database.module";
import { Migration1705951344533 } from "src/migration/1705951344533-migration";
import { CreateTagsTable1705952945675 } from "src/migration/1705952945675-CreateTagsTable";
import { CreateCoursesTagsTable1705955868196 } from "src/migration/1705955868196-CreateCoursesTagsTable";
import { AddCoursesIdToCoursesTagsTable1705956532219 } from "src/migration/1705956532219-AddCoursesIdToCoursesTagsTable";
import { AddTagsIdToCoursesTagsTable1706016306145 } from "src/migration/1706016306145-AddTagsIdToCoursesTagsTable";

export const dataSource = new DataSource({
    ...dataSourceOptions,
    synchronize: false,
    migrations: 
        [
            Migration1705951344533, 
            CreateTagsTable1705952945675, 
            CreateCoursesTagsTable1705955868196,
            AddCoursesIdToCoursesTagsTable1705956532219,
            AddTagsIdToCoursesTagsTable1706016306145,
        ],
})