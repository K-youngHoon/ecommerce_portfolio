import { useState } from "react";
import { productService } from "@src/features/product.app";

export default () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async () => {
    if (!name || !price) return;
    await productService.add(name, parseFloat(price));
    setName("");
    setPrice("");
  };

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Product Name"
      />
      <input
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
        type="number"
      />
      <button onClick={handleSubmit}>Add Product</button>
    </div>
  );
};
