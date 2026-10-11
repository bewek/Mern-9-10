import { useDispatch, useSelector } from "react-redux";
import "../../css/Cart.css";
import { clearCart, removeFromCart } from "../../redux/slice copy";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart.items);
  console.log(cartData);

  const [cartItems, setCartItems] = useState(cartData);

  useEffect(() => {
    setCartItems(cartData);
  }, [cartData]);

  const manageQuantity = (id, qty) => {
    let quantity = parseInt(qty) > 1 ? parseInt(qty) : 1;
    const cartTempItems = cartData.map((item) => {
      return item.id === id ? { ...item, quantity } : item;
    });
    console.log(cartTempItems[0]);
    setCartItems(cartTempItems);
  };

  const handleCheckout = () => {
    dispatch(clearCart());
    alert("Order Placed");
    navigate("/");
  };
  return (
    <div className="cart-page">
      <div className="cart-container">
        <div className="cart-header">
          <h1>Shopping Cart</h1>
          <p>
            <b style={{ color: "black", fontSize: "20px" }}>
              {cartItems.length}
            </b>{" "}
            items in cart
          </p>
        </div>

        {cartItems.length > 0 ? (
          <div className="cart-layout">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div className="cart-card" key={item.id}>
                  <div className="cart-image">
                    <img src={item.thumbnail} alt={item.title} />
                  </div>

                  {/* Left: Title and brand */}
                  <div className="cart-details">
                    <h3>{item.title}</h3>
                    <p className="cart-brand">
                      {item.brand || "General Brand"}
                    </p>
                  </div>

                  {/* Right: Price and remove button */}
                  <div className="cart-actions">
                    {/* <input
                      type="number"
                      placeholder="Enter quantity"
                      onChange={(e) => manageQuantity(item.id, e.target.value)}
                    /> */}

                    <div className="quantity-control">
                      <button
                        className="quantity-btn"
                        onClick={() =>
                          manageQuantity(item.id, item.quantity - 1)
                        }
                      >
                        −
                      </button>

                      <span className="quantity-value">
                        {item.quantity || 1}
                      </span>

                      <button
                        className="quantity-btn"
                        onClick={() =>
                          manageQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <p className="cart-price">
                      $
                      {(item.quantity
                        ? item.price * item.quantity
                        : item.price
                      ).toFixed(2)}
                    </p>

                    <button
                      className="remove-btn"
                      onClick={() => dispatch(removeFromCart(item))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛍️</div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <a href="/" className="continue-shopping">
              Continue Shopping
            </a>
          </div>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
        <div
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Total:
          {cartItems
            .reduce(
              (sum, item) =>
                item.quantity
                  ? sum + item.price * item.quantity
                  : sum + item.price,
              0,
            )
            .toFixed(2)}
        </div>
      </div>
    </div>
  );
};

export default Cart;
