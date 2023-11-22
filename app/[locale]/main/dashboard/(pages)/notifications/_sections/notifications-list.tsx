'use client'

import { RootState } from "@/redux/store"
import { useSelector } from "react-redux"
import Notification from "../_components/notification"

export default function NotificationList() {
    const state = useSelector((state: RootState) => state.notification)
    return (
        <>
            <div className="w-full h-full">
                {
                    state.notifications.map((notification, index) =>
                        <>
                            <Notification
                                orderNumber={notification.orderNumber}
                                dateModified={notification.dateModified}
                                description={notification.description}
                                index={index}
                                status={notification.status}
                                key={index}
                            />
                        </>

                    )
                }
            </div>
        </>
    )
}