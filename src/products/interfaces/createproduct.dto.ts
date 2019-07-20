import { ApiModelProperty } from '@nestjs/swagger';
import { Min } from 'class-validator';
import "reflect-metadata";
import { InputType } from 'type-graphql';


@InputType()
export class CreateProductDto {
    @ApiModelProperty()
    readonly name: string;
}
