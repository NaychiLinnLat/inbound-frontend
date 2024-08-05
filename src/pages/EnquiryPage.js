import { Input, Select, Button } from "antd";

const EnquiryPage = () => {
  return (
    <div className="w-[95%] mx-auto">
      <div className="flex justify-center text-2xl font-bold text-blue my-4">
        INBOUND TRAVEL ACCIDENT INSURANCE
      </div>
      <div className="bg-white rounded p-10">
        <div>
          <div className="flex gap-5">
            <div className="w-1/2">
              <div className="text-xl text-blue font-semibold mb-3">
                Passport Number <span className="text-red">*</span>
              </div>
              <Input className="w-[80%] h-12" />
            </div>
            <div className="w-1/2">
              <div className="text-xl text-blue font-semibold mb-3">
                Passport Issued Country <span className="text-red">*</span>
              </div>
              <Select className="w-[80%] h-12" />
            </div>
          </div>
          <div className="mt-5">
            <Button className="bg-blue text-white text-xl px-8 py-5">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryPage;
