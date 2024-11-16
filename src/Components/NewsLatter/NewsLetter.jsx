const NewsLetter = () => {
  return (
    <div
      className="flex flex-wrap justify-around mt-10 h-100% p-10"
      style={{
        backgroundImage:
          "url(https://i.ibb.co.com/FXfMK1v/pexels-photo-281260.jpg)",
      }}
    >
      <div>
        <h1 className="text-xl font-bold">
          Newsletter & Get Updates <br />
          Sign up for our newsletter to get up-to-date from us
        </h1>
      </div>
      <div>
        <input className="p-3" type="text" name="" id="" />
        <button className="btn bg-orange-500">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetter;
