import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/product";
import "../../css/Home.css";
import { addItemToCart } from "../../redux/slice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.product.items);
  const cartCount = useSelector((state) => state.cart.items);

  return (
    <div className="home-container">
      {/* Products Grid */}
      <div className="products-grid">
        {products.map((item) => (
          <div className="product-card" key={item.id}>
            {/* Product Image */}
            <div className="product-image-container">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="product-image"
              />
            </div>

            {/* Product Details */}
            <div className="product-details">
              <p className="product-category">{item.category}</p>

              <h2 className="product-title">{item.title}</h2>

              <p className="product-brand">Brand: {item.brand}</p>

              <div className="product-rating">
                <span>{item.rating}</span>
                <span className="rating-label">Customer rating</span>
              </div>

              <div className="product-bottom">
                <h3 className="product-price">
                  ${Number(item.price).toFixed(2)}
                </h3>

                <span className="product-stock">{item.stock} in stock</span>
              </div>

              {cartCount.find((cartData) => cartData.id === item.id) ? (
                <button className="add-to-cart-btn-remove">
                  Remove from Cart
                </button>
              ) : (
                <button
                  className="add-to-cart-btn"
                  onClick={() => dispatch(addItemToCart(item))}
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
