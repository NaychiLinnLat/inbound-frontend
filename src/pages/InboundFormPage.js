import {
  DatePicker,
  Input,
  InputNumber,
  Button,
  Radio,
  Select,
  Modal,
  Form,
  Result,
  ConfigProvider,
} from "antd";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { getAllCountry } from "../api/countryApi";
import { getAgentByLicense } from "../api/agentApi";
import { getPremiumRateByAgeAndCoveragePlan } from "../api/premiumRateApi";

import { useEffect, useState } from "react";
import { dateformat } from "../utils/dateformat";
import selfImg from "../assets/img/self1.jpg";
import agentImg from "../assets/img/agent_assoc.png";
import visaImg from "../assets/img/visa_icon.png";
import masterImg from "../assets/img/master_card.png";
import { FaCheckCircle } from "react-icons/fa";

const InboundFormPage = ({
  form,
  isFromCreate,
  setIsFromCreate,
  isCreatedModalOpen,
  setIsCreatedModalOpen,

  countryNameList,
  setCountryNameList,
  countryCodeList,
  setCountryCodeList,

  // Insured Person
  passportNumber,
  setPassportNumber,
  passportIssuedDate,
  setPassportIssuedDate,
  passportIssuedCountry,
  setPassportIssuedCountry,

  isForChild,
  setIsForChild,

  name,
  setName,
  dob,
  setDob,
  gender,
  setGender,

  estimatedArrivalDate,
  setEstimatedArrivalDate,
  journeyFrom,
  setJourneyFrom,

  coveragePlan,
  setCoveragePlan,
  age,
  setAge,
  premiumRate,
  setPremiumRate,

  countryCode,
  setCountryCode,
  phoneNo,
  setPhoneNo,
  contactNumber,
  setContactNumber,
  email,
  setEmail,

  addressInMyanmar,
  setAddressInMyanmar,
  residentAddress,
  setResidentAddress,
  residentCountry,
  setResidentCountry,

  //Beneficiary
  beneficiaryName,
  setBeneficiaryName,
  beneficiaryDob,
  setBeneficiaryDob,
  beneficiaryNin,
  setBeneficiaryNin,

  beneficiaryRelationship,
  setBeneficiaryRelationship,
  beneficiaryCountryCode,
  setBeneficiaryCountryCode,
  beneficiaryPhoneNo,
  setBeneficiaryPhoneNo,
  beneficiaryContactNumber,
  setBeneficiaryContactNumber,
  beneficiaryEmail,
  setBeneficiaryEmail,

  beneficiaryResidentAddress,
  setBeneficiaryResidentAddress,
  beneficiaryResidentCountry,
  setBeneficiaryResidentCountry,

  // Child
  childName,
  setChildName,
  childDob,
  setChildDob,
  childGender,
  setChildGender,

  childGuardianceName,
  setChildGuardianceName,
  childRelationship,
  setChildRelationship,

  // Agent
  isAgent,
  setIsAgent,

  isAgentModalOpen,
  setIsAgentModalOpen,
  agentLoading,
  setAgentLoading,
  noAgent,
  setNoAgent,

  agentLicenseNo,
  setAgentLicenseNo,
  agentPassword,
  setAgentPassword,

  licenseNo,
  setLicenseNo,
  agentName,
  setAgentName,

  // Payment
  isPaymentModalOpen,
  setIsPaymentModalOpen,
  paymentMethod,
  setPaymentMethod,
}) => {
  const navigate = useNavigate();

  const genderOptions = [
    {
      value: "MALE",
      label: "MALE",
    },
    {
      value: "FEMALE",
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
        value: d.name.toUpperCase(),
        label: d.name.toUpperCase(),
      };
    });

    setCountryNameList(modifiedCountryNameData);

    const modifiedCountryCodeData = sortedData?.map((d) => {
      return {
        value: d.countryCode,
        label: `${d.countryCode} ${d.name.toUpperCase()}`,
      };
    });

    setCountryCodeList(modifiedCountryCodeData);
    console.log(modifiedCountryCodeData);
  };

  const getPremiumRate = async () => {
    const formData = new FormData();
    formData.append("age", age);
    formData.append("days", coveragePlan);

    const response = await getPremiumRateByAgeAndCoveragePlan(formData);
    console.log(response);
    if (response?.data) {
      setPremiumRate(response.data.rate);
      console.log(response.data);
    }
  };

  const calculateAge = (dateOfBirth) => {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var ageValue = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      ageValue--;
    }
    if (ageValue == 0) {
      ageValue++;
    }
    setAge(ageValue);
  };

  const getOldData = () => {
    form.setFieldValue("passportNumber", passportNumber);
    form.setFieldValue("passportIssuedDate", passportIssuedDate);
    form.setFieldValue("passportIssuedCountry", passportIssuedCountry);

    form.setFieldValue("isForChild", isForChild);

    form.setFieldValue("name", name);
    form.setFieldValue("dob", dob);
    form.setFieldValue("gender", gender);

    form.setFieldValue("countryCode", countryCode);
    form.setFieldValue("phoneNo", phoneNo);
    form.setFieldValue("email", email);
    form.setFieldValue("addressInMyanmar", addressInMyanmar);
    form.setFieldValue("residentAddress", residentAddress);
    form.setFieldValue("residentCountry", residentCountry);

    // Beneficiary
    form.setFieldValue("beneficiaryName", beneficiaryName);
    form.setFieldValue("beneficiaryDob", beneficiaryDob);
    form.setFieldValue("beneficiaryNin", beneficiaryNin);
    form.setFieldValue("beneficiaryRelationship", beneficiaryRelationship);
    form.setFieldValue("beneficiaryCountryCode", beneficiaryCountryCode);
    form.setFieldValue("beneficiaryPhoneNo", beneficiaryPhoneNo);
    form.setFieldValue("beneficiaryEmail", beneficiaryEmail);
    form.setFieldValue(
      "beneficiaryResidentAddress",
      beneficiaryResidentAddress
    );
    form.setFieldValue(
      "beneficiaryResidentCountry",
      beneficiaryResidentCountry
    );

    // Child
    form.setFieldValue("childName", childName);
    form.setFieldValue("childDob", childDob);
    form.setFieldValue("childGender", childGender);
    form.setFieldValue("childGuardianceName", childGuardianceName);
    form.setFieldValue("childRelationship", childRelationship);

    // Agent
    form.setFieldValue("agentLicenseNo", agentLicenseNo);
    form.setFieldValue("agentName", agentName);

    // Inbound Proposal
    form.setFieldValue("estimatedArrivalDate", estimatedArrivalDate);
    form.setFieldValue("journeyFrom", journeyFrom);
    form.setFieldValue("coveragePlan", coveragePlan);
  };

  const resetOldData = () => {
    form.resetFields();

    //Insured Person
    setPassportNumber(null);
    setPassportIssuedDate(null);
    setPassportIssuedCountry(null);

    setIsForChild(false);

    setName(null);
    setDob(null);
    setGender(null);

    setEstimatedArrivalDate(null);
    setJourneyFrom(null);

    setCoveragePlan(null);
    setAge(null);
    setPremiumRate(null);

    setCountryCode(null);
    setPhoneNo(null);
    setContactNumber(null);
    setEmail(null);

    setAddressInMyanmar(null);
    setResidentAddress(null);
    setResidentCountry(null);

    //Beneficiary
    setBeneficiaryName(null);
    setBeneficiaryDob(null);
    setBeneficiaryNin(null);

    setBeneficiaryRelationship(null);
    setBeneficiaryCountryCode(null);
    setBeneficiaryPhoneNo(null);
    setBeneficiaryContactNumber(null);
    setBeneficiaryEmail(null);

    setBeneficiaryResidentAddress(null);
    setBeneficiaryResidentCountry(null);

    // Child
    setChildName(null);
    setChildDob(null);
    setChildGender(null);

    setChildGuardianceName(null);
    setChildRelationship(null);

    // Agent
    setIsAgent(false);

    setAgentLicenseNo(null);
    setAgentPassword(null);

    setLicenseNo(null);
    setAgentName(null);

    // Payment
    setPaymentMethod(null);
  };

  const showAgentModal = () => {
    setNoAgent(false);
    setIsAgentModalOpen(true);
  };

  const handleAgentOk = async () => {
    setAgentLoading(true);
    const formData = new FormData();
    formData.append("licenceNo", agentLicenseNo);
    formData.append("password", agentPassword);

    const response = await getAgentByLicense(formData);
    console.log(response?.data);
    if (response?.data?.name) {
      setLicenseNo(response.data.licenceNo);
      setAgentName(response.data.name);
      setIsAgentModalOpen(false);
      setNoAgent(false);
      setAgentLoading(false);
    } else {
      setAgentLoading(false);
      setNoAgent(true);
    }
  };

  const handleAgentCancel = () => {
    setIsAgentModalOpen(false);
  };

  const showPaymentModal = () => {
    setIsPaymentModalOpen(true);
  };

  const handlePaymentOk = () => {
    navigate("/checkinfo");
    setIsPaymentModalOpen(false);
  };

  const handlePaymentCancel = () => {
    setIsPaymentModalOpen(false);
  };

  const handleCreatedCancel = () => {
    setIsCreatedModalOpen(false);
  };

  const disablePastDates = (current) => {
    // Can not select dates before today
    return current && current < moment().startOf("day");
  };

  const disableFutureDates = (current) => {
    // Can not select dates after today
    return current && current > moment().startOf("day") - 1;
  };

  const sumbitForm = (values) => {
    setIsPaymentModalOpen(true);
    console.log("submitForm called");
  };

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 0);
    getAllCountryList();
    getOldData();
    if (isFromCreate) {
      resetOldData();
      setIsFromCreate(false);
    }
  }, []);

  useEffect(() => {
    if (isForChild) {
      if (childDob !== null) {
        calculateAge(childDob);
      }
    } else if (dob !== null) {
      calculateAge(dob);
    }
  }, [dob, childDob, isForChild]);

  useEffect(() => {
    setContactNumber(`${countryCode} ${phoneNo}`);
  }, [countryCode, phoneNo]);

  useEffect(() => {
    setBeneficiaryContactNumber(
      `${beneficiaryCountryCode} ${beneficiaryPhoneNo}`
    );
  }, [beneficiaryCountryCode, beneficiaryPhoneNo]);

  useEffect(() => {
    if (age !== null && coveragePlan !== null) {
      getPremiumRate();
    }
  }, [age, coveragePlan]);

  return (
    <div className="w-full">
      <div className="w-[87%] bg-[#f0f4f9] mx-auto">
        <div className="flex justify-center font-sans text-[22px] tracking-[-0.035em] font-semibold text-blue my-4">
          INBOUND TRAVEL ACCIDENT INSURANCE
        </div>
        <ConfigProvider
          theme={{
            token: {
              fontSize: 17,
            },
            components: {
              Select: {
                optionFontSize: 17,
              },
            },
          }}
        >
          <Form
            // layout="vertical"
            name="form_in_modal"
            scrollToFirstError={true}
            form={form}
            clearOnDestroy
            onFinish={(values) => sumbitForm(values)}
            className="bg-white rounded p-10 shadow-2xl"
          >
            <div className="w-full">
              <div className="text-lg text-blue font-bold underline mb-3">
                PASSPORT INFORMATION &#40;In English&#41;
              </div>
              <div className="flex justify-between gap-8">
                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Passport Number <span className="text-red">*</span>
                  </div>
                  <Form.Item
                    name="passportNumber"
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="text-lg text-red">
                            This field is required
                          </span>
                        ),
                      },
                    ]}
                  >
                    <Input
                      className="w-[100%] text-[17px] h-[42px]"
                      placeholder="ENTER YOUR PASSPORT NO."
                      onInput={(e) =>
                        (e.target.value = e.target.value.toUpperCase())
                      }
                      onChange={(e) => setPassportNumber(e.target.value)}
                    />
                  </Form.Item>
                </div>

                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Passport Issued Date <span className="text-red">*</span>
                  </div>
                  <Form.Item
                    name="passportIssuedDate"
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="text-lg">
                            This field is required
                          </span>
                        ),
                      },
                    ]}
                  >
                    <DatePicker
                      className="w-[100%] h-[42px]"
                      disabledDate={disableFutureDates}
                      onChange={(value) => setPassportIssuedDate(value)}
                    />
                  </Form.Item>
                </div>

                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Passport Issued Country <span className="text-red">*</span>
                  </div>
                  <Form.Item
                    name="passportIssuedCountry"
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="text-lg">
                            This field is required
                          </span>
                        ),
                      },
                    ]}
                  >
                    <Select
                      className="w-[100%] h-[42px] "
                      placeholder="SELECT ONE"
                      options={countryNameList}
                      onChange={(value) => setPassportIssuedCountry(value)}
                      showSearch={true}
                    />
                  </Form.Item>
                </div>
              </div>
              <hr className="my-8 text-bgColor" />
            </div>
            <div className="w-full">
              <div className="text-lg text-blue font-bold underline mb-3">
                INSURED INFORMATION &#40;In English&#41;
              </div>
              <div>
                <Radio.Group
                  onChange={(e) => {
                    setIsForChild(e.target.value);
                  }}
                  value={isForChild}
                  className=" flex items-center gap-2 mb-3"
                >
                  <Radio
                    value={false}
                    className="w-1/3 text-[16px] text-blue font-bold "
                  >
                    BUY FOR YOURSELF &#40;THIS PASSPORT HOLDER&#41;
                  </Radio>
                  <Radio
                    value={true}
                    className="w-2/3  text-[16px] text-blue font-bold "
                  >
                    <div>
                      BUY FOR THE CHILD TRAVEL TOGETHER WITH THIS PASSPORT
                      HOLDER{" "}
                      <span className="flex flex-nowrap">
                        &#40;CHILD IS NOT HOLDING A VALID PASSPORT&#41;
                      </span>
                    </div>
                  </Radio>
                </Radio.Group>
              </div>
              <div className="flex justify-between gap-8 mb-2">
                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Name &#40;as per passport&#41;
                    <span className="text-red">*</span>
                  </div>
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="text-lg">
                            This field is required
                          </span>
                        ),
                      },
                    ]}
                  >
                    <Input
                      className="w-[100%] text-[17px] h-[42px]"
                      placeholder="ENTER INSURED NAME"
                      onInput={(e) =>
                        (e.target.value = e.target.value.toUpperCase())
                      }
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Item>
                </div>

                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Date of Birth &#40;as per passport&#41;{" "}
                    <span className="text-red">*</span>
                  </div>
                  <Form.Item
                    name="dob"
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="text-lg">
                            This field is required
                          </span>
                        ),
                      },
                    ]}
                  >
                    <DatePicker
                      className="w-[100%] h-[42px]"
                      disabledDate={disableFutureDates}
                      onChange={(value) => {
                        setDob(value);
                      }}
                    />
                  </Form.Item>
                </div>

                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Gender &#40;as per passport&#41;{" "}
                    <span className="text-red">*</span>
                  </div>
                  <Form.Item
                    name="gender"
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="text-lg">
                            This field is required
                          </span>
                        ),
                      },
                    ]}
                  >
                    <Select
                      className="w-[100%] h-[42px]"
                      placeholder="SELECT ONE"
                      options={genderOptions}
                      onChange={(value) => setGender(value)}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="flex justify-between gap-8 mb-2">
                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Estimated Arrival Date <span className="text-red">*</span>
                  </div>
                  <Form.Item
                    name="estimatedArrivalDate"
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="text-lg">
                            This field is required
                          </span>
                        ),
                      },
                    ]}
                  >
                    <DatePicker
                      className="w-[100%] h-[42px]"
                      disabledDate={disablePastDates}
                      onChange={(value) => {
                        setEstimatedArrivalDate(value);
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Journey From <span className="text-red">*</span>
                  </div>
                  <Form.Item
                    name="journeyFrom"
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="text-lg">
                            This field is required
                          </span>
                        ),
                      },
                    ]}
                  >
                    <Select
                      className="w-[100%] h-[42px]"
                      placeholder="SELECT ONE"
                      options={countryNameList}
                      onChange={(value) => setJourneyFrom(value)}
                    />
                  </Form.Item>
                </div>
                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Journey To <span className="text-red">*</span>
                  </div>
                  <Input
                    className="w-[100%] h-[42px]"
                    value="MYANMAR"
                    readOnly={true}
                  />
                </div>
              </div>
              <div className="flex justify-between gap-8 mb-2">
                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Coverage Plan <span className="text-red">*</span>
                  </div>
                  <Form.Item
                    name="coveragePlan"
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="text-lg">
                            This field is required
                          </span>
                        ),
                      },
                    ]}
                  >
                    <Select
                      className="w-[100%] h-[42px]"
                      placeholder="SELECT ONE"
                      options={coveragePlanOptions}
                      onChange={(value) => setCoveragePlan(value)}
                    />
                  </Form.Item>
                </div>
                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Insured's Contact Phone Number{" "}
                    <span className="text-red">*</span>
                  </div>

                  <div className="flex ">
                    <Form.Item
                      name="countryCode"
                      className="w-[30%]"
                      rules={[
                        {
                          required: true,
                          message: <span className="text-lg"></span>,
                        },
                      ]}
                    >
                      <Select
                        className=" h-[42px] w-full"
                        placeholder="SELECT ONE"
                        dropdownStyle={{ width: "300px" }}
                        options={countryCodeList}
                        onChange={(value) => setCountryCode(value)}
                      />
                    </Form.Item>
                    <Form.Item
                      name="phoneNo"
                      className="w-[70%]"
                      rules={[
                        {
                          required: true,
                          message: (
                            <span className="text-lg">
                              This field is required
                            </span>
                          ),
                        },
                        {
                          message: "Enter a valid phone number",
                          validator: (_, value) => {
                            if (/^[0-9]+$/.test(value)) {
                              return Promise.resolve();
                            } else {
                              return Promise.reject("Some message here");
                            }
                          },
                        },
                      ]}
                    >
                      <Input
                        className=" text-[17px] w-full h-[42px]"
                        controls={false}
                        placeholder="ENTER INSURED'S PHONE"
                        onChange={(e) => setPhoneNo(e.target.value)}
                      />
                    </Form.Item>
                  </div>
                </div>
                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Insured Email
                  </div>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                    ]}
                  >
                    <Input
                      className="w-[100%]  text-[17px] h-[42px]"
                      placeholder="Insured's Email Address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="flex justify-between gap-8 mb-2">
                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Address in Myanmar &#40;Max: 250 Char&#41;
                  </div>
                  <Form.Item name="addressInMyanmar">
                    <Input.TextArea
                      className="w-[100%] text-[17px]"
                      rows={7}
                      onInput={(e) =>
                        (e.target.value = e.target.value.toUpperCase())
                      }
                      onChange={(e) => setAddressInMyanmar(e.target.value)}
                    />
                  </Form.Item>
                </div>

                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Resident Address &#40;Max: 250 Char&#41;{" "}
                    <span className="text-red">*</span>
                  </div>
                  <Form.Item
                    name="residentAddress"
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="text-lg">
                            This field is required
                          </span>
                        ),
                      },
                    ]}
                  >
                    <Input.TextArea
                      className="w-[100%] text-[17px]"
                      rows={7}
                      onInput={(e) =>
                        (e.target.value = e.target.value.toUpperCase())
                      }
                      onChange={(e) => setResidentAddress(e.target.value)}
                    />
                  </Form.Item>
                </div>

                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Resident Country <span className="text-red">*</span>
                  </div>
                  <Form.Item
                    name="residentCountry"
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="text-lg">
                            This field is required
                          </span>
                        ),
                      },
                    ]}
                  >
                    <Select
                      className="w-[100%] h-[42px]"
                      placeholder="SELECT ONE"
                      options={countryNameList}
                      onChange={(value) => setResidentCountry(value)}
                    />
                  </Form.Item>
                </div>
              </div>
              {isForChild && (
                <div className="bg-childBackground p-5 rounded mt-5">
                  <div className="text-lg text-blue font-bold underline mb-3">
                    CHILD INFORMATION &#40;CHILD IS NOT HOLDING A VALID
                    PASSPORT&#41;
                  </div>
                  <div className="flex justify-between gap-8 mb-2">
                    <div className="w-1/3">
                      <div className="text-lg text-blue font-semibold mb-2">
                        Child Name <span className="text-red">*</span>
                      </div>
                      <Form.Item
                        name="childName"
                        rules={[
                          {
                            required: true,
                            message: (
                              <span className="text-lg">
                                This field is required
                              </span>
                            ),
                          },
                        ]}
                      >
                        <Input
                          className="w-[100%] text-[17px] h-[42px]"
                          placeholder="ENTER CHILD NAME"
                          onInput={(e) =>
                            (e.target.value = e.target.value.toUpperCase())
                          }
                          onChange={(e) => setChildName(e.target.value)}
                        />
                      </Form.Item>
                    </div>

                    <div className="w-1/3">
                      <div className="text-lg text-blue font-semibold mb-2">
                        Date of Birth <span className="text-red">*</span>
                      </div>
                      <Form.Item
                        name="childDob"
                        rules={[
                          {
                            required: true,
                            message: (
                              <span className="text-lg">
                                This field is required
                              </span>
                            ),
                          },
                        ]}
                      >
                        <DatePicker
                          className="w-[100%] h-[42px]"
                          disabledDate={disableFutureDates}
                          onChange={(value) => {
                            setChildDob(value);
                          }}
                        />
                      </Form.Item>
                    </div>

                    <div className="w-1/3">
                      <div className="text-lg text-blue font-semibold mb-2">
                        Gender <span className="text-red">*</span>
                      </div>
                      <Form.Item
                        name="childGender"
                        rules={[
                          {
                            required: true,
                            message: (
                              <span className="text-lg">
                                This field is required
                              </span>
                            ),
                          },
                        ]}
                      >
                        <Select
                          className="w-[100%] h-[42px]"
                          placeholder="SELECT ONE"
                          options={genderOptions}
                          onChange={(value) => setChildGender(value)}
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="flex justify-between gap-8 mb-2">
                    <div className="w-1/3">
                      <div className="text-lg text-blue font-semibold mb-2">
                        Guardiance Name <span className="text-red">*</span>
                      </div>
                      <Form.Item
                        name="childGuardianceName"
                        rules={[
                          {
                            required: true,
                            message: (
                              <span className="text-lg">
                                This field is required
                              </span>
                            ),
                          },
                        ]}
                      >
                        <Input
                          className="w-[100%] text-[17px] h-[42px]"
                          placeholder="ENTER GUARDIANCE NAME"
                          onInput={(e) =>
                            (e.target.value = e.target.value.toUpperCase())
                          }
                          onChange={(e) =>
                            setChildGuardianceName(e.target.value)
                          }
                        />
                      </Form.Item>
                    </div>
                    <div className="w-1/3">
                      <div className="text-lg text-blue font-semibold mb-2">
                        Relationship <span className="text-red">*</span>
                      </div>
                      <Form.Item
                        name="childRelationship"
                        rules={[
                          {
                            required: true,
                            message: (
                              <span className="text-lg">
                                This field is required
                              </span>
                            ),
                          },
                        ]}
                      >
                        <Input
                          className="w-[100%] text-[17px] h-[42px]"
                          placeholder="ENTER RELATIONSHIP"
                          onInput={(e) =>
                            (e.target.value = e.target.value.toUpperCase())
                          }
                          onChange={(e) => setChildRelationship(e.target.value)}
                        />
                      </Form.Item>
                    </div>

                    <div className="w-1/3">
                      <div className="w-[100%] h-[42px]"></div>
                    </div>
                  </div>
                </div>
              )}

              <hr className="my-8 text-bgColor" />
            </div>
            <div className="w-full">
              <div className="text-lg text-blue font-bold underline mb-3">
                BENEFICIARY INFORMATION &#40;In English &#41;
              </div>
              <div className="flex justify-between gap-8 mb-2">
                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Name <span className="text-red">*</span>
                  </div>
                  <Form.Item
                    name="beneficiaryName"
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="text-lg">
                            This field is required
                          </span>
                        ),
                      },
                    ]}
                  >
                    <Input
                      className="w-[100%] text-[17px] h-[42px]"
                      placeholder="ENTER NAME"
                      onInput={(e) =>
                        (e.target.value = e.target.value.toUpperCase())
                      }
                      onChange={(e) => setBeneficiaryName(e.target.value)}
                    />
                  </Form.Item>
                </div>

                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Date of Birth <span className="text-red">*</span>
                  </div>
                  <Form.Item
                    name="beneficiaryDob"
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="text-lg">
                            This field is required
                          </span>
                        ),
                      },
                    ]}
                  >
                    <DatePicker
                      className="w-[100%] h-[42px]"
                      disabledDate={disableFutureDates}
                      onChange={(value) => {
                        setBeneficiaryDob(value);
                      }}
                    />
                  </Form.Item>
                </div>

                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    National Identificaiton Number
                  </div>
                  <Form.Item name="beneficiaryNin">
                    <Input
                      className="w-[100%] text-[17px] h-[42px]"
                      placeholder="ENTER NATIONAL IDENTIFICATION NUMBER"
                      onInput={(e) =>
                        (e.target.value = e.target.value.toUpperCase())
                      }
                      onChange={(e) => setBeneficiaryNin(e.target.value)}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="flex justify-between gap-8 mb-2">
                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Relationship <span className="text-red">*</span>
                  </div>
                  <Form.Item
                    name="beneficiaryRelationship"
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="text-lg">
                            This field is required
                          </span>
                        ),
                      },
                    ]}
                  >
                    <Input
                      className="w-[100%] text-[17px] h-[42px]"
                      placeholder="ENTER RELATIONSHIP"
                      onInput={(e) =>
                        (e.target.value = e.target.value.toUpperCase())
                      }
                      onChange={(e) =>
                        setBeneficiaryRelationship(e.target.value)
                      }
                    />
                  </Form.Item>
                </div>

                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Contact Phone Number <span className="text-red">*</span>
                  </div>
                  <div className="flex ">
                    <Form.Item
                      name="beneficiaryCountryCode"
                      className="w-[30%]"
                      rules={[
                        {
                          required: true,
                          message: <span className="text-lg"></span>,
                        },
                      ]}
                    >
                      <Select
                        className="h-[42px]"
                        dropdownStyle={{ width: "300px" }}
                        placeholder="SELECT ONE"
                        options={countryCodeList}
                        onChange={(value) => setBeneficiaryCountryCode(value)}
                      />
                    </Form.Item>
                    <Form.Item
                      name="beneficiaryPhoneNo"
                      className="w-[70%]"
                      rules={[
                        {
                          required: true,
                          message: (
                            <span className="text-lg">
                              This field is required
                            </span>
                          ),
                        },
                        {
                          message: "Enter a valid phone number",
                          validator: (_, value) => {
                            if (/^[0-9]+$/.test(value)) {
                              return Promise.resolve();
                            } else {
                              return Promise.reject("Some message here");
                            }
                          },
                        },
                      ]}
                    >
                      <Input
                        className=" text-[17px] h-[42px]"
                        placeholder="ENTER PHONE NUMBER"
                        onChange={(e) => setBeneficiaryPhoneNo(e.target.value)}
                      />
                    </Form.Item>
                  </div>
                </div>

                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Email
                  </div>
                  <Form.Item
                    name="beneficiaryEmail"
                    rules={[
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                    ]}
                  >
                    <Input
                      className="w-[100%] text-[17px] h-[42px]"
                      placeholder="ENTER EMAIL"
                      onChange={(e) => setBeneficiaryEmail(e.target.value)}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="flex justify-between gap-8 mb-2">
                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Resident Address &#40;Max: 250 Char&#41;{" "}
                    <span className="text-red">*</span>
                  </div>
                  <Form.Item
                    name="beneficiaryResidentAddress"
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="text-lg">
                            This field is required
                          </span>
                        ),
                      },
                    ]}
                  >
                    <Input.TextArea
                      className="w-[100%] text-[17px]"
                      rows={7}
                      onInput={(e) =>
                        (e.target.value = e.target.value.toUpperCase())
                      }
                      onChange={(e) =>
                        setBeneficiaryResidentAddress(e.target.value)
                      }
                    />
                  </Form.Item>
                </div>
                <div className="w-1/3">
                  <div className="text-lg text-blue font-semibold mb-2">
                    Resident Country <span className="text-red">*</span>
                  </div>
                  <Form.Item
                    name="beneficiaryResidentCountry"
                    rules={[
                      {
                        required: true,
                        message: (
                          <span className="text-lg">
                            This field is required
                          </span>
                        ),
                      },
                    ]}
                  >
                    <Select
                      className="w-[100%] h-[42px]"
                      placeholder="SELECT ONE"
                      options={countryNameList}
                      onChange={(value) => setBeneficiaryResidentCountry(value)}
                    />
                  </Form.Item>
                </div>
                <div className="w-1/3">
                  <div className="w-[100%] mb-2"></div>
                </div>
              </div>
            </div>

            <section name="agent" className="bg-childBackground p-5  mt-5">
              <div className="text-lg text-blue font-bold underline mb-5">
                This section is only used for servicing agent of Myanma
                Insurance
              </div>
              <div>
                <Radio.Group
                  onChange={(e) => setIsAgent(e.target.value)}
                  value={isAgent}
                  className=" flex gap-2 mb-3"
                >
                  <Radio
                    value={false}
                    className="w-1/3 text-lg text-blue font-bold"
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
                    className="w-2/3 text-lg text-blue font-bold "
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
                      className="w-[100%] text-[17px] h-[42px]"
                    />
                  </div>
                  <div className="w-1/3">
                    <div className="mb-3 text-lg text-blue font-bold">
                      Name <span className="text-red">*</span>
                    </div>
                    <Input
                      disabled
                      value={agentName}
                      className="w-[100%] text-[17px] h-[42px]"
                    />
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
                type="submit"
                // onClick={sumbitForm}
              >
                SUBMIT AND CONTINUE{" "}
              </button>
            </div>
          </Form>
        </ConfigProvider>

        <Modal
          title={
            <div className="text-2xl text-blue font-bold">
              Check Agent Information
            </div>
          }
          closable={true}
          open={isAgentModalOpen}
          loading={agentLoading}
          onOk={handleAgentOk}
          onCancel={handleAgentCancel}
          okText="Check Agent"
          centered
          footer={null}
        >
          <Form onFinish={handleAgentOk}>
            <div className="text-lg mt-5 mb-3">
              <div className="text-blue font-bold mb-2">
                Agent License Number <span className="text-red">*</span>
              </div>
              <Form.Item
                name="agentLicenseNo"
                rules={[
                  {
                    required: true,
                    message: (
                      <span className="text-lg">This field is required</span>
                    ),
                  },
                ]}
              >
                <Input
                  size="large"
                  onInput={(e) =>
                    (e.target.value = e.target.value.toUpperCase())
                  }
                  onChange={(e) =>
                    setAgentLicenseNo(e.target.value.toUpperCase())
                  }
                />
              </Form.Item>
            </div>
            <div className="text-lg mb-3">
              <div className="text-blue font-bold mb-2">
                Password <span className="text-red">*</span>
              </div>
              <Form.Item
                name="agentPassword"
                rules={[
                  {
                    required: true,
                    message: (
                      <span className="text-lg">This field is required</span>
                    ),
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  onChange={(e) => setAgentPassword(e.target.value)}
                />
              </Form.Item>
            </div>
            <div>
              <Button type="primary" htmlType="submit">
                Check Agent
              </Button>
            </div>
          </Form>
          {noAgent && (
            <div className="text-[17px] text-red mt-3">No Agent found.</div>
          )}
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
          width="60%"
          footer={null}
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
              <div className="w-1/2 font-bold">{premiumRate} USD</div>
            </div>
            <div className="flex bg-childBackground text-xl p-3 mb-1">
              <div className="w-1/2 font-semibold">Net Premium</div>
              <div className="w-1/2 font-bold">{premiumRate} USD</div>
            </div>
            <div className="flex bg-childBackground text-xl p-3 mb-1">
              <div className="w-1/2 font-semibold">Age &#40;Year&#41;</div>
              <div className="w-1/2 font-bold">{age}</div>
            </div>
            <div className="flex bg-childBackground text-xl p-3 mb-1">
              <div className="w-1/2 font-semibold">Coverage Plan</div>
              <div className="w-1/2 font-bold">{coveragePlan} Days</div>
            </div>
            <div className="flex bg-childBackground text-xl p-3 mb-1">
              <div className="w-1/2 font-semibold">Passport Number</div>
              <div className="w-1/2 font-bold">{passportNumber}</div>
            </div>
            <div className="flex bg-childBackground text-xl p-3 mb-1">
              <div className="w-1/2 font-semibold">Name (as per passport)</div>
              <div className="w-1/2 font-bold">{name}</div>
            </div>
            <div className="flex bg-childBackground text-xl p-3 mb-1">
              <div className="w-1/2 font-semibold">Estimated Arrival Date</div>
              <div className="w-1/2 font-bold">
                {dateformat(estimatedArrivalDate)}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <div className="text-xl text-blue font-bold">
              Choose Payment Method
            </div>
            <div className="mt-5">
              <Radio.Group
                onChange={(e) => setPaymentMethod(e.target.value)}
                value={paymentMethod}
                className=" flex gap-5 mb-3 z-0"
              >
                <Radio.Button
                  value="VISA"
                  className="w-1/3 text-xl text-blue font-bold w-[200px] h-[120px]"
                >
                  <img src={visaImg} width="200px" height="120px" />
                  {paymentMethod == "VISA" && (
                    <FaCheckCircle
                      size={35}
                      className="absolute top-[-15px] left-[170px]"
                    />
                  )}
                </Radio.Button>
                <Radio.Button
                  value="MASTER"
                  className="relative w-1/3 text-xl text-blue font-bold w-[200px] h-[120px]"
                >
                  <img src={masterImg} width="200px" height="120px" />
                  {paymentMethod == "MASTER" && (
                    <FaCheckCircle
                      size={35}
                      className="absolute top-[-15px] left-[170px]"
                    />
                  )}
                </Radio.Button>
              </Radio.Group>
            </div>
          </div>
          <div className="mt-5">
            <Button
              type="primary"
              onClick={handlePaymentOk}
              className="px-8 py-4 text-xl bg-blue"
            >
              NEXT
            </Button>
          </div>
        </Modal>
        <Modal
          open={isCreatedModalOpen}
          onCancel={handleCreatedCancel}
          footer={null}
          centered
        >
          <Result status="success" title="Inbound Proposal Created" />
        </Modal>
      </div>
    </div>
  );
};

export default InboundFormPage;
