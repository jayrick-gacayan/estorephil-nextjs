export default function Label({ label, value }: { label: string, value: string }) {
    return (
        <>
            <div className="flex items-center w-full">
                <div className="basis-[15%]">
                    <label className="block">{`${label}:`}</label>
                </div>
                <div className="font-bold">
                    {value}
                </div>
            </div>
        </>
    )
}