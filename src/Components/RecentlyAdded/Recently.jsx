import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material"; // Import Material-UI components
import "./style2.css";

const Recently = () => {
  const [Recents, setRecent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((data) => setRecent(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="mt-10 mb-10">
      <h1 className="text-xl font-bold">Recently Added</h1>
      <div className="mt-10">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {Recents.map((recent) => (
            <SwiperSlide key={recent._id}>
              <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={recent.image}
                    alt={recent.name}
                    sx={{ height: 150, width: "auto" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {recent.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      {recent.name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                      Price: ${recent.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Recently;
