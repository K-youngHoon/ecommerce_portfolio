// features/product/index.ts
import { ProductService } from "./product.service";
import { InMemoryProductRepository } from "./product.infra";

// 인프라 구현체를 생성자 주입하여 서비스 인스턴스 만들기
const productRepository = InMemoryProductRepository;
export const productService = new ProductService(productRepository);
