import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  // CRUD

  //Read

  @Get()
  getAllProducts() {
    return this.productService.findAll();
  }

  @Get(':id')
  getProductsById(@Param('id', ParseIntPipe) id: number) {
    console.log({ id });
    //throw new Error('Ayuda!');
    return this.productService.findOneById(+id);
  }

  // Create

  @Post()
  createProduct(@Body() body: any) {
    return body;
  }

  // Update

  @Put(':id')
  updateProduct(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
    console.log({ id });
    return body;
  }

  // Delete
  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return {
      method: 'delete',
      id: id,
    };
  }
}
