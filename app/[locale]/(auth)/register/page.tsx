import Content from "./_sections/content";
import Header from "./_sections/header";

export default function Page() {

    return (
        <>
            <div className="w-[full] h-[10vh] flex justify-center bg-white p-4 shadow-sm">
                <Header />
            </div>
            <div className="bg-[#e9f1fa] h-[90vh] flex flex-col items-center justify-center">
                <Content />
            </div>
        </>
    )
}