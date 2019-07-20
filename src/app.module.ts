import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import ormConfig from '../ormconfig';
@Module({
  imports: [
    TypeOrmModule.forRoot(ormConfig),
    ProductsModule,
    DatabaseModule,
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      typePaths: ['./**/*.graphql'],
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
