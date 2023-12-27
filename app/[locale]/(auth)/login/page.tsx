import { headers } from "next/headers";
import LoginForm from "./_sections/login-form";

export default function Page() {
    let header = headers();

    let role = header.get('host')?.split('.')[0] ?? 'agent'

    console.log('headers ', header.get('host'));



    return (
        <div className="bg-tertiary-light h-screen w-screen p-8">
            <div className="max-w-screen-2xl m-auto h-full ">
                <div className="flex items-start justify-center h-full">
                    <LoginForm role={role} />
                </div>
            </div>

        </div>
    )
}