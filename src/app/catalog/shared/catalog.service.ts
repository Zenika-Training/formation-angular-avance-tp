import { Injectable } from '@angular/core';
import { Product } from '../../core/models/product'

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  private products: Product[] = [
    {
      title: 'Coding the weslch',
      description: 'Tee-shirt col rond - Homme',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5e870cc921c8a10011479d4b/customProduct/t-shirt%20zenika%204.png',
      price: 20,
      stock: 2
    },
    {
      title: 'Coding the world',
      description: 'Tee-shirt col rond - Homme',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5e8701cb6dd1fd00111a9613/customProduct/t-shirt%20zenika%202.png',
      price: 18,
      stock: 2
    },
    {
      title: 'Duck Vador',
      description: 'Tee-shirt col rond - Femme',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5e8717235ec8da0011d86e64/customProduct/Mockup%20zenika%2066.png',
      price: 21,
      stock: 2
    },
    {
      title: 'Coding the snow',
      description: 'Tee-shirt col rond - Femme',
      photo: 'https://s3.eu-central-1.amazonaws.com/balibart-s3/Products/5e871ba921c8a10011479d5b/customProduct/Mockup zenika 54.png',
      price: 19,
      stock: 2
    }
  ];


  constructor() { }

  fetchProducts(): Promise<Product[]> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.products);
      }, 500);
    })
  }

  decrementStock (product: Product) {
    product.stock--;
  }

  isAvailable (product: Product) {
    return product.stock !== 0;
  }

  isTheLast (product: Product) {
    return product.stock === 1
  }
}
