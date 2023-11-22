import Image from "next/image";
import CartItem from "../_components/cart-item";

export default function CartDetails() {
    const productOrders = [
        {
            imageUrl: "https://example.com/product1.jpg",
            name: "Product 1",
            price: 20.99,
            quantity: 3,
            total: 62.97
        },
        {
            imageUrl: "https://example.com/product2.jpg",
            name: "Product 2",
            price: 15.49,
            quantity: 2,
            total: 30.98
        },
        {
            imageUrl: "https://example.com/product3.jpg",
            name: "Product 3",
            price: 30.00,
            quantity: 1,
            total: 30.00
        },
        {
            imageUrl: "https://example.com/product4.jpg",
            name: "Product 4",
            price: 25.99,
            quantity: 4,
            total: 103.96
        },
        {
            imageUrl: "https://example.com/product5.jpg",
            name: "Product 5",
            price: 10.00,
            quantity: 5,
            total: 50.00
        }
    ];
    return (
        <>
            <div className="border-[2px] border-gray-400 w-full">
                <div className="h-[77px] bg-[#DFD08838] p-4 flex items-center justify-start gap-4">
                    <div>
                        <Image alt='' height={50} width={50} src='https://scontent.fceb2-2.fna.fbcdn.net/v/t39.30808-6/327298283_1387173895443168_6574742268092633565_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=IB5SrZw3ztcAX9Kj0dP&_nc_ht=scontent.fceb2-2.fna&oh=00_AfB7yjGbOh98JB8Wdxzmbp2IgTJ601oh2ieUibWNGLZPfA&oe=6558D918' />
                    </div>
                    <div className="text-[20px] font-[500] text-[#041D60]">
                        Scent Store
                    </div>
                </div>
                <div className="flex justify-items-start w-full bg-white">
                    {/* <div className="grow">
                        Image
                    </div>
                    <div className="grow">Product Name</div>
                    <div className="grow">Price</div>
                    <div className="grow">Quantity</div>
                    <div className="grow">Total</div> */}
                    <table className="table-auto w-full">
                        <thead className="">
                            <tr>
                                <th className="text-left">Image</th>
                                <th className="text-left">Product Name</th>
                                <th className="text-left">Price</th>
                                <th className="text-left">Quantity</th>
                                <th className="text-left">Total</th>
                            </tr>
                        </thead>
                        <tbody className="">
                            {productOrders.map((order, index) =>
                                <CartItem key={index} imageUrl={order.imageUrl} name={order.name} price={order.price} quantity={order.quantity} total={order.total} />
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}