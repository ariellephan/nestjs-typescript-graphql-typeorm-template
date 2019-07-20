import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from 'type-graphql';

// @ObjectType()
@Entity('product')
export class ProductEntity {

    // @Field()
    @PrimaryGeneratedColumn()
    id: string;

    // @Field()
    @Column()
    name: string; 

    // @Field()
    @Column({ type: 'datetime' })
    createdAt: Date;

    // @Field()
    @Column({ type: 'datetime' })
    updatedAt: Date;
}
