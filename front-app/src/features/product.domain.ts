export type Product = {
  id: string;
  name: string;
  price: number;
};

export const productModel = {
  create: (name: string, price: number): Product => {
    if (price <= 0) throw new Error("Price must be positive");
    return { id: crypto.randomUUID(), name, price };
  },
};
