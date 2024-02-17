import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Course } from "./entities/courses.entity";
import { Tag } from "src/courses/entities/tags.entity";
import { CoursesController } from './courses.controller';
import { CoursesService } from "./courses.service";

@Module({
    imports: [TypeOrmModule.forFeature([Course, Tag])],
    controllers: [CoursesController],
    providers: [CoursesService],
})

export class CourseModule {}