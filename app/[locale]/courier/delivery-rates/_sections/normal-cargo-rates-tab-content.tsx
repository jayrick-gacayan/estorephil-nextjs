import CustomInput from "@/app/[locale]/_components/custom-input";

export default function NormalCargoRatesTabContent() {
  return (
    <div className="p-4 rounded bg-white space-y-4">
      <div className="flex justify-evenly items-center gap-2">
        <div className="w-full">
          <CustomInput rightSideContent={
            <div className="font-semibold">
              km
            </div>
          } />
        </div>
        <div className="w-full">
          <CustomInput leftSideContent={
            <div className="font-semibold">
              C&#36;
            </div>
          } />
        </div>
      </div>
    </div>
  )
}