import CustomInput from "@/app/[locale]/_components/custom-input";
import DimensionInput from "@/app/[locale]/_components/dimension-input";
import { FaEquals } from "react-icons/fa6";

export default function WeightSizeRates() {
  return (
    <div className="flex justify-evenly items-center gap-2">
      <div className="w-full">
        <div className="w-[448px]">
          <div className="w-full space-y-2">
            <h4 className="text-xl font-semibold">Weight and Size Rates</h4>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-56">
                <CustomInput
                  labelText={
                    <div>Enter base weight</div>
                  }
                  rightSideContent={
                    <div className="font-semibold">
                      kg
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
                <DimensionInput labelText={<div>Enter Base Dimension</div>} />
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
        </div>
      </div>
      <div className="w-full">
        <div className="w-[448px]">
          <div className="w-full space-y-2">
            <h4 className="text-xl font-semibold">&nbsp;</h4>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-56">
                <CustomInput
                  labelText={
                    <div>Succeeding Weights</div>
                  }
                  rightSideContent={
                    <div className="font-semibold">
                      kg
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
                <DimensionInput labelText={<div>Succeeding Dimension</div>} />
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
        </div>
      </div>
    </div>
  )
}