//Entity
export type Product = {
  id: string;
  name: string;
  price: number;
};

export const productModel = {
  create(name: string, price: number): Product {
    if (price <= 0) throw new Error("Price must be positive");
    return {
      id: crypto.randomUUID(), // 혹은 DB에서 부여
      name,
      price,
    };
  },
};
