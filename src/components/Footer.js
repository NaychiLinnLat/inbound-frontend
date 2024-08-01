import footerLogo from "../assets/img/footerLogo.png";

const Footer = () => {
  return (
    <div className="bg-white">
      <hr />
      <div className="flex">
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
      <div className="w-full bg-blue flex p-5 items-center">
        <div className="w-2/5 text-lg text-white ml-3">
          <div>&copy; 2024 Myanma Insurance</div>
          <div>All Rights Reserved By Myanma Insurance</div>
        </div>
        <div className="3/5">
          <img src={footerLogo} className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
