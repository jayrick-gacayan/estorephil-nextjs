'use client'
import { useTranslations } from "next-intl"

export default function Documents() {
    const translate = useTranslations()
    const documents = [{
        name: "business_license1.docx",
    }, {
        name: "business_license2.docx",
    }, {
        name: "business_license3.docx",
    },]
    return (
        <>
            <div className="w-full">
                <div className="flex items-center justify-between w-full">
                    <h1 className="text-[20px] font-bold">{translate("documents")}</h1>
                </div >
                <div className="w-full flex items-center">
                    <div className="py-[25px] w-full grow basis-1/5">
                        <button className="py-2 px-4 border-2 rounded-md border-blue-500 bg-[#DFEFFF] text-[#1E419B]">
                            {translate("uploadFile")}
                        </button>
                    </div>
                    <div className="w-full flex grow items-center justify-center">
                        {
                            documents.map((document, index) =>
                                <div className="px-4" key={index}>
                                    <button className="underline cursor-pointer text-primary">
                                        {document.name}
                                    </button>
                                </div>
                            )}
                    </div>
                </div>

            </div >
        </>
    )
}