export class Product {
    id?: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
  
    constructor(name: string, price: number, description: string, imageUrl: string) {
      this.name = name;
      this.price = price;
      this.description = description;
      this.imageUrl = imageUrl;
    }
  }  