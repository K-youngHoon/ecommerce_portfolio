import { productModel, Product } from "./product.domain";
import { ProductRepository } from "./product.repository";

export class ProductService {
  constructor(private readonly productRepo: ProductRepository) {}

  async add(name: string, price: number): Promise<Product> {
    // 1. 도메인 로직으로 Product 생성
    const product = productModel.create(name, price);

    // 2. Repository를 통해 영속화
    await this.productRepo.save(product);

    // 3. 결과 반환
    return product;
  }

  async findById(id: string): Promise<Product | null> {
    return await this.productRepo.findById(id);
  }
}
