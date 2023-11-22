import HeaderFilter from "./_sections/header-filter";
import NotificationList from "./_sections/notifications-list";

export default function Page() {
    return (
        <div className="bg-[#f7f9fc] w-full px-[40px] py-[30px]">
            <HeaderFilter />
            <NotificationList />
        </div>
    )
}