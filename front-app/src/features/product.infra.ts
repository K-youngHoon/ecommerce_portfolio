import { Product } from "./product.domain";
// import { create } from "zustand";

type ProductState = {
  products: Product[];
  save: (product: Product) => void;
};

// export const useProductStore = create<ProductState>((set) => ({
//   products: [],
//   save: (product) =>
//     set((state) => ({ products: [...state.products, product] })),
// }));

export const ProductRepository = {
  save: async (product: Product) => {
    // useProductStore.getState().save(product);
  },
};
