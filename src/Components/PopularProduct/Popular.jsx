import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    fetch("https://server-side-five-azure.vercel.app/popular")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => setPopularProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="mt-6 ">
      <h1 className="text-xl font-bold">Popular Products</h1>

      <div className="flex flex-wrap gap-2 mt-6">
        {popularProducts.map((populars) => {
          return (
            <div className="mx-auto" key={populars.id}>
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={populars.image}
                    alt={populars.title}
                    sx={{ height: "300px" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {populars.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {populars.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      Price: ${populars.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
