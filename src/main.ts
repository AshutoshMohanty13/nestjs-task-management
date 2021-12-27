import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // to create swagger docs automatically.
  //install @nestjs/swagger swagger-ui-express modules
  const config = new DocumentBuilder()
    .setTitle("Nest API")
    .setDescription("The API docs")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/swagger", app, document);

  //this is use validation pipes globally and generally used in the DTOs.
  app.useGlobalPipes(new ValidationPipe());

  //to create a complete CRUD automatically we use the following command i.e. nest g resource fileName

  await app.listen(3000);
}
bootstrap();
