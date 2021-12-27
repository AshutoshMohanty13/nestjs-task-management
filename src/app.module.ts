import { Module } from "@nestjs/common";
import { TasksModule } from "./tasks/tasks.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GraphQLModule } from "@nestjs/graphql";
import { LessonModule } from "./lesson/lesson.module";
import { Lesson } from "./lesson/lesson.entity";
import { TasksController } from "./tasks/tasks.controller";
import { TasksService } from "./tasks/tasks.service";
import { LessonService } from "./lesson/lesson.service";

@Module({
  imports: [
    TasksModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      // typePaths: ["./**/*.graphql"],
      // definitions: {
      //   //The path property of the definitions object indicates where to save generated TypeScript output
      //   path: join(process.cwd(), "src/graphql.ts"),
      // },
    }),

    TypeOrmModule.forRoot({
      type: "mongodb",
      url: "",
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Lesson],

      //   type: "postgres",
      //   host: "localhost",
      //   port: 5432,
      //   username: "postgres",
      //   password: "postgres",
      //   database: "apple",
      //   autoLoadEntities: true,
      //   // synchronize: true,
    }),
    LessonModule,
  ],
  controllers: [TasksController],
  providers: [TasksService, LessonService],
})
export class AppModule {}
