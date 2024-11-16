import { useEffect, useState } from "react";
import NewArrivalCard from "./NewArrivalCard";

const NewArrival = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    fetch("https://server-side-five-azure.vercel.app/product")
      .then((res) => {
        if (!res.ok) {
          throw new Error("");
        }
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const filteredProducts = () => {
    if (filter === "All") return products;
    return products.filter((product) => product[filter] === true);
  };

  return (
    <div className="mt-52 mb-10">
      <div className="flex justify-between">
        <div>
          <h1 className="text-xl font-bold">New Arrivals</h1>
        </div>
        <div className="flex">
          <button
            className="btn btn-outline btn-primary"
            onClick={() => setFilter("OnSell")}
          >
            OnSell
          </button>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => setFilter("HotSell")}
          >
            HotSell
          </button>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => setFilter("Trend")}
          >
            Trend
          </button>
          <button
            className="btn btn-outline btn-primary"
            onClick={() => setFilter("BestSell")}
          >
            BestSell
          </button>
          <button
            className="btn btn-outline btn-secondary"
            onClick={() => setFilter("All")}
          >
            All
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-10">
        {filteredProducts().map((product) => (
          <NewArrivalCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
