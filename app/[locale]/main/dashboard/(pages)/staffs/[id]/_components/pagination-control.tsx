
'use client'

import { RootState, store } from "@/redux/store";

import { MdNavigateNext as Next, MdNavigateBefore as Previous } from 'react-icons/md'
import { useSelector, useDispatch } from "react-redux";
import { nextPage, pageNumberPressed, previousPage } from "../_redux/staff-details-slice";


export default function PaginationControl({ page }: { page: number }) {
    const state = useSelector((state: RootState) => state.order)
    const dispatch = useDispatch()
    // const itemRepository = itemContainer.get<ItemRepository>(TYPES.ItemRepository);
    const totalPages = state.pagination?.totalPages
    const maxVisiblePages = 5;
    let currentPage = page
    let currentPageSet = []
    if (!!totalPages) {
        if (totalPages <= maxVisiblePages) {
            currentPageSet = Array.from({ length: totalPages }, (_, i) => i + 1);
        } else {
            if (currentPage <= maxVisiblePages - 2) {
                currentPageSet = Array.from({ length: maxVisiblePages - 1 }, (_, i) => i + 1);
            } else if (currentPage >= totalPages - 3) {
                currentPageSet = Array.from({ length: maxVisiblePages - 1 }, (_, i) => totalPages - maxVisiblePages + i + 1);
            } else {
                currentPageSet = Array.from({ length: maxVisiblePages - 2 }, (_, i) => currentPage - 1 + i);
            }
        }
    }
    else {
        currentPageSet = [0]
    }
    return (
        <div className="flex justify-center gap-4">
            {
                !!currentPageSet && (
                    <>
                        <div className="mt-[4px]">
                            <button onClick={() => {
                                dispatch(previousPage())
                                // store.dispatch(getItems(itemRepository))
                            }}
                                className={``}
                                disabled={currentPage === 1}
                            >
                                <Previous className={`${currentPage === 1 ? `hidden` : `hover:fill-blue-500 hover:transition-all hover:ease-in-out hover:duration-300`} `} />
                            </button>
                        </div>
                        <div className="flex gap-2">
                            {

                                currentPageSet?.map((page) => (
                                    page !== null && !isNaN(page) && (
                                        <button
                                            key={page}
                                            className={`${state.pagination?.currentPage === page ? `text-blue-500` : `black`} font-semibold`}
                                            disabled={state.pagination?.currentPage === page}
                                            onClick={() => {
                                                dispatch(pageNumberPressed(page))
                                                // store.dispatch(getItems(itemRepository))
                                            }}
                                        >
                                            {page}
                                        </button>
                                    )
                                ))
                            }
                        </div>
                        <div className="mt-[4px]">
                            <button onClick={() => {
                                dispatch(nextPage())
                                // store.dispatch(getItems(itemRepository))
                            }}
                                disabled={currentPage === totalPages}
                            >
                                <Next className={`${currentPage === totalPages ? `hidden` : `hover:fill-blue-500 hover:transition-all hover:ease-in-out hover:duration-300`} `} />
                            </button>
                        </div>
                    </>
                )
            }
        </div>
    )
}