export class CreateProductDTO {
    readonly _id: string;
    readonly name: string;
    readonly description: string;
    readonly imageURL: string;
    readonly price: number;
    readonly createdAt: Date;
}