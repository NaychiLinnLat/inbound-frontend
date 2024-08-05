import {
  Button,
  DatePicker,
  Input,
  InputNumber,
  Radio,
  Select,
  Modal,
  Form,
} from "antd";
import { getAllCountry } from "../api/countryApi";
import { getAgentByLicense } from "../api/agentApi";
import { getPremiumRateByAgeAndCoveragePlan } from "../api/premiumRateApi";

import { useEffect, useState } from "react";
import selfImg from "../assets/img/self1.jpg";
import agentImg from "../assets/img/agent_assoc.png";
import visaImg from "../assets/img/visa_icon.png";
import masterImg from "../assets/img/master_card.png";

const InboundFormPage = () => {
  const [dob, setDob] = useState(null);

  const [age, setAge] = useState(null);
  const [coveragePlan, setCoveragePlan] = useState(null);

  // const [countryList, setCountryList] = useState([]);
  const [countryNameList, setCountryNameList] = useState([]);
  const [countryCodeList, setCountryCodeList] = useState([]);
  const [passportIssuedCountry, setPassportIssuedCountry] = useState("");

  const [isForChild, setIsForChild] = useState(false);
  const [isAgent, setIsAgent] = useState(false);
  const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(false);

  const [agentLicenseNo, setAgentLicenseNo] = useState(null);
  const [agentPassword, setAgentPassword] = useState(null);
  const [agentLoading, setAgentLoading] = useState(false);

  const [licenseNo, setLicenseNo] = useState(null);
  const [agentName, setAgentName] = useState(null);

  const genderOptions = [
    {
      value: 1,
      label: "MALE",
    },
    {
      value: 2,
      label: "FEMALE",
    },
  ];

  const coveragePlanOptions = [
    {
      value: 15,
      label: "15 DAYS",
    },
    {
      value: 30,
      label: "30 DAYS",
    },
    {
      value: 60,
      label: "60 DAYS",
    },
    {
      value: 90,
      label: "90 DAYS",
    },
    {
      value: 120,
      label: "120 DAYS",
    },
    {
      value: 150,
      label: "150 DAYS",
    },
    {
      value: 180,
      label: "180 DAYS",
    },
    {
      value: 210,
      label: "210 DAYS",
    },
    {
      value: 240,
      label: "240 DAYS",
    },
    {
      value: 270,
      label: "270 DAYS",
    },
    {
      value: 300,
      label: "300 DAYS",
    },
    {
      value: 330,
      label: "330 DAYS",
    },
    {
      value: 360,
      label: "360 DAYS",
    },
  ];

  const getAllCountryList = async () => {
    const response = await getAllCountry();
    // setCountryList(response.data);

    const sortedData = response?.data?.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    const modifiedCountryNameData = sortedData?.map((d) => {
      return {
        value: d.id,
        label: d.name.toUpperCase(),
      };
    });

    setCountryNameList(modifiedCountryNameData);

    const modifiedCountryCodeData = sortedData?.map((d) => {
      return {
        value: d.id,
        label: `${d.countryCode} ${d.name.toUpperCase()}`,
      };
    });

    setCountryCodeList(modifiedCountryCodeData);
  };

  const getPremiumRate = async () => {
    const formData = new FormData();
    formData.append("age", age);
    formData.append("days", coveragePlan);

    const response = await getPremiumRateByAgeAndCoveragePlan(formData);

    if (response?.data) {
      console.log(response.data);
    }
  };

  const calculateAge = (dob) => {
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    setAge(age);
  };

  const dateformat = (d) => {
    const date = new Date(d);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const showAgentModal = () => {
    setIsAgentModalOpen(true);
  };

  const handleAgentOk = async () => {
    setAgentLoading(true);
    const formData = new FormData();
    formData.append("licenceNo", agentLicenseNo);
    formData.append("password", agentPassword);

    const response = await getAgentByLicense(formData);
    console.log(response?.data);
    if (response?.data) {
      setLicenseNo(response.data.licenceNo);
      setAgentName(response.data.name);
    }

    setIsAgentModalOpen(false);
    setAgentLoading(false);
  };

  const handleAgentCancel = () => {
    setIsAgentModalOpen(false);
  };

  const showPaymentModal = () => {
    setIsPaymentModalOpen(true);
  };

  const handlePaymentOk = () => {
    setIsPaymentModalOpen(false);
  };

  const handlePaymentCancel = () => {
    setIsPaymentModalOpen(false);
  };

  const sumbitForm = (e) => {
    e.preventDefault();
    setIsPaymentModalOpen(true);
    console.log("submitForm called");
  };

  useEffect(() => {
    getAllCountryList();
  }, []);

  useEffect(() => {
    if (dob !== null) {
      calculateAge(dob);
    }
  }, [dob]);

  useEffect(() => {
    if (age !== null && coveragePlan !== null) {
      getPremiumRate();
    }
  }, [age, coveragePlan]);

  return (
    <div className="w-[95%] mx-auto">
      <div className="flex justify-center text-2xl font-bold text-blue my-4">
        INBOUND TRAVEL ACCIDENT INSURANCE
      </div>
      <form className="bg-white rounded p-10">
        <div className="w-full">
          <div className="text-xl text-blue font-bold underline mb-3">
            PASSPORT INFORMATION &#40;In English&#41;
          </div>
          <div className="flex justify-between gap-8">
            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Passport Number <span className="text-red">*</span>
              </div>
              <Input
                className="w-[100%] h-12"
                placeholder="ENTER YOUR PASSPORT NO."
              />
            </div>

            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Passport Issued Date <span className="text-red">*</span>
              </div>
              <DatePicker className="w-[100%] h-12" />
            </div>

            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Passport Issued Country <span className="text-red">*</span>
              </div>

              <Select
                className="w-[100%] h-12"
                placeholder="SELECT ONE"
                options={countryNameList}
                onChange={(value) =>
                  setPassportIssuedCountry(countryNameList[value - 1].label)
                }
                required
              />
            </div>
          </div>
          <hr className="my-8 text-bgColor" />
        </div>
        <div className="w-full">
          <div className="text-xl text-blue font-bold underline mb-3">
            INSURED INFORMATION &#40;In English&#41;
          </div>
          <div>
            <Radio.Group
              onChange={(e) => setIsForChild(e.target.value)}
              value={isForChild}
              className=" flex gap-2 mb-3"
            >
              <Radio
                value={false}
                className="w-1/3 text-xl text-blue font-bold "
              >
                BUY FOR YOURSELF &#40;THIS PASSPORT HOLDER&#41;
              </Radio>
              <Radio
                value={true}
                className="w-2/3 text-xl text-blue font-bold "
              >
                <div>
                  BUY FOR THE CHILD TRAVEL TOGETHER WITH THIS PASSPORT HOLDER
                </div>
                <div>&#40;CHILD IS NOT HOLDING A VALID PASSPORT&#41;</div>
              </Radio>
            </Radio.Group>
          </div>
          <div className="flex justify-between gap-8 mb-2">
            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Name &#40;as per passport&#41;
                <span className="text-red">*</span>
              </div>
              <Input
                className="w-[100%] h-12"
                placeholder="ENTER YOUR PASSPORT NO."
              />
            </div>

            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Date of Birth &#40;as per passport&#41;{" "}
                <span className="text-red">*</span>
              </div>
              <DatePicker
                className="w-[100%] h-12"
                onChange={(value) => {
                  const date = new Date(value);
                  setDob(date);
                }}
              />
            </div>

            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Gender &#40;as per passport&#41;{" "}
                <span className="text-red">*</span>
              </div>
              <Select
                className="w-[100%] h-12"
                placeholder="SELECT ONE"
                options={genderOptions}
              />
            </div>
          </div>
          <div className="flex justify-between gap-8 mb-2">
            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Estimated Arrival Date <span className="text-red">*</span>
              </div>
              <DatePicker className="w-[100%] h-12" />
            </div>
            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Journey From <span className="text-red">*</span>
              </div>
              <Select
                className="w-[100%] h-12"
                placeholder="SELECT ONE"
                options={countryNameList}
              />
            </div>
            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Journey To <span className="text-red">*</span>
              </div>
              <Select className="w-[100%] h-12" value="MYANMAR" disabled />
            </div>
          </div>
          <div className="flex justify-between gap-8 mb-2">
            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Coverage Plan <span className="text-red">*</span>
              </div>
              <Select
                className="w-[100%] h-12"
                placeholder="SELECT ONE"
                options={coveragePlanOptions}
                onChange={(value) => setCoveragePlan(value)}
              />
            </div>
            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Insured's Contact Phone Number{" "}
                <span className="text-red">*</span>
              </div>
              <div className="flex ">
                <Select
                  className="w-[25%] h-12"
                  placeholder="SELECT ONE"
                  options={countryCodeList}
                />
                <InputNumber className="w-[75%] h-12" />
              </div>
            </div>
            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Insured Email
              </div>
              <Input
                className="w-[100%] h-12"
                placeholder="Insured's Email Address"
              />
            </div>
          </div>
          <div className="flex justify-between gap-8 mb-2">
            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Address in Myanmar &#40;Max: 250 Char&#41;{" "}
                <span className="text-red">*</span>
              </div>
              <Input.TextArea className="w-[100%]" rows={8} />
            </div>

            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Resident Address &#40;Max: 250 Char&#41;{" "}
                <span className="text-red">*</span>
              </div>
              <Input.TextArea className="w-[100%]" rows={8} />
            </div>

            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Resident Country <span className="text-red">*</span>
              </div>
              <Select
                className="w-[100%] h-12"
                placeholder="SELECT ONE"
                options={countryNameList}
              />
            </div>
          </div>
          {isForChild && (
            <div className="bg-childBackground p-5 rounded mt-5">
              <div className="text-xl text-blue font-bold underline mb-3">
                CHILD INFORMATION &#40;CHILD IS NOT HOLDING A VALID
                PASSPORT&#41;
              </div>
              <div className="flex justify-between gap-8 mb-2">
                <div className="w-1/3">
                  <div className="text-xl text-blue font-semibold mb-2">
                    Child Name <span className="text-red">*</span>
                  </div>
                  <Input
                    className="w-[100%] h-12"
                    placeholder="ENTER CHILD NAME"
                  />
                </div>

                <div className="w-1/3">
                  <div className="text-xl text-blue font-semibold mb-2">
                    Date of Birth <span className="text-red">*</span>
                  </div>
                  <DatePicker className="w-[100%] h-12" />
                </div>

                <div className="w-1/3">
                  <div className="text-xl text-blue font-semibold mb-2">
                    Gender <span className="text-red">*</span>
                  </div>
                  <Select
                    className="w-[100%] h-12"
                    placeholder="SELECT ONE"
                    options={genderOptions}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-8 mb-2">
                <div className="w-1/3">
                  <div className="text-xl text-blue font-semibold mb-2">
                    Guardiance Name <span className="text-red">*</span>
                  </div>
                  <Input
                    className="w-[100%] h-12"
                    placeholder="ENTER GUARDIANCE NAME"
                  />
                </div>
                <div className="w-1/3">
                  <div className="text-xl text-blue font-semibold mb-2">
                    Relationship <span className="text-red">*</span>
                  </div>
                  <Input
                    className="w-[100%] h-12"
                    placeholder="ENTER RELATIONSHIP"
                  />
                </div>

                <div className="w-1/3">
                  <div className="w-[100%] h-12"></div>
                </div>
              </div>
            </div>
          )}

          <hr className="my-8 text-bgColor" />
        </div>
        <div className="w-full">
          <div className="text-xl text-blue font-bold underline mb-3">
            BENEFICIARY INFORMATION &#40;In English &#41;
          </div>
          <div className="flex justify-between gap-8 mb-2">
            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Name <span className="text-red">*</span>
              </div>
              <Input
                className="w-[100%] h-12"
                placeholder="ENTER YOUR PASSPORT NO."
              />
            </div>

            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Date of Birth <span className="text-red">*</span>
              </div>
              <DatePicker className="w-[100%] h-12" />
            </div>

            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                National Identificaiton Number
              </div>
              <Input
                className="w-[100%] h-12"
                placeholder="ENTER NATIONAL IDENTIFICATION NUMBER"
              />
            </div>
          </div>
          <div className="flex justify-between gap-8 mb-2">
            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Relationship <span className="text-red">*</span>
              </div>
              <Input
                className="w-[100%] h-12"
                placeholder="ENTER RELATIONSHIP"
              />
            </div>

            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Insured's Contact Phone Number{" "}
                <span className="text-red">*</span>
              </div>
              <div className="flex ">
                <Select
                  className="w-[25%] h-12"
                  placeholder="SELECT ONE"
                  options={countryCodeList}
                />
                <InputNumber
                  className="w-[75%] h-12"
                  placeholder="ENTER INSURED'S CONTACT PHONE NUMBER"
                />
              </div>
            </div>

            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">Email</div>
              <Input className="w-[100%] h-12" placeholder="ENTER EMAIL" />
            </div>
          </div>
          <div className="flex justify-between gap-8 mb-2">
            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Resident Address &#40;Max: 250 Char&#41;{" "}
                <span className="text-red">*</span>
              </div>
              <Input.TextArea className="w-[100%]" rows={8} />
            </div>
            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Resident Country <span className="text-red">*</span>
              </div>
              <Select
                className="w-[100%] h-12"
                placeholder="SELECT ONE"
                options={countryNameList}
              />
            </div>
            <div className="w-1/3">
              <div className="w-[100%] mb-2"></div>
            </div>
          </div>
        </div>

        <section name="agent" className="bg-childBackground p-5  mt-5">
          <div className="text-xl text-blue font-bold underline mb-5">
            This section is only used for servicing agent of Myanma Insurance
          </div>
          <div>
            <Radio.Group
              onChange={(e) => setIsAgent(e.target.value)}
              value={isAgent}
              className=" flex gap-2 mb-3"
            >
              <Radio
                value={false}
                className="w-1/3 text-xl text-blue font-bold"
              >
                <div className="flex items-center bg-white w-60 h-16 p-3 gap-2">
                  <div className="w-12 h-12">
                    <img src={selfImg} />
                  </div>
                  <div>SELF-SERVICE</div>
                </div>
              </Radio>
              <Radio
                value={true}
                onClick={showAgentModal}
                className="w-2/3 text-xl text-blue font-bold "
              >
                <div className="flex items-center bg-white w-80 h-16 p-3 gap-2">
                  <div>
                    <img src={agentImg} width="100px" height="100px" />
                  </div>
                  <div>YANGON AERODROME COMPANY LIMITED</div>
                </div>
              </Radio>
            </Radio.Group>
          </div>
          {isAgent && (
            <div className="flex gap-8">
              <div className="w-1/3">
                <div className="mb-3 text-lg text-blue font-bold">
                  Agent License Number <span className="text-red">*</span>
                </div>
                <Input
                  placeholder="AGENT LICENSE NUMBER"
                  disabled
                  value={licenseNo}
                  className="w-[100%] h-12"
                />
              </div>
              <div className="w-1/3">
                <div className="mb-3 text-lg text-blue font-bold">
                  Name <span className="text-red">*</span>
                </div>
                <Input disabled value={agentName} className="w-[100%] h-12" />
              </div>
              <div className="w-1/3">
                <div className="h-12"></div>
                <div
                  className="mb-3 text-lg text-blue font-bold underline hover:cursor-pointer"
                  onClick={showAgentModal}
                >
                  EDIT
                </div>
              </div>
            </div>
          )}
        </section>

        <div className="my-5">
          <button
            className="bg-blue text-white text-lg font-semibold rounded px-8 py-3"
            onClick={sumbitForm}
          >
            SUBMIT AND CONTINUE{" "}
          </button>
        </div>
      </form>

      <Modal
        title={
          <div className="text-2xl text-blue font-bold">
            Check Agent Information
          </div>
        }
        open={isAgentModalOpen}
        loading={agentLoading}
        onOk={handleAgentOk}
        onCancel={handleAgentCancel}
        okText="Check Agent"
        centered
      >
        <div className="text-xl mt-5 mb-3">
          <div className="text-blue font-bold mb-2">
            Agent License Number <span className="text-red">*</span>
          </div>
          <Input
            size="large"
            onChange={(e) => setAgentLicenseNo(e.target.value.toUpperCase())}
          />
        </div>
        <div className="text-xl mb-3">
          <div className="text-blue font-bold mb-2">
            Password <span className="text-red">*</span>
          </div>
          <Input.Password
            size="large"
            onChange={(e) => setAgentPassword(e.target.value)}
          />
        </div>
      </Modal>

      <Modal
        title={
          <div className="text-2xl text-blue font-bold underline">
            PREMIUM INFORMATION AND CHOOSE PAYMENT METHOD
          </div>
        }
        open={isPaymentModalOpen}
        onOk={handlePaymentOk}
        onCancel={handlePaymentCancel}
        okText="NEXT"
        width="900px"
        centered
      >
        <div className="mt-5">
          <div className="flex bg-childBackground text-xl p-3 mb-1">
            <div className="w-1/2 font-semibold">Insured For</div>
            <div className="w-1/2 font-bold">
              {isForChild
                ? `BUY FOR THE CHILD`
                : `BUY FOR THIS PASSPORT HOLDER`}
            </div>
          </div>
          <div className="flex bg-childBackground text-xl p-3 mb-1">
            <div className="w-1/2 font-semibold">Premium Amount</div>
            <div className="w-1/2 font-bold">50 USD</div>
          </div>
          <div className="flex bg-childBackground text-xl p-3 mb-1">
            <div className="w-1/2 font-semibold">Net Premium</div>
            <div className="w-1/2 font-bold">50 USD</div>
          </div>
          <div className="flex bg-childBackground text-xl p-3 mb-1">
            <div className="w-1/2 font-semibold">Age &#40;Year&#41;</div>
            <div className="w-1/2 font-bold">24</div>
          </div>
          <div className="flex bg-childBackground text-xl p-3 mb-1">
            <div className="w-1/2 font-semibold">Coverage Plan</div>
            <div className="w-1/2 font-bold">15 Days</div>
          </div>
          <div className="flex bg-childBackground text-xl p-3 mb-1">
            <div className="w-1/2 font-semibold">Passport Number</div>
            <div className="w-1/2 font-bold">ASF213</div>
          </div>
          <div className="flex bg-childBackground text-xl p-3 mb-1">
            <div className="w-1/2 font-semibold">Name (as per passport)</div>
            <div className="w-1/2 font-bold">STEVE</div>
          </div>
          <div className="flex bg-childBackground text-xl p-3 mb-1">
            <div className="w-1/2 font-semibold">Estimated Arrival Date</div>
            <div className="w-1/2 font-bold">05-08-2024</div>
          </div>
        </div>
        <div className="mt-5">
          <div className="text-xl text-blue font-bold">Choose Payment</div>
          <div className="mt-3">
            <Radio.Group
              onChange={(e) => setPaymentMethod(e.target.value)}
              value={paymentMethod}
              className=" flex gap-5 mb-3"
            >
              <Radio value="VISA" className="w-1/3 text-xl text-blue font-bold">
                <div className="flex items-center border bg-white p-3">
                  <img src={visaImg} width="300px" height="200px" />
                </div>
              </Radio>
              <Radio
                value="MASTER"
                className="w-1/3 text-xl text-blue font-bold "
              >
                <div className="flex items-center border bg-white  p-3">
                  <img src={masterImg} width="300px" height="200px" />
                </div>
              </Radio>
            </Radio.Group>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default InboundFormPage;
