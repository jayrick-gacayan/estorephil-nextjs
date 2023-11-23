import Content from "./_sections/content";
import Header from "./_sections/header";

export default function Page() {

    return (
        <>
            <div className="w-[full] flex justify-center bg-white p-4 shadow-sm">
                <Header />
            </div>
            <div className="bg-[#456d970d] h-[90vh] flex flex-col items-center justify-center">
                <Content />
            </div>
        </>
    )
}