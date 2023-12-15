export default function Label({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex items-center w-full gap-8">
            <div className="text-right basis-[18%]">
                <label className="block">{`${label}:`}</label>
            </div>
            <div className="font-bold">
                {value}
            </div>
        </div>
    )
}