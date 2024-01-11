import { useDispatch, useSelector } from "react-redux";
import { unselectProduct, selectProduct, itemQuantityChanged } from "../_redux/cart-slice";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";

export default function Product({ product }: { product: any }) {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.cart)
    const [quantity, setQuantity] = useState(product.quantity);
    const handleCheckboxChange = () => {
        if (isSelected()) {
            dispatch(unselectProduct(product.id));
        } else {
            dispatch(selectProduct(product));
        }
    };
    const isSelected = () => {
        return state.itemsSelected.some((selectedItem) => selectedItem.id === product.id);
    }
    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = parseInt(event.target.value, 10);
        setQuantity(newQuantity);
        dispatch(itemQuantityChanged({ isSelected: isSelected(), payload: { id: product.id, quantity: newQuantity } }));
    };
    useEffect(() => {
        console.log('items selected:', state.itemsSelected)
    }, [state.itemsSelected, state.cartCheckout])
    return (
        <tr className=" text-left">
            <th className="w-[60px] p-4">
                <input type="checkbox" className="accent-blue-500" checked={isSelected()} onChange={handleCheckboxChange} />
            </th>
            <th className="w-[150px] p-4"><img alt={`${product.name}`} src={`${product.image ?? `https://www.odnetwork.org/global_graphics/default-store-350x350.jpg`}`} width={50} height={50} /></th>
            <th className="w-auto p-4">{product.name}</th>
            <th className="w-[200px] p-4">{product.price}</th>
            <th className="w-[200px] p-4">
                <input
                    value={quantity}
                    onChange={handleQuantityChange}
                    type='number'
                    min={1}
                    className="border border-sky-400 outline-sky-400 p-2 text-center w-16 rounded-md"
                /></th>
            <th className="w-[140px] p-4">{product.quantity * product.price}</th>
        </tr>
    )
}