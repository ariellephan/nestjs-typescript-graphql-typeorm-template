import { ApiModelProperty } from '@nestjs/swagger';
import { ObjectType, Field } from 'type-graphql';
import { ProductEntity } from './product.entity';


export class ProductRO {
  @ApiModelProperty()
  product: ProductEntity;
}

@ObjectType('products')
export class ProductsRO {
  @ApiModelProperty()
  products: ProductEntity[];
  productsCount: number;
}
