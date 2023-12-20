import LoginForm from "./_sections/login-form";

export default function Page() {
    return (
        <div className="bg-tertiary-light h-screen w-screen p-8">
            <div className="max-w-screen-2xl m-auto h-full ">
                <div className="flex items-start justify-center h-full">
                    <LoginForm />
                </div>
            </div>

        </div>
    )
}