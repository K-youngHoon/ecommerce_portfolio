import { Product, productModel } from "./product.domain";
import { ProductRepository } from "./product.infra";

export const productService = {
  add: async (name: string, price: number): Promise<Product> => {
    const product = productModel.create(name, price);
    await ProductRepository.save(product);
    return product;
  },
};
