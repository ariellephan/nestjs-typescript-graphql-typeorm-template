import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { ProductsService } from './products.service';
import { CreateProductDto } from './interfaces/createproduct.dto';
import { ProductEntity } from './product.entity';

const pubSub = new PubSub();

@Resolver(of => ProductEntity)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Query(returns => [ProductEntity])
  async getProducts() {
    return await this.productsService.findAllGraph();
  }

  // @Query('product')
  // async findOneById(
  //   @Args('id', ParseIntPipe)
  //   id: number,
  // ): Promise<Product> {
  //   return await this.productsService.findOneById(id);
  // }

  // @Mutation('createProduct')
  // async create(@Args('createProductInput') args: CreateProductDto): Promise<ProductEntity> {
  //   const createdProduct = await this.productsService.create(args);
  //   pubSub.publish('productCreated', { productCreated: createdProduct });
  //   return createdProduct;
  // }

  // @Subscription('productCreated')
  // productCreated() {
  //   return pubSub.asyncIterator('productCreated');
  // }
}