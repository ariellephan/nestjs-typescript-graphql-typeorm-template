import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductEntity } from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsResolver } from './products.resolver';


@Module({
  imports: [
    DatabaseModule,
    TypeOrmModule.forFeature([ProductEntity])
  ],
  providers: [
    ProductsResolver,
    ProductsService,
  ],
  controllers: [ProductsController]
})
export class ProductsModule {
  constructor(private readonly productsService: ProductsService) {}
}
