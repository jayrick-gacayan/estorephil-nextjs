export default function DashboardHeaderTextButton({
  labelText,
  onClick
}: {
  labelText: string;
  onClick: () => void;
}) {
  return (
    <div className='flex-none w-auto'>
      <button className='bg-info hover:bg-info-dark px-4 py-1.5 rounded w-fit text-white'
        onClick={onClick}>
        {labelText}
      </button>
    </div>
  )
}