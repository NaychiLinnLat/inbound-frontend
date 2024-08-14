import footerLogo from "../assets/img/footerLogo.png";
import { FaFacebook, FaFacebookF } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-white mt-10">
      <hr className="text-[#b5b4b0]" />
      <div className="flex mt-4">
        <span className="mx-auto p-3 font-bold text-2xl text-blue">
          CONTACT PHONE NUMBER
        </span>
      </div>
      <div className="flex justify-center  gap-8 m-5 flex-wrap">
        <div className=" border border-blue rounded w-80 h-24 ">
          <div className="font-bold text-lg text-blue flex justify-center items-center mt-2 mb-1">
            Admin Department
          </div>
          <div className="flex font-semibold text-lg justify-center items-center">
            379088, 384865, 252372, 246902
          </div>
        </div>
        <div className=" border border-blue rounded w-80 h-24 ">
          <div className="font-bold text-lg text-blue flex justify-center items-center mt-2 mb-1">
            Life Insurance Department
          </div>
          <div className="flex font-semibold text-lg justify-center items-center">
            384881, 384876, 386919
          </div>
        </div>
        <div className=" border border-blue rounded w-80 h-24 ">
          <div className="font-bold text-lg text-blue flex justify-center items-center mt-2 mb-1">
            Account Department
          </div>
          <div className="flex font-semibold text-lg justify-center items-center">
            384870, 384868
          </div>
        </div>
        <div className=" border border-blue rounded w-80 h-24 ">
          <div className="font-bold text-lg text-blue flex justify-center items-center mt-2 mb-1">
            Duty Room
          </div>
          <div className="flex font-semibold text-lg justify-center items-center">
            379188
          </div>
        </div>

        <div className=" border border-blue rounded w-80 h-24 ">
          <div className="font-bold text-lg text-blue flex justify-center items-center mt-1">
            Fire, Engineering and Miscellaneous
          </div>
          <div className="font-bold text-lg text-blue flex justify-center items-center mb-1">
            Insurance Department
          </div>
          <div className="flex font-semibold text-lg justify-center items-center">
            251764, 384874, 384867
          </div>
        </div>
        <div className=" border border-blue rounded w-80 h-24 ">
          <div className="font-bold text-lg text-blue flex justify-center items-center mt-1">
            Marine, Aviation & Travelling
          </div>
          <div className="font-bold text-lg text-blue flex justify-center items-center mb-1">
            Insurance Department
          </div>
          <div className="flex font-semibold text-lg justify-center items-center">
            251761
          </div>
        </div>
        <div className=" border border-blue rounded w-80 h-24 ">
          <div className="font-bold text-lg text-blue flex justify-center items-center mt-1">
            Third-Party Liability
          </div>
          <div className="font-bold text-lg text-blue flex justify-center items-center mb-1">
            Insurance Department
          </div>
          <div className="flex font-semibold text-lg justify-center items-center">
            384864, 384873
          </div>
        </div>
      </div>
      <div className="w-full bg-blue">
        <div className="w-[87%] flex p-5 mx-auto items-center">
          <div className="w-2/5 text-lg text-white ml-3">
            <div>&copy; 2024 Myanma Insurance</div>
            <div>All Rights Reserved By Myanma Insurance</div>
          </div>
          <div className="w-2/5">
            <img src={footerLogo} className="w-96" />
          </div>
          <div className="w-1/5 flex justify-end">
            <a href="#facebook">
              <FaFacebookF className="bg-white text-[#5890FF] p-[3px] w-[30px] h-[30px] rounded" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
