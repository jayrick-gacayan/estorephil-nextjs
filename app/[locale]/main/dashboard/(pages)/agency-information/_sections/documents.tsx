'use client';

import { useTranslations } from "next-intl"
import { ChangeEvent, useEffect, useMemo } from "react";
import { FiFilePlus } from "react-icons/fi";
import { AgentAgencyInformationState } from "../_redux/agent-agency-information-state";
import { useAppDispatch, useAppSelector } from "@/app/_hooks/redux_hooks";
import { AppDispatch, RootState } from "@/redux/store";
import { agentInfoDocumentAdded } from "../_redux/agent-agency-information-slice";
import { arrayBufferToStringUint16, stringToArrayBufferUint16 } from "@/types/helpers/file-helpers";
import { FileCustomBlobString } from "@/models/file-custom-blob-string";
import Image from 'next/image';
import { agencyInfoDocuments, uploadAgencyInfoDocument } from "../_redux/agent-agency-information-thunk";
import { accountContainer } from "@/inversify/inversify.config";
import { AccountRepository } from "@/repositories/account-repository";
import { TYPES } from "@/inversify/types";
import { useSession } from "next-auth/react";
import { toastAdded } from "@/app/[locale]/_redux/start-slice";

export default function Documents() {
    const { data: sessionData } = useSession();
    const agentAgencyInfoState: AgentAgencyInformationState = useAppSelector((state: RootState) => { return state.agentAgencyInfo; })
    const dispatch: AppDispatch = useAppDispatch();
    const translate = useTranslations();

    const documents = useMemo(() => {
        return agentAgencyInfoState.documents;
    }, [agentAgencyInfoState.documents]);

    useEffect(() => {
        let accountRepository = accountContainer.get<AccountRepository>(TYPES.AccountRepository);
        if (sessionData?.token) { dispatch(agencyInfoDocuments(accountRepository, sessionData.token)); }
    }, [sessionData?.token])


    function uploadDocument(event: ChangeEvent<HTMLInputElement>) {
        const { files } = event.target;

        if (files && files[0]) {
            let file = files[0];
            if (file.size > (1024 * 1024 * 2)) {
                dispatch(toastAdded({
                    id: Date.now(),
                    duration: 1,
                    position: '',
                    type: 'danger',
                    message: 'File image must be at least 5mb.'
                }))
            }
            else {
                if (sessionData?.token) {
                    let accountRepository = accountContainer.get<AccountRepository>(TYPES.AccountRepository);
                    dispatch(uploadAgencyInfoDocument(accountRepository, file, sessionData.token));
                }
            }
        }
        else {



        }
    }

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
                    <label
                        className="transition-all delay-100 hover:bg-tertiary-dark border block border-tertiary-dark h-full w-full rounded cursor-pointer">
                        <div className="flex h-full w-full items-center justify-center p-2">
                            <div className="relative text-success">
                                <FiFilePlus size={96} className='w-auto block m-auto' />
                                <span className="text-[20px] font-semibold text-center block">Add File</span>
                            </div>
                        </div>
                        <input type='file' className="hidden" onChange={uploadDocument} />
                    </label>

                </div>
            </div>
        </div>
    )
}