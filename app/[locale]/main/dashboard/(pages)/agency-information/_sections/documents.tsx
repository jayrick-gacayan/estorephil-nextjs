'use client';

import { useTranslations } from "next-intl"
import { ChangeEvent, useMemo } from "react";
import { FiFilePlus } from "react-icons/fi";
import { AgentAgencyInformationState } from "../_redux/agent-agency-information-state";
import { useAppDispatch, useAppSelector } from "@/app/_hooks/redux_hooks";
import { AppDispatch, RootState } from "@/redux/store";
import { agentInfoDocumentAdded } from "../_redux/agent-agency-information-slice";
import { arrayBufferToStringUint16, stringToArrayBufferUint16 } from "@/types/helpers/file-helpers";
import { FileCustomBlobString } from "@/models/file-custom-blob-string";
import Image from 'next/image';

export default function Documents() {
    const agentAgencyInfoState: AgentAgencyInformationState = useAppSelector((state: RootState) => { return state.agentAgencyInfo; })
    const dispatch: AppDispatch = useAppDispatch();
    const translate = useTranslations();

    const documents = useMemo(() => {
        return agentAgencyInfoState.documents;
    }, [agentAgencyInfoState.documents])

    // const documents = [{
    //     name: "business_license1.docx",
    // }, {
    //     name: "business_license2.docx",
    // }, {
    //     name: "business_license3.docx",
    // },];


    return (
        <div className="space-y-4 pt-4">
            <h3 className="font-semibold text-[24px]">DOCUMENTS</h3>
            <div className="flex gap-4">
                {
                    documents.map((document: FileCustomBlobString, index: number) => {
                        return (
                            <div key={document.blobString}
                                className="flex-none w-56 h-56 bg-white">
                                <div className="transition-all delay-100 hover:bg-tertiary-dark border block border-tertiary-dark h-full w-full rounded cursor-pointer">
                                    <div className="flex h-full w-full items-center justify-center p-2">
                                        <div className="w-full h-full relative">
                                            <Image alt={`${document.fileName}-${index}`}
                                                src={URL.createObjectURL(new Blob([stringToArrayBufferUint16(document.blobString)]))}
                                                fill
                                                className="object-cover" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="flex-none w-56 h-56 bg-white">
                    <label htmlFor='addDocuments'
                        className="transition-all delay-100 hover:bg-tertiary-dark border block border-tertiary-dark h-full w-full rounded cursor-pointer">
                        <div className="flex h-full w-full items-center justify-center p-2">
                            <div className="relative text-success">
                                <FiFilePlus size={96} className='w-auto block m-auto' />
                                <span className="text-[20px] font-semibold text-center block">Add File</span>
                            </div>
                        </div>
                    </label>
                    <input type='file'
                        id="addDocuments"
                        className="hidden"
                        onChange={async (event: ChangeEvent<HTMLInputElement>) => {
                            event.preventDefault();
                            const { files } = event.target;

                            if (!files || files.length === 0) {
                                return;
                            }
                            else {
                                let { name, type } = files[0];

                                dispatch(agentInfoDocumentAdded({
                                    fileName: name,
                                    blobString: arrayBufferToStringUint16(await files[0].arrayBuffer()),
                                    type: type
                                }))
                            }
                        }} />
                </div>
            </div>
        </div>
    )
}