import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getRepository, DeleteResult } from 'typeorm';
import { ProductEntity } from './product.entity';
import { CreateProductDto } from './interfaces/createproduct.dto';
import {ProductRO, ProductsRO } from './products.interface';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async findAllGraph(): Promise<ProductEntity[]> {

    const qb = await getRepository(ProductEntity)
      .createQueryBuilder('product')
      .select('product');

    qb.orderBy('product.createdAt', 'DESC');
    const products = await qb.getMany();

    return products;
  }

  async findAll(query): Promise<ProductsRO> {

    const qb = await getRepository(ProductEntity)
      .createQueryBuilder('product')
      .select('product');

    qb.orderBy('product.createdAt', 'DESC');

    const productsCount = await qb.getCount();

    if ('limit' in query) {
      qb.limit(query.limit);
    }

    if ('offset' in query) {
      qb.offset(query.offset);
    }

    const products = await qb.getMany();

    return {products, productsCount};
  }

  async findOne(where): Promise<ProductRO> {
    const product = await this.productRepository.findOne(where);
    return {product};
  }


  create(productData: CreateProductDto): Promise<ProductEntity> {

    let product = new ProductEntity();
    product.name = productData.name;

    const newProduct = this.productRepository.save(product);

    return newProduct;

  }

  async update(productData: any): Promise<ProductRO> {
    let toUpdate = await this.productRepository.findOne();
    let updated = Object.assign(toUpdate, productData);
    const product = await this.productRepository.save(updated);
    return {product};
  }

  async delete(id): Promise<DeleteResult> {
    return await this.productRepository.delete(id);
  }

}