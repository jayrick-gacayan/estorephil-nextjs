import CustomInput from "@/app/[locale]/_components/custom-input";
import DimensionInput from "@/app/[locale]/_components/dimension-input";

export default function TransportationRates() {
  return (
    <div className="w-full space-y-2">
      <h4 className="text-xl font-semibold">Transportation Rates</h4>
      <div className="flex items-center gap-2 text-sm">
        <div className="w-56">
          <CustomInput
            labelText={
              <div>Vessel</div>
            }
            leftSideContent={
              <div className="font-semibold">
                C&#36;
              </div>
            } />
        </div>
        <div className="w-56">
          <DimensionInput labelText={<div>Max Dimension</div>} />
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <div className="w-56">
          <CustomInput
            labelText={
              <div>Air</div>
            }
            leftSideContent={
              <div className="font-semibold">
                C&#36;
              </div>
            } />
        </div>
        <div className="w-56">
          <CustomInput
            labelText={
              <div>Max Weight</div>
            }
            rightSideContent={
              <div className="font-semibold">
                kg
              </div>
            } />
        </div>
      </div>
    </div>
  )
}