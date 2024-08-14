import { Button, Modal, Result } from "antd";
import { useState, useEffect } from "react";
import { createProposal } from "../api/proposalApi";
import { dateformat } from "../utils/dateformat";
import { useNavigate } from "react-router-dom";

const CheckPaymentAndInformationPage = ({
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
  passportIssuedDate,

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

  CountryCode,
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
  beneficiaryCoutryCode,
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
  const [serviceFee, setServiceFee] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const navigate = useNavigate();

  const calculateServiceFee = () => {
    const fee =
      Math.round((premiumRate * 0.03627 + Number.EPSILON) * 100) / 100;
    setServiceFee(fee);
  };
  const calculateTotalAmount = () => {
    const totalAmount = premiumRate + serviceFee;
    setTotalAmount(totalAmount);
  };

  const createInboundProposal = async () => {
    const formData = new FormData();

    // Insured Person
    formData.append("passportNo", passportNumber);
    formData.append("passportIssuedDate", dateformat(passportIssuedDate));
    formData.append("passportCountry", passportIssuedCountry);

    formData.append("isChild", isForChild);

    formData.append("insuredPersonName", name);
    formData.append("insuredPersondob", dateformat(dob));
    formData.append("insuredPersongender", gender);

    formData.append("phoneNo", contactNumber);
    formData.append("insuredPersonEmail", email);
    formData.append("localaddress", addressInMyanmar);
    formData.append("foreignAddress", residentAddress);
    formData.append("residentCountry", residentCountry);

    // Beneficiary
    formData.append("beneficiaryName", beneficiaryName);
    formData.append("beneficiarydob", dateformat(beneficiaryDob));
    formData.append("nin", beneficiaryNin);
    formData.append("relationship", beneficiaryRelationship);
    formData.append("beneficiaryPhNo", beneficiaryContactNumber);
    formData.append("beneficiaryEmail", beneficiaryEmail);
    formData.append("address", beneficiaryResidentAddress);
    formData.append("benefiCountry", beneficiaryResidentCountry);

    // Child
    if (isForChild) {
      formData.append("childName", childName);
      formData.append("childDob", dateformat(childDob));
      formData.append("childGender", childGender);
      formData.append("gurdianceName", childGuardianceName);
      formData.append("childRelationship", childRelationship);
    }

    // Agent
    if (isAgent) {
      formData.append("licenceNo", agentLicenseNo);
    }

    // Inbound Proposal
    formData.append("arrivalDate", dateformat(estimatedArrivalDate));
    formData.append("journeyFrom", journeyFrom);
    formData.append("coveragePlan", coveragePlan);

    formData.append("age", age);
    formData.append("premiumRate", premiumRate);
    formData.append("serviceFees", serviceFee);
    formData.append("submittedDate", dateformat(new Date()));

    formData.append("policyStartDate", dateformat(estimatedArrivalDate));
    formData.append(
      "policyEndDate",
      dateformat(
        new Date(estimatedArrivalDate).getTime() +
          coveragePlan * 24 * 60 * 60 * 1000
      )
    );

    const response = await createProposal(formData);
    if (response) console.log(response);
    setIsCreatedModalOpen(true);
    setIsFromCreate(true);
    navigate("/");
  };

  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 0);
    calculateServiceFee();
  }, []);

  useEffect(() => {
    calculateTotalAmount();
  }, [serviceFee]);

  return (
    <div className="w-[87%] mx-auto rounded shadow-2xl bg-white">
      <div className="p-10">
        <div className="text-3xl text-blue font-bold mb-10">
          PLEASE CHECK PAYMENT AND INSURED PERSON INFORMATION
        </div>
        <div>
          <div className="text-xl underline text-blue font-bold mb-3">
            PAYMENT INFORMATION
          </div>
          <div className="flex p-3 bg-yellow mb-1">
            <div className="w-1/3 text-xl font-semibold">Payment Channel</div>
            <div className="w-1/3 text-xl ">{paymentMethod}</div>
          </div>
          <div className="flex p-3 bg-yellow mb-1">
            <div className="w-1/3 text-xl font-semibold">Premium Amount</div>
            <div className="w-1/3 text-xl ">{premiumRate} USD</div>
          </div>
          <div className="flex p-3 bg-yellow mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Service Charge &#40; {paymentMethod} &#41;
            </div>
            <div className="w-1/3 text-xl ">{serviceFee} USD</div>
          </div>
          <div className="flex p-3 bg-yellow mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Total Amount &#40;Including Service Charges&#41;
            </div>
            <div className="w-1/3 text-xl ">{totalAmount} USD</div>
          </div>
          <div className="flex p-3 bg-yellow mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Net Amount &#40;Including Service Charges&#41;
            </div>
            <div className="w-1/3 text-xl ">{totalAmount} USD</div>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-xl underline text-blue font-bold mb-3">
            INSURED PERSON'S PASSPORT INFORMATION
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Passport Number</div>
            <div className="w-1/3 text-xl ">{passportNumber}</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Passport Issued Date
            </div>
            <div className="w-1/3 text-xl ">
              {dateformat(passportIssuedDate)}
            </div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Passport Issued Country
            </div>
            <div className="w-1/3 text-xl ">{passportIssuedCountry}</div>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-xl underline text-blue font-bold mb-3">
            INSURED PERSON INFORMATION
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Insured For</div>
            <div className="w-1/3 text-xl ">
              {isForChild
                ? `BUY FOR THE CHILD`
                : `BUY FOR THIS PASSPORT HOLDER`}
            </div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Name &#40;as per passport&#41;
            </div>
            <div className="w-1/3 text-xl ">{name}</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Date of Birth &#40;as per passport&#41;
            </div>
            <div className="w-1/3 text-xl ">{dateformat(dob)}</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Gender &#40;as per passport&#41;
            </div>
            <div className="w-1/3 text-xl ">{gender}</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Estimated Arrival Date
            </div>
            <div className="w-1/3 text-xl ">
              {dateformat(estimatedArrivalDate)}
            </div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Journey From</div>
            <div className="w-1/3 text-xl ">{journeyFrom}</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Journey To</div>
            <div className="w-1/3 text-xl ">MYANMAR</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Coverage Plan</div>
            <div className="w-1/3 text-xl ">{coveragePlan} DAYS</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Contact Phone Number
            </div>
            <div className="w-1/3 text-xl ">{contactNumber}</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Email Address</div>
            <div className="w-1/3 text-xl ">{email}</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Resident Address</div>
            <div className="w-1/3 text-xl ">{residentAddress}</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Resident Country</div>
            <div className="w-1/3 text-xl ">{residentCountry}</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Address in Myanmar
            </div>
            <div className="w-1/3 text-xl ">{addressInMyanmar}</div>
          </div>
        </div>
        {isForChild && (
          <div className="mt-10">
            <div className="text-xl underline text-blue font-bold mb-3">
              CHILD INFORMATION
            </div>
            <div className="flex p-3 border-b border-bgColor mb-1">
              <div className="w-1/3 text-xl font-semibold">Name</div>
              <div className="w-1/3 text-xl ">{childName}</div>
            </div>
            <div className="flex p-3 border-b border-bgColor mb-1">
              <div className="w-1/3 text-xl font-semibold">Date of Birth</div>
              <div className="w-1/3 text-xl ">{dateformat(childDob)}</div>
            </div>
            <div className="flex p-3 border-b border-bgColor mb-1">
              <div className="w-1/3 text-xl font-semibold">Gender</div>
              <div className="w-1/3 text-xl ">{childGender}</div>
            </div>
            <div className="flex p-3 border-b border-bgColor mb-1">
              <div className="w-1/3 text-xl font-semibold">Guardiance Name</div>
              <div className="w-1/3 text-xl ">{childGuardianceName}</div>
            </div>

            <div className="flex p-3 border-b border-bgColor mb-1">
              <div className="w-1/3 text-xl font-semibold">Relationship</div>
              <div className="w-1/3 text-xl ">{childRelationship}</div>
            </div>
          </div>
        )}
        <div className="mt-10">
          <div className="text-xl underline text-blue font-bold mb-3">
            BENEFICIARY INFORMATION
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Name</div>
            <div className="w-1/3 text-xl ">{beneficiaryName}</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Date of Birth</div>
            <div className="w-1/3 text-xl ">{dateformat(beneficiaryDob)}</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">
              National Identification Number
            </div>
            <div className="w-1/3 text-xl ">{beneficiaryNin}</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Relationship</div>
            <div className="w-1/3 text-xl ">{beneficiaryRelationship}</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Contact Number</div>
            <div className="w-1/3 text-xl ">{beneficiaryContactNumber}</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Email</div>
            <div className="w-1/3 text-xl ">{beneficiaryEmail}</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Resident Address</div>
            <div className="w-1/3 text-xl ">{beneficiaryResidentAddress}</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Resident Country</div>
            <div className="w-1/3 text-xl ">{beneficiaryResidentCountry}</div>
          </div>
        </div>
        {isAgent && (
          <div className="mt-10">
            <div className="text-xl underline text-blue font-bold mb-3">
              AGENT INFORMATION
            </div>
            <div className="flex p-3 border-b border-bgColor mb-1">
              <div className="w-1/3 text-xl font-semibold">
                Agent License No.
              </div>
              <div className="w-1/3 text-xl ">{agentLicenseNo}</div>
            </div>
            <div className="flex p-3 border-b border-bgColor mb-1">
              <div className="w-1/3 text-xl font-semibold">Agent Name</div>
              <div className="w-1/3 text-xl ">{agentName}</div>
            </div>
          </div>
        )}
        <div className="mt-10">
          <Button
            className="text-xl text-white bg-blue font-semibold p-4 h-10"
            onClick={createInboundProposal}
          >
            CONFIRM
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckPaymentAndInformationPage;
