import Link from 'next-intl/link';

export default function Header() {
    return (
        <div className="flex justify-between items-center py-4 px-[67px] w-full bg-[#f8fbfe]">
            <h1 className="text-[45px]">Check out</h1>
            <Link href='/cart' className="text-primary underline">Back to Cart</Link>
        </div>
    )
}