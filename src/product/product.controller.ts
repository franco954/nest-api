import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDTO } from './dto/product.dto';

@Controller('product')
export class ProductController {
    
    
    constructor(private readonly ProductService : ProductService) {}

    
    @Get('/')
    getProducts(): string {
        return this.ProductService.getProducts();
    }


    @Post('/')
    createProduct(@Res() res, @Body() createProductDTO : CreateProductDTO) {
        console.log(createProductDTO)
        return res.status(HttpStatus.OK).json({
            message: 'received'
        })
    }



}