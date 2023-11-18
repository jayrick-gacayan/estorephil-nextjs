export default function SummaryLabel({ text }: { text: string }) {
    return (
        <>
            <div className="font-medium text-gray-500 text-sm">{text}</div>
        </>
    )
}