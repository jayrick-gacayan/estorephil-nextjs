export default function ExportButton({
    onClick
}: {
    onClick?: () => void
}) {
    return (
        <>
            <button className="bg-primary w-[153px] text-center px-4 py-2 h-[45px] text-white rounded-md" onClick={onClick}>EXPORT</button>
        </>
    )
}