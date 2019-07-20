import { Controller, Query, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

import { CreateProductDto } from './interfaces/createproduct.dto';

import { ProductsService } from './products.service';
import { ProductEntity } from './product.entity';

import {
    ApiUseTags,
    ApiBearerAuth,
    ApiResponse,
    ApiOperation,
  } from '@nestjs/swagger';
import { ProductsRO } from './products.interface';

@Controller('products')
export class ProductsController {
    constructor(
        private readonly productsService: ProductsService,
      ) {}
    
      @ApiOperation({ title: 'Create product' })
      @ApiResponse({ status: 201, description: 'The product has been successfully created.'})
      @ApiResponse({ status: 403, description: 'Forbidden.' })
      @Post()
      async create(@Body() createProductDto: CreateProductDto) {
        return await this.productsService.create(createProductDto);
      }
    
      @ApiOperation({ title: 'Get all products' })
      @ApiResponse({ status: 200, description: 'Return all products.'})
      @Get()
      async findAll(@Query() query): Promise<ProductsRO>  {
        return await this.productsService.findAll(query); 
      }
    
    //   @Get(':id')
    //   findOne(@Param('id') id: string) {
    //     return this.productsService.findOneProduct(id);
    //   }
    
    //   @Put(':id')
    //   update(@Param('id') id: string, @Body() productDto: ProductDto) {
    //     return this.productsService.updateProduct(id, productDto);
    //   }
    
    //   @Delete(':id')
    //   remove(@Param('id') id: string) {
    //     return this.productsService.removeProduct(id);
    //   }    
}
