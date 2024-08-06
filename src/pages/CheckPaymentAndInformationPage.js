import { Button } from "antd";
import { useState, useEffect } from "react";

const CheckPaymentAndInformationPage = ({
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

  const calculateServiceFee = () => {
    const fee = premiumRate * 0.03627;
    setServiceFee(fee);
  };
  const calculateTotalAmount = () => {
    const totalAmount = premiumRate + serviceFee;
    setTotalAmount(totalAmount);
  };

  const dateformat = (d) => {
    const date = new Date(d);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    calculateServiceFee();
  }, []);

  useEffect(() => {
    calculateTotalAmount();
  }, [serviceFee]);
  const createProposal = async () => {};

  return (
    <div className="w-[95%] mx-auto rounded bg-white">
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
        <div className="mt-10">
          <Button className="text-xl text-white bg-blue font-semibold p-4 h-10">
            CONFIRM
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckPaymentAndInformationPage;
