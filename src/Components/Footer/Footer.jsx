// import { CiLocationOn } from "react-icons/ci";

// const Footer = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <footer className="bg-base-200 text-base-content p-10 flex justify-between">
//         <div>
//           <aside>
//             <h1>
//               Got Question? Call us 24/7 <br />
//               <p className="text-xl font-bold"> [80] 1017 197 </p>
//               17 Princess Road, London, Greater London NW1 8JR, UK
//             </h1>
//             <p>
//               <button className="btn bg-orange-400 flex">
//                 <CiLocationOn className="text-xl font-bold" /> View On Map
//               </button>
//             </p>
//           </aside>
//         </div>
//         <div className="flex flex-wrap gap-3 justify-between">
//           <div>
//             <nav>
//               <h6 className="footer-title">Services</h6>
//               <li className="link link-hover">Branding</li>
//               <li className="link link-hover">Design</li>
//               <li className="link link-hover">Marketing</li>
//               <li className="link link-hover">Advertisement</li>
//             </nav>
//           </div>
//           <div>
//             <nav>
//               <h6 className="footer-title">Company</h6>
//               <li className="link link-hover">About us</li>
//               <li className="link link-hover">Contact</li>
//               <li className="link link-hover">Jobs</li>
//               <li className="link link-hover">Press kit</li>
//             </nav>
//           </div>
//           <div>
//             <nav>
//               <h6 className="footer-title">Legal</h6>
//               <li className="link link-hover">Terms of use</li>
//               <li className="link link-hover">Privacy policy</li>
//               <li className="link link-hover">Privacy policy</li>
//               <li className="link link-hover">Cookie policy</li>
//             </nav>
//           </div>
//         </div>
//       </footer>

//       {/* Copyright Section */}
//       <div className="flex flex-wrap justify-between bg-orange-500 h-20 p-10">
//         <h1>@Copyrights By Xpeedstudio - 2018</h1>
//         <h1>Allow payment based on</h1>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="mt-6">
      <footer className="footer bg-base-200 text-base-content p-10">
        <aside>
          <h1>
            Got Question? Call us 24/7 <br />
            <p className="text-xl font-bold"> [80] 1017 197 </p>
            17 Princess Road, London, Greater London NW1 8JR, UK
          </h1>
          <p>
            <button className="btn bg-orange-400 flex">
              <CiLocationOn className="text-xl font-bold" /> View On Map
            </button>
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <div className="flex flex-wrap justify-between bg-orange-500 h-20 p-10 ">
        <h1>@Copyrights By Xpeedstudio - 2018</h1>
        <h1>Allow payment base on</h1>
      </div>
    </div>
  );
};

export default Footer;
