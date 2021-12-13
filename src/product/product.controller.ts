import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';

import { CreateProductDTO } from './dto/product.dto';

import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService){}

    @Post('/createProduct')
    async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO){
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Product Successfully Created',
            product: product
        });
    }

    @Get('/getAllProducts')
    async getProducts(@Res() res){
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json({
            products: products
        })
    }

    @Get('/:productID')
    async getProduct(@Res() res, @Param('productID') productID){
        const product = await this.productService.getProduct(productID);
        if (!product) {
            return res.status(HttpStatus.BAD_REQUEST);
        }
        return res.status(HttpStatus.OK).json(product);
    }

    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('productID') productID) {
        const productDeleted = await this.productService.deleteProduct(productID);
        return res.status(HttpStatus.OK).json({
            message: 'product Deleted Succesfully',
            productDeleted
        })
    }

}
