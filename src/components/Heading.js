import { FaEnvelopeOpen, FaPhone } from "react-icons/fa";
import logo from "../assets/img/logo.png";

import { Dropdown } from "antd";

const Heading = () => {
  const items = [
    {
      key: "1",
      label: (
        <a href="#" className="bg-red-300">
          Background History of Myanma Insurance
        </a>
      ),
    },
    {
      key: "2",
      label: <a href="#">About Myanma Insurance</a>,
    },
  ];

  return (
    <header>
      <div className="w-full">
        <div className="flex justify-between p-5">
          <div className="w-1/3 flex justify-center items-center p-3">
            <a href="#">
              <img src={logo} alt="logo" className="" />
            </a>
          </div>
          <div className="w-2/3">
            <ul className="flex justify-around">
              <li className="border-blue-700">
                <div className="flex items-center p-5">
                  <div className="text-blue-700 border border-blue-700 rounded-full p-1 m-3">
                    <FaEnvelopeOpen />
                  </div>
                  <div className="">
                    <a href="#" className="font-bold text-blue-700 text-lg">
                      online-support@mminsurance.gov.mm
                    </a>
                    <div className="font-semibold text-lg text-gray-400">
                      Drop us a mail
                    </div>
                  </div>
                </div>
              </li>
              <li className="border-r-2"></li>
              <li className="">
                <div className="flex items-center p-5">
                  <div className="text-blue-700 border border-blue-700 rounded-full p-1 m-3">
                    <FaPhone />
                  </div>
                  <div className="">
                    <p className="font-bold text-blue-700 text-lg">
                      +959765428630,31
                    </p>
                    <div className="font-semibold text-lg text-gray-400">
                      Make a call
                    </div>
                  </div>
                </div>
              </li>
              <li className="border-r-2"></li>
              <li>
                <div className="p-5">
                  <aside className="">
                    <ul className="flex">
                      <li class="text-lg text-white bg-blue-700 m-2 w-10 text-center border-t-4">
                        <a href="#">MM</a>
                      </li>
                      <li class="text-lg text-white bg-blue-700 m-2 w-10 text-center border-t-4 border-yellow-400">
                        <a href="#">EN</a>
                      </li>
                    </ul>
                  </aside>
                </div>
              </li>
            </ul>
            {/* <ul class="clearfix calculator-btn-box d-block d-lg-none">
              <li>
                <a href="https://www.mminsurance.gov.mm/buy-online/">
                  Buy Online
                </a>
              </li>
              <li>
                <a href="https://www.mminsurance.gov.mm/premium-payment/">
                  Online Biller
                </a>
              </li>
              <li>
                <a href="https://www.mminsurance.gov.mm/print-certificates-landing-page/">
                  Print Certificates
                </a>
              </li>
              <li>
                <a
                  href=""
                  data-toggle="modal"
                  data-target="#PremiumCalculatorLink"
                >
                  Premium Calculator
                </a>
              </li>
            </ul> */}

            {/* <ul class="clearfix calculator-btn-box d-block d-lg-none">
                    <li>
          <a href="https://www.mminsurance.gov.mm/login/"><i class="fas fa-sign-in-alt"></i> Sign In</a>
        </li>
                      <li>
          <a href="https://www.mminsurance.gov.mm/buy-online/">Buy Online</a>
        </li>
        <li>
          <a href="" data-toggle="modal" data-target="#PremiumCalculatorLink">Premium Calculator</a>
        </li>
      </ul>  */}
          </div>
        </div>
        <nav className="bg-blue-700 text-white flex justify-between">
          <ul className="flex w-3/5 text-lg font-bold gap-2">
            <li className="p-3">HOME</li>
            <li className="p-3">
              <Dropdown menu={{ items }}>
                <a href="#">ABOUT US</a>
              </Dropdown>
            </li>
            <li className="p-3">INSURED PRODUCTS</li>
            <li className="p-3">CUSTOMER HUB</li>
            <li className="p-3">NEWS &amp; MEDIA</li>
            <li className="p-3">CONTACT US</li>
          </ul>
          <ul className="flex w-2/5">
            <li>Premium Calculator</li>
            <li>Print Certificates</li>
            <li>Online Biller</li>
            <li>Buy Online</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Heading;
