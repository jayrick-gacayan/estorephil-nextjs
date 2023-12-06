import CourierHeaderText from "../../_sections/courier-header-text";

export default function StaffHeader() {
  return (
    <CourierHeaderText text="Staff Management">
      <div className="flex-none w-auto">
        <button className="bg-info px-3 py-2 rounded w-fit text-white">
          Invite Courier Staff
        </button>
      </div>
    </CourierHeaderText>
  )
}