import Image from "next/image";

export default function CartItem({
    imageUrl,
    name,
    price,
    quantity,
    total,
}: {
    imageUrl: string,
    name: string,
    price: number,
    quantity: number,
    total: number,
}) {
    return (
        <>
            <tr className="border-b-[1.5px] border-gray-300">
                <td><Image src={imageUrl} height={40} width={40} alt='' /></td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{total}</td>
            </tr>
        </>
    )
}