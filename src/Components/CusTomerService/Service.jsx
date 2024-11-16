import { FcCustomerSupport } from "react-icons/fc";
import { FaCarSide } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { MdMonetizationOn } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
const Service = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 w-3/4  mx-auto text-center items-center">
      <div className="flex gap-2">
        <div>
          <FaCarSide className="text-5xl font-bold" />
        </div>
        <div>
          <h1>
            Free Delivery <br />
            from $78
          </h1>
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <FcCustomerSupport className="text-5xl font-bold" />
        </div>
        <div>
          <h1>
            99% customer <br />
            Feedbacks
          </h1>
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <TbTruckReturn className="text-5xl font-bold" />
        </div>
        <div>
          <h1>
            10 Day <br />
            for free return
          </h1>
        </div>
      </div>
      <div className="flex">
        <div>
          <MdMonetizationOn className="text-5xl font-bold" />
        </div>
        <div>
          <h1>
            Payment <br />
            secure system
          </h1>
        </div>
      </div>
      <div className="flex gap-2">
        <div>
          <BiSupport className="text-5xl font-bold" />
        </div>
        <div>
          <h1>
            24/7 <br />
            online supports
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Service;
