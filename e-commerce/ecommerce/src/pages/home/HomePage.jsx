import axios from "axios";
import { useEffect, useState } from "react";
import "./Homepage.css";
import Header from "../../components/Header";
import { ProductsGrid } from "./ProductsGrid";

const HomePage = ({ cart, getCartData }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getHomepageData = async () => {
      const response = await axios.get("api/products");
      setProducts(response.data);
    };

    getHomepageData();
  }, []);

  return (
    <div>
      <title>E-commerce Project</title>
      <link rel="icon" type="image/svg+xml" href="home-favicon.png" />
      <Header cart={cart} />
      <div className="home-page">
        <ProductsGrid products={products} getCartData={getCartData} />
      </div>
    </div>
  );
};

export default HomePage;
