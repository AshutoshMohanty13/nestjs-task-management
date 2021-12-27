import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { isUUID } from "class-validator";
import { stringify } from "querystring";
import { LessonService } from "./lesson.service";
import { LessonType } from "./lesson.type";

@Resolver((of) => LessonType)
export class LessonResolver {
  //'of' specifies what is the type of the resolver .
  //queries: are used to retrive data
  //mutations:  create new data or change existing data.

  constructor(private lessonService: LessonService) {}

  @Query((returns) => LessonType)
  lesson() {
    return {
      id: "sdjhsdfljksd",
      name: "physics class",
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  @Mutation((returns) => LessonType)
  createLesson(
    @Args("name") name: string,
    @Args("startDate") startDate: string,
    @Args("endDate") endDate: string
  ) {
    return this.lessonService.createLesson(name, startDate, endDate);
  }
}
