import Image from "next/image";
import Product from "./product";
import { selectAllStoreProducts, unselectAllStoreProducts } from "../_redux/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useCallback, useState } from "react";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

export default function Store({ store }: { store: any }) {
    const [isCollapse, setIsCollapse] = useState<boolean>(true);
    const storeDetails = store?.details
    const storeProducts = store?.products
    const state = useSelector((state: RootState) => state.cart)
    const dispatch = useDispatch();

    const isStoreSelected = () => {
        const selectedProductsInStore = state.itemsSelected.filter((item) => item.store_id === storeDetails.id);
        return selectedProductsInStore.length === storeProducts.length;
    };

    const handleSelectAllStoreProducts = () => {
        const newItemsSelected = state.itemsSelected.map((item) => ({ ...item }));
        storeProducts.forEach((product: any) => {
            const existingProduct = newItemsSelected.find((item) => item.id === product.id);
            if (!existingProduct) {
                newItemsSelected.push({ ...product });
            }
        });
        dispatch(selectAllStoreProducts(newItemsSelected));
    };

    const handleUnselectAllStoreProducts = () => {
        dispatch(unselectAllStoreProducts(storeDetails.id));
    };

    console.log('on cart page cart items selected', state.itemsSelected)

    return (
        <div className="border shadow-md mb-8">
            <div className="bg-[#f8f5e5] flex items-center justify-between px-2 py-4 gap-4">
                <div className="flex items-center gap-4 flex-1">
                    <div className="px-2">
                        <input
                            type="checkbox"
                            className="accent-blue-500"
                            checked={isStoreSelected()}
                            onChange={() => (isStoreSelected() ? handleUnselectAllStoreProducts() : handleSelectAllStoreProducts())}
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <Image src={`${storeDetails.main_image ?? `/sellers/asianhome.png`}`} alt={`image-${storeDetails.id}`} width={35} height={35} />
                        <h1 className="text-slate-800">{storeDetails.business_name}</h1>
                    </div>
                </div>
                <div>

                    <div>
                        <CiCircleMinus className={`transition-all duration-100 w-5 h-5 text-[#857114] stroke-1 ${isCollapse ? 'block' : 'hidden'}`}
                            onClick={() => { setIsCollapse(false) }} />
                        <CiCirclePlus className={`transition-all duration-100 w-5 h-5 text-[#857114] stroke-1 ${isCollapse ? 'hidden' : 'block'}`}
                            onClick={() => { setIsCollapse(true) }} />
                    </div>
                </div>
            </div>
            <div className={`bg-white ${isCollapse ? 'block' : 'hidden'}`}>
                <table className="border-collapse w-full">
                    <thead>
                        <tr className="text-gray-400 text-sm font-light text-left">
                            <th className="w-[60px] p-4"></th>
                            <th className="w-[150px] p-4">Image</th>
                            <th className="w-auto p-4">Product Name</th>
                            <th className="w-[200px] p-4">Price</th>
                            <th className="w-[200px] p-4">Quantity</th>
                            <th className="w-[140px] p-4">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {storeProducts.map((product: any, index: any) =>
                            <>
                                <Product product={{
                                    ...product, store: {
                                        id: storeDetails.id,
                                        name: storeDetails.business_name,
                                        image: storeDetails.main_image
                                    }
                                }} />
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}