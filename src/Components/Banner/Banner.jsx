import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";
import "./position.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  const imageSize = {
    height: "650px",
  };
  return (
    <div className="mt-28">
      <>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                style={imageSize}
                src="https://i.ibb.co.com/sPswn2x/Top-7-Sustainable-Furniture-Materials-for-Your-Home.webp"
                alt="Deals of the Week"
              />
              <div className="overlay-text">
                <p>Up to 30% off</p>
                <h2 className="text-3xl font-bold">Lets home happy place</h2>
                <button className="btn btn-outline bg-orange-500">
                  View-Collection
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                style={imageSize}
                src="https://i.ibb.co.com/G2Hqmq8/9-rekomendasi-furniture-stores-atau-toko-furnitur-terbaik.jpg"
                alt="Deals of the Week"
              />
              <div className="overlay-text">
                <p>Up to 30% off</p>
                <h2 className="text-3xl font-bold">Lets home happy place</h2>
                <button className="btn btn-outline bg-orange-500">
                  View-Collection
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-slide-content">
              <img
                style={imageSize}
                src="https://i.ibb.co.com/WWHgm3c/800-width.png"
                alt="Deals of the Week"
              />
              <div className="overlay-text">
                <p>Up to 30% off</p>
                <h2 className="text-3xl font-bold">Lets home happy place</h2>
                <button className="btn btn-outline bg-orange-500">
                  View-Collection
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Banner;
