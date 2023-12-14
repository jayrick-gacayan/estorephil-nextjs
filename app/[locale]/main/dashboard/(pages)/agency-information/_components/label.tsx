export default function Label({ label, value }: { label: string, value: string }) {
    return (
        <div className="flex items-center w-full gap-8">
            <div className="basis-1/5 text-right">
                <label className="block">{`${label}:`}</label>
            </div>
            <div className="font-bold">
                {value}
            </div>
        </div>
    )
}