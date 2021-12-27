import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    TasksModule,
    AuthModule,
    // GraphQLModule.forRoot({
    //   autoSchemaFile: 'schema.gql'
    // }),

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'apple',
      autoLoadEntities: true,
      synchronize: true
      
    })
  ],
  
})
export class AppModule {}
