import CustomInput from "@/app/[locale]/_components/custom-input";
import { FaEquals } from "react-icons/fa6";

export default function DistanceRates() {
  return (
    <div className="w-full space-y-2">
      <h4 className="text-xl font-semibold">Distance Rates</h4>
      <div className="flex items-center gap-2 text-sm">
        <div className="w-56">
          <CustomInput
            labelText={
              <div>First &#40;Enter &#35; of kms&#41;</div>
            }
            rightSideContent={
              <div className="font-semibold">
                km
              </div>
            } />
        </div>
        <div className="flex-none w-auto mt-5">
          <FaEquals />
        </div>
        <div className="w-56">
          <CustomInput labelText={<div>Cost</div>}
            leftSideContent={
              <div className="font-semibold">
                C&#36;
              </div>
            } />
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <div className="w-56">
          <CustomInput
            labelText={
              <div>Succeeding &#40;kms&#41;</div>
            }
            rightSideContent={
              <div className="font-semibold">
                km
              </div>
            } />
        </div>

        <div className="flex-none w-auto mt-5">
          <FaEquals />
        </div>
        <div className="w-56">
          <CustomInput labelText={<div>Cost</div>}
            leftSideContent={
              <div className="font-semibold">
                C&#36;
              </div>
            } />
        </div>

      </div>
    </div>
  )
}