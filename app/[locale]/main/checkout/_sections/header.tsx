export default function Header() {
    return (
        <>
            <div className="flex justify-between items-center py-4 px-[67px] w-full bg-[#f8fbfe]">
                <h1 className="text-[45px]">Check out</h1>
                <a href='/cart' className="text-blue-500 underline">Back to Cart</a>
            </div>
        </>
    )
}