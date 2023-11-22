export default function Stat({
    label,
    statistic,
    bgColor,
}: {
    label: string,
    statistic: string | number,
    bgColor: 'blue' | 'red' | 'green' | 'yellow' | 'orange'
}) {
    return (
        <>
            <div className={`flex flex-col items-center justify-evenly bg-${bgColor}-500 w-[266px] h-auto py-6 text-white text-center rounded-md mx-4`}>
                <div className="text-[20px] font-bold">
                    {statistic}
                </div>
                <div className="text-[16px] font-bold">
                    {label}
                </div>
            </div>
        </>
    )
}