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
                <td><img src={imageUrl} height={40} width={40} /></td>
                <td>{name}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{total}</td>
            </tr>
        </>
    )
}