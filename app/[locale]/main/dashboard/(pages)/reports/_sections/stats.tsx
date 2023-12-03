import Stat from "../_components/stat";

export default function Stats() {
    return (
        <>
            <div className="flex items-center my-4">
                <Stat bgColor="blue" statistic={'5,293'} label="Completed Orders" />
                <Stat bgColor="orange" statistic={'17,323,27'} label="Total Comissions" />
                <Stat bgColor="red" statistic={30} label="Cancelations" />
                <Stat bgColor="yellow" statistic={412} label="Customers" />
            </div>
        </>
    )
}