import { Button } from "antd";

const CheckPaymentAndInformationPage = () => {
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
            <div className="w-1/3 text-xl ">VISA</div>
          </div>
          <div className="flex p-3 bg-yellow mb-1">
            <div className="w-1/3 text-xl font-semibold">Premium Amount</div>
            <div className="w-1/3 text-xl ">50.00 USD</div>
          </div>
          <div className="flex p-3 bg-yellow mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Service Charge &#40; Visa &#41;
            </div>
            <div className="w-1/3 text-xl ">1.82 USD</div>
          </div>
          <div className="flex p-3 bg-yellow mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Total Amount &#40;Including Service Charges&#41;
            </div>
            <div className="w-1/3 text-xl ">51.82 USD</div>
          </div>
          <div className="flex p-3 bg-yellow mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Net Amount &#40;Including Service Charges&#41;
            </div>
            <div className="w-1/3 text-xl ">51.82 USD</div>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-xl underline text-blue font-bold mb-3">
            INSURED PERSON'S PASSPORT INFORMATION
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Passport Number</div>
            <div className="w-1/3 text-xl ">SDF123</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Passport Issued Date
            </div>
            <div className="w-1/3 text-xl ">15-08-2023</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Passport Issued Country
            </div>
            <div className="w-1/3 text-xl ">ANGOLA</div>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-xl underline text-blue font-bold mb-3">
            INSURED PERSON INFORMATION
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Insured For</div>
            <div className="w-1/3 text-xl ">Buy for this passport holder</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Name &#40;as per passport&#41;
            </div>
            <div className="w-1/3 text-xl ">STEVE</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Date of Birth &#40;as per passport&#41;
            </div>
            <div className="w-1/3 text-xl ">09-08-2000</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Gender &#40;as per passport&#41;
            </div>
            <div className="w-1/3 text-xl ">MALE</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Estimated Arrival Date
            </div>
            <div className="w-1/3 text-xl ">05-08-2024</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Journey From</div>
            <div className="w-1/3 text-xl ">ANGOLA</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Journey To</div>
            <div className="w-1/3 text-xl ">MYANMAR</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Coverage Plan</div>
            <div className="w-1/3 text-xl ">15 DAYS</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Contact Phone Number
            </div>
            <div className="w-1/3 text-xl ">&#40;+244&#41;123456</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Email Address</div>
            <div className="w-1/3 text-xl ">steve@gmail.com</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Resident Address</div>
            <div className="w-1/3 text-xl ">SAMPLE ADDRESS</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Resident Country</div>
            <div className="w-1/3 text-xl ">ANGOLA</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">
              Address in Myanmar
            </div>
            <div className="w-1/3 text-xl ">SAMPLE ADDRESS</div>
          </div>
        </div>
        <div className="mt-10">
          <div className="text-xl underline text-blue font-bold mb-3">
            BENEFICIARY INFORMATION
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Name</div>
            <div className="w-1/3 text-xl ">LAURA</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Date of Birth</div>
            <div className="w-1/3 text-xl ">19-08-2009</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">
              National Identification Number
            </div>
            <div className="w-1/3 text-xl ">SDF5SD4F5</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Relationship</div>
            <div className="w-1/3 text-xl ">SISTER</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Contact Number</div>
            <div className="w-1/3 text-xl ">&#40;+244&#41;654321</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Email</div>
            <div className="w-1/3 text-xl ">laura@gmail.com</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Resident Address</div>
            <div className="w-1/3 text-xl ">SAMPLE ADDRESS</div>
          </div>
          <div className="flex p-3 border-b border-bgColor mb-1">
            <div className="w-1/3 text-xl font-semibold">Resident Country</div>
            <div className="w-1/3 text-xl ">ANGOLA</div>
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
