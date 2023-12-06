import CourierHeaderText from "../../_sections/courier-header-text";

export default function BoxesHeader() {
  return (
    <CourierHeaderText text="Box Management">
      <div className="flex-none w-auto">
        <button className="bg-info px-3 py-2 rounded w-fit text-white">
          Set Box Pricing
        </button>
      </div>
    </CourierHeaderText>
  )
}