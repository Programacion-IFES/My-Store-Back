import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
    },
    {
      id: 2,
      name: 'Phone Miniii',
      price: 699,
      description: 'A great phone with one of the best cameras',
    },
    {
      id: 3,
      name: 'Phone Standard',
      price: 899,
      description: '',
    },
    {
      id: 4,
      name: 'iPhone 13XL',
      price: 1100,
      description: 'Great Big phone',
    },
  ];

  findAll() {
    return this.products;
  }
  findOneById(id: number) {
    console.log({ id });
    const car = this.products.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Product with id '${id}' not found`);
    }
    return car;
  }
}
