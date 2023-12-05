'use client'
import { useTranslations } from "next-intl"
import { FaLock } from "react-icons/fa"

export default function Form() {
    const translate = useTranslations()
    return (
        <>
            <div className="bg-white rounded-md w-[760px] shadow-sm">
                <div className="bg-[#3a3f51] rounded-sm p-4 text-white flex items-center justify-center text-[25px]">{translate("agent")}</div>
                <div className="flex flex-col items-center justify-center px-8 py-2">
                    <div className="mb-8 text-center"><p>{translate("youHaveReceivedanEmailThatContainsTheVerificationTokenNeededToVerifyYourAccountIfYouHaven'tReceivedItPress")} <a className="text-primary hover:underline hover:cursor-pointer">{translate("here")}</a></p></div>

                    <div className="w-full my-2 flex items-center relative">
                        <input className={`py-[4px] px-[2px] border-[1.5px] border-gray-200 rounded-sm outline-blue-500 w-full `}
                            placeholder={translate("enterVerificationToken")}
                            type="text"
                        />
                        <div className={`absolute right-2`}>
                            <FaLock color="gray" />
                        </div>
                    </div>
                </div>
                <div className="px-8 mb-2 flex flex-col gap-2">
                    <div className="my-2">
                        <button className="w-full bg-primary rounded-sm text-white py-2">
                            {translate("submit")}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}