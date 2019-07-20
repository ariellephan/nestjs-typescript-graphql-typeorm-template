import { ApiModelProperty } from '@nestjs/swagger';
import { Column } from 'typeorm';
export class ProductDto {
    @ApiModelProperty()
    readonly id: string;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    @Column({ type: 'datetime' })
    readonly createdAt: Date;

    @ApiModelProperty()
    @Column({ type: 'datetime' })
    readonly updatedAt: Date;
}