import DistanceRates from "./distance-rates";
import TransportationRates from "./transportation-rates";
import WeightSizeRates from "./weight-size-rates";

export default function NormalCargoRatesTabContent() {
  return (
    <div className="p-4 rounded bg-white space-y-4">
      <div className="flex justify-evenly items-center gap-2">
        <div className="w-full">
          <div className="w-[448px]">
            <DistanceRates />
          </div>
        </div>
        <div className="w-full">
          <div className="w-[448x]">
            <TransportationRates />
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center gap-2">
        <div className="w-full">
          <div className="w-[448px]">
            <div className="w-full space-y-2">
              <h4 className="text-xl font-semibold">City Rates</h4>
            </div>
          </div>
        </div>

      </div>
      <WeightSizeRates />
      <div className="w-72">
        <button className="w-full p-2 rounded bg-info text-white">
          Update Rates
        </button>
      </div>
    </div>
  )
}