import { Product } from "./product.domain";
import { ProductRepository } from "./product.repository";

// 예시: Zustand 대신 간단한 배열로 인메모리 저장
const inMemoryDb: Product[] = [];

export const InMemoryProductRepository: ProductRepository = {
  async save(product: Product) {
    inMemoryDb.push(product);
    // 여기서 Redux, Zustand, DB, API 호출 등 어떤 방법이든 구현 가능
  },

  async findById(id: string) {
    const found = inMemoryDb.find((p) => p.id === id);
    return found ?? null;
  },
};
