'use client'
export default function Header() {
    console.log('-------')
    return (
        <>
            <div className="flex items-center justify-between w-[80%] h-full">
                <div>
                    <div className="text-[25px] font-bold text-primary-dark">eStorePh</div>
                </div>
                <div className="flex items-center justify-around gap-4">
                    <a href="#" className="text-gray-400 hover:text-primary">Become a Seller</a>
                    <a href="#" className="text-gray-400 hover:text-primary">Become a Courier</a>
                    <a href="#" className="text-gray-400 hover:text-primary">Sign in as Agent</a>
                </div>
            </div>
        </>
    )
}