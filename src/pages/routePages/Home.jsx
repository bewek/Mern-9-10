import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/slice";

const Home = () => {
  const dispatch = useDispatch();
  const product = {
    name: "Dell Inspiron 15",
    variant: "Intel Core i5, 16GB RAM, 512GB SSD",
    description:
      "A powerful and reliable laptop perfect for work, study, programming, and everyday use.",
    price: 799,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "40px",
      }}
    >
      {/* Product Card */}
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "#fff",
          borderRadius: "12px",
          padding: "25px",
          display: "flex",
          gap: "30px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Left - Image */}
        <div
          style={{
            width: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{
              width: "100%",
              maxHeight: "300px",
              objectFit: "contain",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* Right - Details */}
        <div
          style={{
            width: "55%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h2 style={{ marginTop: 0 }}>{product.name}</h2>

          <p>
            <strong>Variant:</strong> {product.variant}
          </p>

          <p style={{ color: "#555", lineHeight: "1.6" }}>
            <strong>Description:</strong> {product.description}
          </p>

          <p>
            <strong>Availability:</strong>{" "}
            <span style={{ color: "green" }}>In Stock</span>
          </p>

          <h2 style={{ color: "#e63946", marginTop: "10px" }}>
            ${product.price}
          </h2>

          {/* Add To Cart */}
          <button
            onClick={() => {
              console.log("Added");
              dispatch(addItemToCart());
            }}
            style={{
              marginTop: "auto",
              padding: "12px 20px",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "6px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
