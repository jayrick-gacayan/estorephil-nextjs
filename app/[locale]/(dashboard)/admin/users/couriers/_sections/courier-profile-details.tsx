import { FiEye } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CourierProfileLabel from "../_components/courier-profile-label";
export default function CourierProfileDetails() {
  return (
    <div className="flex flex-col bg-white rounded-md h-full">
      <div className="text-md font-bold flex items-center mb-3 border-b">
        <div className="bg-slate-300 py-3 px-12 flex items-center">
          Rate Rules
        </div>
        <div className="bg-white py-3 px-12 flex items-center">Pay Out</div>
        <div className="bg-white py-3 px-12 flex items-center">Deliveries</div>
      </div>
      <div className=" px-4  flex-none  h-[650px] w-full flex flex-col gap-3">
        {/* HERE */}
        <CourierProfileLabel
          label={"RATES"}
          data={undefined}
          dataLink={undefined}
          title={true}
          labelLink={"Update"}
          label2={undefined}
          data2={undefined}
          data3={undefined}
          dataLink2={undefined}
          dataLink3={undefined}
        />
        <CourierProfileLabel
          label={
            "First x kilomoeters from Pickup point to destination is y pesos."
          }
          data={"C$ 620.00"}
          dataLink={undefined}
          title={false}
          labelLink={undefined}
          label2={undefined}
          data2={undefined}
          data3={undefined}
          dataLink2={undefined}
          dataLink3={undefined}
        />
        <CourierProfileLabel
          label={"Additional x kilometers is y pesos"}
          data={"C$ 620.00"}
          dataLink={undefined}
          title={false}
          labelLink={undefined}
          label2={undefined}
          data2={undefined}
          data3={undefined}
          dataLink2={undefined}
          dataLink3={undefined}
        />
        <CourierProfileLabel
          label={
            "Fixed flat rare for listed cities (can have multiple rates on other listed cities)"
          }
          data={"C$ 10.00"}
          dataLink={"View cities"}
          title={false}
          labelLink={undefined}
          label2={undefined}
          data2={"C$ 15.00"}
          data3={"C$ 20.00"}
          dataLink2={"View cities"}
          dataLink3={"View cities"}
        />
        <div className="flex items-center gap-14">
          <CourierProfileLabel
            label={"Rate depending on weight (C$)"}
            data={"C$ 10.00/kg"}
            dataLink={undefined}
            title={false}
            labelLink={undefined}
            label2={undefined}
            data2={undefined}
            data3={undefined}
            dataLink2={undefined}
            dataLink3={undefined}
          />
          <CourierProfileLabel
            label={"Rate depending on dimension"}
            data={"C$"}
            dataLink={undefined}
            title={false}
            labelLink={undefined}
            label2={undefined}
            data2={undefined}
            data3={undefined}
            dataLink2={undefined}
            dataLink3={undefined}
          />
        </div>
        <div className="flex items-center gap-14">
          <CourierProfileLabel
            label={"Vessel Fee"}
            data={"C$ 150.00"}
            dataLink={undefined}
            title={false}
            labelLink={undefined}
            label2={undefined}
            data2={undefined}
            data3={undefined}
            dataLink2={undefined}
            dataLink3={undefined}
          />
          <CourierProfileLabel
            label={"Air Fee"}
            data={"C$ 200.00"}
            dataLink={undefined}
            title={false}
            labelLink={undefined}
            label2={undefined}
            data2={undefined}
            data3={undefined}
            dataLink2={undefined}
            dataLink3={undefined}
          />
        </div>
        <CourierProfileLabel
          label={"Rate per item"}
          data={"C$"}
          dataLink={undefined}
          title={false}
          labelLink={undefined}
          label2={undefined}
          data2={undefined}
          data3={undefined}
          dataLink2={undefined}
          dataLink3={undefined}
        />
        <CourierProfileLabel
          label={"BALIKBAYAN BOX RATES"}
          data={undefined}
          dataLink={undefined}
          title={true}
          labelLink={"Update"}
          label2={undefined}
          data2={undefined}
          data3={undefined}
          dataLink2={undefined}
          dataLink3={undefined}
        />
        <CourierProfileLabel
          label={"Small (54x41x37cm)"}
          data={"C$ 620.00"}
          dataLink={undefined}
          title={false}
          labelLink={undefined}
          label2={undefined}
          data2={undefined}
          data3={undefined}
          dataLink2={undefined}
          dataLink3={undefined}
        />
        <CourierProfileLabel
          label={"Medium (40x40x45cm)"}
          data={"C$ 620.00"}
          dataLink={undefined}
          title={false}
          labelLink={undefined}
          label2={undefined}
          data2={undefined}
          data3={undefined}
          dataLink2={undefined}
          dataLink3={undefined}
        />
        <CourierProfileLabel
          label={"Large (54x41x37cm)"}
          data={"C$ 620.00"}
          dataLink={undefined}
          title={false}
          labelLink={undefined}
          label2={undefined}
          data2={undefined}
          data3={undefined}
          dataLink2={undefined}
          dataLink3={undefined}
        />
        <CourierProfileLabel
          label={"Extra-Large (60x40x60cm)"}
          data={"C$ 620.00"}
          dataLink={undefined}
          title={false}
          labelLink={undefined}
          label2={undefined}
          data2={undefined}
          data3={undefined}
          dataLink2={undefined}
          dataLink3={undefined}
        />
      </div>
    </div>
  );
}
