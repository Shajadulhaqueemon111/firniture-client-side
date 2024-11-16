import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:5000/product/${_id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [_id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { name, image, title, price, description, SKU, category } = product;

  return (
    <div className="flex flex-wrap justify-evenly mt-20 ">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold">Title:{title}</h1>
        <p>
          {" "}
          <span className="font-bold">SKU:</span> {SKU}
        </p>
        <h1>
          <span className="font-bold">Name:</span>
          {name}
        </h1>
        <p>
          <span className="font-bold">Description: </span>
          {description}
        </p>

        <p>
          <span className="font-bold">Category:</span> {category}
        </p>
        <p>
          <span className="font-bold">Price:</span> ${price}
        </p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
