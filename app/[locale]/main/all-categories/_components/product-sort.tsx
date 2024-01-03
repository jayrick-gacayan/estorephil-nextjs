import { RootState, store } from "@/redux/store"
import { useDispatch, useSelector } from "react-redux"
import { sortChanged } from "../_redux/all-categories-slice"
import { searchProducts } from "../_redux/all-categories-thunk"
import { productContainer } from "@/inversify/inversify.config"
import { TYPES } from "@/inversify/types"
import { ProductRepository } from "@/repositories/product-repository"

export default function ProductSort() {
    const value = useSelector((state: RootState) => state.allCategories).sort
    const dispatch = useDispatch()
    const locale = useSelector((state: RootState) => state.main).countryPicker.value
    const productRepository = productContainer.get<ProductRepository>(TYPES.ProductRepository)
    return (
        <>
            <select
                value={value}
                onChange={(e) => {
                    dispatch(sortChanged(e.target.value))
                    store.dispatch(searchProducts(productRepository, locale))
                }}
                className="border-[1.5px] border-gray-200 rounded-sm outline-blue-500 w-full py-2 px-2"
            >
                <option hidden selected={!!value} className="text-gray-400" value=""> Sort by: </option>
                <option value="top-seller"> Top Seller</option>
                <option value="lowest-price">Lowest Price</option>
                <option value="highest-price">Highest Price</option>
            </select>
        </>
    )
}