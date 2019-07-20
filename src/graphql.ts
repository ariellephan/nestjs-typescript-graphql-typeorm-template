
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class CreateProductInput {
    purchasePlatformId: string;
    purchaseId: string;
    modelName: string;
    modelPurchaseId: string;
    grade: string;
    product: string;
    imei: string;
}

export abstract class IMutation {
    abstract createProduct(createProductInput?: CreateProductInput): Product | Promise<Product>;
}

export class Product {
    id: string;
    purchasePlatformId?: string;
    purchaseId: string;
    modelName: string;
    modelPurchaseId: string;
    grade: string;
    product: string;
    productStatus?: boolean;
    counterProduct?: string;
    counterProductStatus?: boolean;
    imei: string;
    isReceived?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export abstract class IQuery {
    abstract getProducts(): Product[] | Promise<Product[]>;

    abstract product(id: string): Product | Promise<Product>;
}

export abstract class ISubscription {
    abstract productCreated(): Product | Promise<Product>;
}
