import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { CourseModule } from './courses/courses.module';
import { CoursesService } from './courses/courses.service';
import { CoursesController } from './courses/courses.controller';

@Module({
  imports: [DatabaseModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
