import Banner from "../../Banner/Banner";
import SecondBanner from "../../Banner/SecondBanner";
import Service from "../../CusTomerService/Service";
import NewArrival from "../../NewArrivals/NewArrival";
import NewsLetter from "../../NewsLatter/NewsLetter";
import Popular from "../../PopularProduct/Popular";
import Recently from "../../RecentlyAdded/Recently";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <SecondBanner></SecondBanner>
      <NewArrival></NewArrival>
      <Service></Service>
      <Popular></Popular>
      <Recently></Recently>
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
