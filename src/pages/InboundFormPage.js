import { DatePicker, Input, InputNumber, Select } from "antd";

const InboundFormPage = () => {
  return (
    <div className="w-[95%] mx-auto">
      <div className="flex justify-center text-2xl font-bold text-blue my-4">
        INBOUND TRAVEL ACCIDENT INSURANCE
      </div>
      <div className="bg-white rounded p-10">
        <div className="w-full">
          <div className="text-xl text-blue font-bold underline mb-3">
            PASSPORT INFORMATION &#40;In English &#41;
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
              <Select className="w-[100%] h-12" />
            </div>
          </div>
          <hr className="my-8 text-bgColor" />
        </div>
        <div className="w-full">
          <div className="text-xl text-blue font-bold underline mb-3">
            INSURED INFORMATION &#40;In English&#41;
          </div>
          <div className="flex justify-between gap-8">
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
              <DatePicker className="w-[100%] h-12" />
            </div>

            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Gender &#40;as per passport&#41;{" "}
                <span className="text-red">*</span>
              </div>
              <Select className="w-[100%] h-12" />
            </div>
          </div>
          <div className="flex justify-between gap-8">
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
              <Select className="w-[100%] h-12" />
            </div>
            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Journey To <span className="text-red">*</span>
              </div>
              <Select className="w-[100%] h-12" value="MYANMAR" disabled />
            </div>
          </div>
          <div className="flex justify-between gap-8">
            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Coverage Plan <span className="text-red">*</span>
              </div>
              <Select className="w-[100%] h-12" />
            </div>
            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Insured's Contact Phone Number{" "}
                <span className="text-red">*</span>
              </div>
              <div className="flex ">
                <Select className="w-[20%] h-12" />
                <InputNumber className="w-[80%] h-12" />
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
          <div className="flex justify-between gap-8">
            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Address in Myanmar &#40;Max: 250 Char&#41;{" "}
                <span className="text-red">*</span>
              </div>
              <Input.TextArea className="w-[100%]" />
            </div>

            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Resident Address &#40;Max: 250 Char&#41;{" "}
                <span className="text-red">*</span>
              </div>
              <Input.TextArea className="w-[100%]" />
            </div>

            <div className="w-1/3">
              <div className="text-xl text-blue font-semibold mb-2">
                Resident Country <span className="text-red">*</span>
              </div>
              <Select className="w-[100%] h-12" />
            </div>
          </div>
          <hr className="my-8 text-bgColor" />
        </div>
      </div>
    </div>
  );
};

export default InboundFormPage;
