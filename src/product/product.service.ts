import { Injectable } from '@nestjs/common';


@Injectable()
export class ProductService {
        
    getProducts(): string {
        return 'Hello, this are all my products!';
    }

}

