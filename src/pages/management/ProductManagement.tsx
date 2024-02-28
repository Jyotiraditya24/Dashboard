import * as React from "react";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const ProductManagement = () => {
  const [product, setProduct] = useState<{
    name: string;
    price: number;
    stock: number;
  }>({ name: "", price: 0, stock: 0 });

  const [photo, setPhoto] = useState<string>(img);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(product); // Do whatever you want with the product data
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];
    const reader: FileReader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPhoto(reader.result);
        }
      };
    }
  };

  return (
    <div className="adminContainer">
      <Sidebar />
      <main className="product-management">
        <section>
          <strong>ID -iquwfggqf</strong>
          <img src={photo} alt="Product Image" />
          <p>{product.name}</p>
          {product.stock > 0 ? (
            <span className="green">{product.stock} Available</span>
          ) : (
            <span className="red">Not Available</span>
          )}
          <h3>${product.price}</h3>
        </section>
        <article>
          <form onSubmit={handleSubmit}>
            <h2>Manage</h2>
            <div>
              <label htmlFor="name">Name</label>
              <input
                required
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                value={product.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                required
                type="number"
                id="price"
                placeholder="Price"
                name="price"
                value={product.price}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="stock">Stock</label>
              <input
                required
                type="number"
                id="stock"
                placeholder="Stock"
                name="stock"
                value={product.stock}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="photo">Photo</label>
              <input
                required
                type="file"
                id="photo"
                placeholder="Photo URL"
                name="photo"
                onChange={handleImageChange}
              />
            </div>
            {photo && <img src={photo} alt="New Image"></img>}
            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default ProductManagement;
