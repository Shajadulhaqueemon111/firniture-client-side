import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="text-center mx-auto">
      <div>
        <img
          className="mx-auto"
          src="https://i.ibb.co/Z6tPpKQ/33aed961c21346631383f919d46f47fe.gif"
          alt=""
        />
      </div>
      <div>
        <Link to="/">
          <button className="btn btn-outline btn-primary">
            please-Go-To-Home-Page
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
