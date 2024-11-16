import { Link } from "react-router-dom";

const SecondBanner = () => {
  return (
    <div className="flex flex-wrap justify-evenly gap-4 mt-10">
      <Link to="/">
        <div>
          <img src="https://i.ibb.co.com/sRqNWD2/feature1-min.jpg" alt="" />
        </div>
      </Link>
      <Link to="/">
        <div>
          <img src="https://i.ibb.co.com/rfJyKCz/feature2-min.jpg" alt="" />
        </div>
      </Link>
    </div>
  );
};

export default SecondBanner;
