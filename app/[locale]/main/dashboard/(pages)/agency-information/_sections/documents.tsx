'use client';

import { ChangeEvent, useEffect, useMemo } from "react";
import { FiFilePlus } from "react-icons/fi";
import { AgentAgencyInformationState } from "../_redux/agent-agency-information-state";
import { useAppDispatch, useAppSelector } from "@/app/_hooks/redux_hooks";
import { AppDispatch, RootState } from "@/redux/store";
import { fileExtension } from "@/types/helpers/file-helpers";
import {
    agencyInfoDocuments,
    removeAgencyInfoDocument,
    uploadAgencyInfoDocument
} from "../_redux/agent-agency-information-thunk";
import { accountContainer } from "@/inversify/inversify.config";
import { AccountRepository } from "@/repositories/account-repository";
import { TYPES } from "@/inversify/types";
import { useSession } from "next-auth/react";
import { toastAdded } from "@/app/[locale]/_redux/start-slice";
import dynamic from "next/dynamic";
import CirclingLoader from "@/app/[locale]/_components/circling-loader";

const DocumentFile = dynamic(() => import('@/app/[locale]/main/dashboard/(pages)/agency-information/_components/document-file'), {
    loading: () => {
        return (
            <div className="flex-none w-56 h-56 bg-white">
                <div className="transition-all delay-100 hover:bg-tertiary-dark border block border-tertiary-dark h-full w-full rounded cursor-pointer">
                    <div className="flex items-center justify-center">
                        <div className="w-fit">
                            <CirclingLoader height={184} width={184} color='#1186FF' />
                        </div>
                    </div>
                </div>
            </div>
        )
    },
})

export default function Documents() {
    const { data: sessionData } = useSession();
    const agentAgencyInfoState: AgentAgencyInformationState = useAppSelector((state: RootState) => { return state.agentAgencyInfo; })
    const dispatch: AppDispatch = useAppDispatch();

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
            if (file.size > (1024 * 1024 * 5)) {
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
    }

    function removeDocument(id: number) {
        if (sessionData?.token) {
            let accountRepository = accountContainer.get<AccountRepository>(TYPES.AccountRepository);
            dispatch(removeAgencyInfoDocument(accountRepository, id, sessionData.token));
        }
    }

    return (
        <div className="space-y-4 pt-4">
            <h3 className="font-semibold text-[24px]">DOCUMENTS</h3>
            <div className="flex gap-4">
                {
                    documents.map((document: any, index: number) => {

                        let ext = fileExtension(!!document.url ? document.url : '');
                        console.log('ext', document.id)
                        let images = ['jpeg', 'png', 'gif', 'jpg'];
                        let docs = ['doc', 'pdf'];

                        return (images.includes(ext) || docs.includes(ext)) ?
                            (
                                <div key={`agency-document-file-${document.blobId}`}
                                    className="flex-none w-56 h-56 bg-white">
                                    <DocumentFile
                                        document={document} ext={ext}
                                        removeDocument={(id: number) => {
                                            removeDocument(id);
                                        }} />
                                </div>
                            ) : null
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