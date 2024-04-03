import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../../components/Sidebar.js";
import { OrderItem, OrderType } from "../../types.js";

const img =
  "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

const orderItems: OrderItem[] = [
  {
    name: "Puma Shoes",
    photo: img,
    price: 2000,
    quantity: 4,
    _id: "abcd",
  },
];
const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderType>({
    name: "Jyotiradiya",
    address: "Jaipur,MUJ",
    city: "Jaipur",
    country: "India",
    state: "Rajasthan",
    pincode: "303007",
    status: "Processing",
    subtotal: 100,
    discount: 20,
    shippingCharges: 4,
    tax: 1,
    total: 100 + 4 + 1 - 20,
    orderItems: orderItems,
    _id: "1",
  });

  const {
    name,
    address,
    city,
    country,
    state,
    pincode,
    status,
    subtotal,
    discount,
    shippingCharges,
    tax,
    total,
  } = order;

  const updateHandler = () => {
    setOrder((previousOrder) => ({
      ...previousOrder,
      status:
        previousOrder.status === "Processing"
          ? "Shipped"
          : previousOrder.status === "Shipped"
          ? "Delivered"
          : "Processing",
    }));
  };
  return (
    <div className="adminContainer">
      <Sidebar />
      <main className="product-management">
        <section
          style={{
            padding: "2rem",
          }}
        >
          <h2>Order Items</h2>
          {order.orderItems.map((i) => (
            <ProductCart
              name={i.name}
              photo={i.photo}
              price={i.price}
              quantity={i.quantity}
              _id={i._id}
              key={i._id}
            ></ProductCart>
          ))}
        </section>

        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name:{name}</p>
          <p>
            Address:{`${address}, ${city}, ${state}, ${country}, ${pincode}`}
          </p>
          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>Shipping charges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>
            <span
              className={
                status === "Delivered"
                  ? "purple"
                  : status === "Shipped"
                  ? "green"
                  : "red"
              }
            >
              Status: {status}
            </span>
          </p>
          <button onClick={updateHandler}>Update Status</button>
        </article>
      </main>
    </div>
  );
};

const ProductCart = ({ name, photo, price, quantity, _id }: OrderItem) => {
  return (
    <div className="transaction-product-cart">
      <img src={photo} alt={name}></img>
      <Link to={`/product/${_id}`}>{name}</Link>
      <span>
        ${price} X {quantity} = ${price * quantity}
      </span>
    </div>
  );
};

export default TransactionManagement;
