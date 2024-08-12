import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import { Form } from "antd";
import Userlayout from "./layouts/layout";
import InboundFormPage from "./pages/InboundFormPage";
import CheckPaymentAndInformationPage from "./pages/CheckPaymentAndInformationPage";
import EnquiryPage from "./pages/EnquiryPage";

function App() {
  const [form] = Form.useForm();
  const [isFromCreate, setIsFromCreate] = useState(false);

  const [countryNameList, setCountryNameList] = useState([]);
  const [countryCodeList, setCountryCodeList] = useState([]);

  // Insured Person
  const [passportNumber, setPassportNumber] = useState(null);
  const [passportIssuedDate, setPassportIssuedDate] = useState(null);
  const [passportIssuedCountry, setPassportIssuedCountry] = useState(null);

  const [isForChild, setIsForChild] = useState(false);

  const [name, setName] = useState(null);
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState(null);

  const [estimatedArrivalDate, setEstimatedArrivalDate] = useState(null);
  const [journeyFrom, setJourneyFrom] = useState(null);

  const [coveragePlan, setCoveragePlan] = useState(null);
  const [age, setAge] = useState(null);
  const [premiumRate, setPremiumRate] = useState(0);

  const [countryCode, setCountryCode] = useState(null);
  const [phoneNo, setPhoneNo] = useState(null);
  const [contactNumber, setContactNumber] = useState(null);
  const [email, setEmail] = useState(null);

  const [addressInMyanmar, setAddressInMyanmar] = useState(null);
  const [residentAddress, setResidentAddress] = useState(null);
  const [residentCountry, setResidentCountry] = useState(null);

  // Beneficiary
  const [beneficiaryName, setBeneficiaryName] = useState(null);
  const [beneficiaryDob, setBeneficiaryDob] = useState(null);
  const [beneficiaryNin, setBeneficiaryNin] = useState(null);

  const [beneficiaryRelationship, setBeneficiaryRelationship] = useState(null);

  const [beneficiaryCountryCode, setBeneficiaryCountryCode] = useState(null);
  const [beneficiaryPhoneNo, setBeneficiaryPhoneNo] = useState(null);
  const [beneficiaryContactNumber, setBeneficiaryContactNumber] =
    useState(null);
  const [beneficiaryEmail, setBeneficiaryEmail] = useState(null);

  const [beneficiaryResidentAddress, setBeneficiaryResidentAddress] =
    useState(null);
  const [beneficiaryResidentCountry, setBeneficiaryResidentCountry] =
    useState(null);

  // Child
  const [childName, setChildName] = useState(null);
  const [childDob, setChildDob] = useState(null);
  const [childGender, setChildGender] = useState(null);

  const [childGuardianceName, setChildGuardianceName] = useState(null);
  const [childRelationship, setChildRelationship] = useState(null);

  // Agent
  const [isAgent, setIsAgent] = useState(false);

  const [isAgentModalOpen, setIsAgentModalOpen] = useState(false);
  const [agentLoading, setAgentLoading] = useState(false);
  const [noAgent, setNoAgent] = useState(false);

  const [agentLicenseNo, setAgentLicenseNo] = useState(null);
  const [agentPassword, setAgentPassword] = useState(null);

  const [licenseNo, setLicenseNo] = useState(null);
  const [agentName, setAgentName] = useState(null);

  // Payment
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Userlayout />,
      children: [
        {
          index: "/",
          element: (
            <InboundFormPage
              form={form}
              isFromCreate={isFromCreate}
              setIsFromCreate={setIsFromCreate}
              countryNameList={countryNameList}
              setCountryNameList={setCountryNameList}
              countryCodeList={countryCodeList}
              setCountryCodeList={setCountryCodeList}
              // Insured Person
              passportNumber={passportNumber}
              setPassportNumber={setPassportNumber}
              passportIssuedDate={passportIssuedDate}
              setPassportIssuedDate={setPassportIssuedDate}
              passportIssuedCountry={passportIssuedCountry}
              setPassportIssuedCountry={setPassportIssuedCountry}
              isForChild={isForChild}
              setIsForChild={setIsForChild}
              name={name}
              setName={setName}
              dob={dob}
              setDob={setDob}
              gender={gender}
              setGender={setGender}
              estimatedArrivalDate={estimatedArrivalDate}
              setEstimatedArrivalDate={setEstimatedArrivalDate}
              journeyFrom={journeyFrom}
              setJourneyFrom={setJourneyFrom}
              coveragePlan={coveragePlan}
              setCoveragePlan={setCoveragePlan}
              age={age}
              setAge={setAge}
              premiumRate={premiumRate}
              setPremiumRate={setPremiumRate}
              countryCode={countryCode}
              setCountryCode={setCountryCode}
              phoneNo={phoneNo}
              setPhoneNo={setPhoneNo}
              contactNumber={contactNumber}
              setContactNumber={setContactNumber}
              email={email}
              setEmail={setEmail}
              addressInMyanmar={addressInMyanmar}
              setAddressInMyanmar={setAddressInMyanmar}
              residentAddress={residentAddress}
              setResidentAddress={setResidentAddress}
              residentCountry={residentCountry}
              setResidentCountry={setResidentCountry}
              // Beneficiary
              beneficiaryName={beneficiaryName}
              setBeneficiaryName={setBeneficiaryName}
              beneficiaryDob={beneficiaryDob}
              setBeneficiaryDob={setBeneficiaryDob}
              beneficiaryNin={beneficiaryNin}
              setBeneficiaryNin={setBeneficiaryNin}
              beneficiaryRelationship={beneficiaryRelationship}
              setBeneficiaryRelationship={setBeneficiaryRelationship}
              beneficiaryCountryCode={beneficiaryCountryCode}
              setBeneficiaryCountryCode={setBeneficiaryCountryCode}
              beneficiaryPhoneNo={beneficiaryPhoneNo}
              setBeneficiaryPhoneNo={setBeneficiaryPhoneNo}
              beneficiaryContactNumber={beneficiaryContactNumber}
              setBeneficiaryContactNumber={setBeneficiaryContactNumber}
              beneficiaryEmail={beneficiaryEmail}
              setBeneficiaryEmail={setBeneficiaryEmail}
              beneficiaryResidentAddress={beneficiaryResidentAddress}
              setBeneficiaryResidentAddress={setBeneficiaryResidentAddress}
              beneficiaryResidentCountry={beneficiaryResidentCountry}
              setBeneficiaryResidentCountry={setBeneficiaryResidentCountry}
              // Child
              childName={childName}
              setChildName={setChildName}
              childDob={childDob}
              setChildDob={setChildDob}
              childGender={childGender}
              setChildGender={setChildGender}
              childGuardianceName={childGuardianceName}
              setChildGuardianceName={setChildGuardianceName}
              childRelationship={childRelationship}
              setChildRelationship={setChildRelationship}
              // Agent
              isAgent={isAgent}
              setIsAgent={setIsAgent}
              isAgentModalOpen={isAgentModalOpen}
              setIsAgentModalOpen={setIsAgentModalOpen}
              agentLoading={agentLoading}
              setAgentLoading={setAgentLoading}
              noAgent={noAgent}
              setNoAgent={setNoAgent}
              agentLicenseNo={agentLicenseNo}
              setAgentLicenseNo={setAgentLicenseNo}
              agentPassword={agentPassword}
              setAgentPassword={setAgentPassword}
              licenseNo={licenseNo}
              setLicenseNo={setLicenseNo}
              agentName={agentName}
              setAgentName={setAgentName}
              // Payment
              isPaymentModalOpen={isPaymentModalOpen}
              setIsPaymentModalOpen={setIsPaymentModalOpen}
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          ),
        },
        {
          path: "/checkinfo",
          element: (
            <CheckPaymentAndInformationPage
              form={form}
              isFromCreate={isFromCreate}
              setIsFromCreate={setIsFromCreate}
              countryNameList={countryNameList}
              setCountryNameList={setCountryNameList}
              countryCodeList={countryCodeList}
              setCountryCodeList={setCountryCodeList}
              // Insured Person
              passportNumber={passportNumber}
              passportIssuedDate={passportIssuedDate}
              passportIssuedCountry={passportIssuedCountry}
              setPassportIssuedCountry={setPassportIssuedCountry}
              isForChild={isForChild}
              setIsForChild={setIsForChild}
              name={name}
              setName={setName}
              dob={dob}
              setDob={setDob}
              gender={gender}
              setGender={setGender}
              estimatedArrivalDate={estimatedArrivalDate}
              setEstimatedArrivalDate={setEstimatedArrivalDate}
              journeyFrom={journeyFrom}
              setJourneyFrom={setJourneyFrom}
              coveragePlan={coveragePlan}
              setCoveragePlan={setCoveragePlan}
              age={age}
              setAge={setAge}
              premiumRate={premiumRate}
              setPremiumRate={setPremiumRate}
              countryCode={countryCode}
              setCountryCode={setCountryCode}
              phoneNo={phoneNo}
              setPhoneNo={setPhoneNo}
              contactNumber={contactNumber}
              setContactNumber={setContactNumber}
              email={email}
              setEmail={setEmail}
              addressInMyanmar={addressInMyanmar}
              setAddressInMyanmar={setAddressInMyanmar}
              residentAddress={residentAddress}
              setResidentAddress={setResidentAddress}
              residentCountry={residentCountry}
              setResidentCountry={setResidentCountry}
              // Beneficiary
              beneficiaryName={beneficiaryName}
              setBeneficiaryName={setBeneficiaryName}
              beneficiaryDob={beneficiaryDob}
              setBeneficiaryDob={setBeneficiaryDob}
              beneficiaryNin={beneficiaryNin}
              setBeneficiaryNin={setBeneficiaryNin}
              beneficiaryRelationship={beneficiaryRelationship}
              setBeneficiaryRelationship={setBeneficiaryRelationship}
              beneficiaryCountryCode={beneficiaryCountryCode}
              setBeneficiaryCountryCode={setBeneficiaryCountryCode}
              beneficiaryPhoneNo={beneficiaryPhoneNo}
              setBeneficiaryPhoneNo={setBeneficiaryPhoneNo}
              beneficiaryContactNumber={beneficiaryContactNumber}
              setBeneficiaryContactNumber={setBeneficiaryContactNumber}
              beneficiaryEmail={beneficiaryEmail}
              setBeneficiaryEmail={setBeneficiaryEmail}
              beneficiaryResidentAddress={beneficiaryResidentAddress}
              setBeneficiaryResidentAddress={setBeneficiaryResidentAddress}
              beneficiaryResidentCountry={beneficiaryResidentCountry}
              setBeneficiaryResidentCountry={setBeneficiaryResidentCountry}
              // Child
              childName={childName}
              setChildName={setChildName}
              childDob={childDob}
              setChildDob={setChildDob}
              childGender={childGender}
              setChildGender={setChildGender}
              childGuardianceName={childGuardianceName}
              setChildGuardianceName={setChildGuardianceName}
              childRelationship={childRelationship}
              setChildRelationship={setChildRelationship}
              // Agent
              isAgent={isAgent}
              setIsAgent={setIsAgent}
              isAgentModalOpen={isAgentModalOpen}
              setIsAgentModalOpen={setIsAgentModalOpen}
              agentLoading={agentLoading}
              setAgentLoading={setAgentLoading}
              agentLicenseNo={agentLicenseNo}
              setAgentLicenseNo={setAgentLicenseNo}
              agentPassword={agentPassword}
              setAgentPassword={setAgentPassword}
              licenseNo={licenseNo}
              setLicenseNo={setLicenseNo}
              agentName={agentName}
              setAgentName={setAgentName}
              // Payment
              isPaymentModalOpen={isPaymentModalOpen}
              setIsPaymentModalOpen={setIsPaymentModalOpen}
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          ),
        },
        {
          path: "/enquiry",
          element: (
            <EnquiryPage
              isFromCreate={isFromCreate}
              setIsFromCreate={setIsFromCreate}
            />
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
