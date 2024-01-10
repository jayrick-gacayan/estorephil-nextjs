import Image from "next/image";

export default function Product({ product }: { product: any }) {
    console.log('product', product)
    return (
        <tr className=" text-left">
            <th className="w-[60px] p-4">
                <input type="checkbox" />
            </th>
            <th className="w-[150px] p-4"><img alt={`${product.name}`} src={`${product.image ??  `https://www.odnetwork.org/global_graphics/default-store-350x350.jpg`}`} width={50} height={50} /></th>
            <th className="w-auto p-4">{product.name}</th>
            <th className="w-[200px] p-4">{product.price}</th>
            <th className="w-[200px] p-4">{product.quantity}</th>
            <th className="w-[140px] p-4">{product.quantity * product.price}</th>
        </tr>
    )
}