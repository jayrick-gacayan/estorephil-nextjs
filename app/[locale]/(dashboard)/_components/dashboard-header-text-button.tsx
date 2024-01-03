export default function DashboardHeaderTextButton({
  labelText,
  onClick,
  bgColor = "bg-info hover:bg-info-dark",
}: {
  labelText: string;
  onClick: () => void;
  bgColor?: string;
}) {
  return (
    <div className="flex-none w-auto">
      <button
        className={`${bgColor} px-4 py-1.5 rounded w-fit text-white `}
        onClick={onClick}>
        {labelText}
      </button>
    </div>
  );
}
