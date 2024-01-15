import Form from "./_sections/form";
import Providers from "./_sections/providers";

export default function Page() {
    return (
        <Providers>
            <div className="bg-[#f5f7fa] h-screen flex justify-center items-start pt-16">
                <Form />
            </div>
        </Providers>
    )
}