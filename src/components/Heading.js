import { FaEnvelopeOpen, FaPhone, FaSortDown } from "react-icons/fa";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

import { Dropdown } from "antd";

const Heading = () => {
  const items = [
    {
      key: "1",
      label: (
        <a href="#" className="">
          <span className="text-lg font-bold">
            Background History of Myanma Insurance
          </span>
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a href="#">
          <span className="text-lg font-bold">About Myanma Insurance</span>
        </a>
      ),
    },
  ];

  return (
    <header className="">
      <div className="w-full bg-white h-44 mb-20">
        <div className="w-[95%] mx-auto">
          <div className="flex justify-between p-5">
            <div className="w-1/3 flex justify-between items-center ">
              <a href="#">
                <img src={logo} alt="logo" className="" />
              </a>
            </div>
            <div className="w-2/3">
              <ul className="flex justify-around">
                <li className="border-blue">
                  <div className="flex items-center p-5">
                    <div className="text-blue border border-blue rounded-full p-1 m-3">
                      <FaEnvelopeOpen />
                    </div>
                    <div className="">
                      <a href="#" className="font-bold text-blue text-lg">
                        online-support@mminsurance.gov.mm
                      </a>
                      <div className="font-semibold text-lg text-bgColor">
                        Drop us a mail
                      </div>
                    </div>
                  </div>
                </li>
                <li className="border-r-2 border-bgColor"></li>
                <li className="">
                  <div className="flex items-center p-5">
                    <div className="text-blue border border-blue rounded-full p-1 m-3">
                      <FaPhone />
                    </div>
                    <div className="">
                      <p className="font-bold text-blue text-lg">
                        +959765428630,31
                      </p>
                      <div className="font-semibold text-lg text-bgColor">
                        Make a call
                      </div>
                    </div>
                  </div>
                </li>
                <li className="border-r-2 border-bgColor"></li>
                <li>
                  <div className="p-5">
                    <aside className="">
                      <ul className="flex">
                        <li class="text-lg text-white bg-blue mr-1 w-10 text-center border-t-4">
                          <a href="#">MM</a>
                        </li>
                        <li class="text-lg text-white bg-blue w-10 text-center border-t-4 border-yellow">
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
          <nav className="bg-blue text-white flex justify-between rounded-lg p-5">
            <ul className="flex w-3/5  font-bold gap-3">
              <li className="">
                <Link to="/" className="hover:text-yellow">
                  HOME
                </Link>
              </li>
              <li className="">
                <Dropdown menu={{ items }} className="">
                  <div className="flex items-center hover:text-yellow">
                    <a href="#" className="">
                      <span className="flex-nowrap">ABOUT US</span>
                    </a>
                    <FaSortDown />
                  </div>
                </Dropdown>
              </li>
              <li className="">
                <Dropdown menu={{ items }} className="">
                  <div className="flex items-center hover:text-yellow">
                    <a href="#" className=" flex-nowrap">
                      INSURED PRODUCTS
                    </a>
                    <FaSortDown />
                  </div>
                </Dropdown>
              </li>
              <li className="">
                <Dropdown menu={{ items }} className="">
                  <div className="flex items-center hover:text-yellow">
                    <a href="#" className="flex-nowrap">
                      CUSTOMER HUB
                    </a>
                    <FaSortDown />
                  </div>
                </Dropdown>
              </li>
              <li className="">
                <Dropdown menu={{ items }} className="">
                  <div className="flex items-center hover:text-yellow">
                    <a href="#" className="flex-nowrap">
                      NEWS &amp; MEDIA
                    </a>
                    <FaSortDown />
                  </div>
                </Dropdown>
              </li>
              <li className="">
                <a href="#" className="hover:text-yellow">
                  CONTACT US
                </a>
              </li>
            </ul>
            <ul className="flex w-2/5 font-bold gap-3">
              <li className="bg-white text-blue p-1 rounded">
                <a href="#">Premium Calculator</a>
              </li>
              <li className="bg-white text-blue p-1 rounded">
                <Link to="/enquiry">Print Certificates</Link>
              </li>
              <li className="bg-white text-blue p-1 rounded">
                <a href="#">Online Biller</a>
              </li>
              <li className="bg-white text-blue p-1 rounded">
                <a href="#">Buy Online</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Heading;
