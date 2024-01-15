'use client';

import { FaBell, FaCamera, FaShoppingCart, FaUserTie, FaUsers } from "react-icons/fa";
import SidebarLink from "../_components/sidebar-link";
import { useSelectedLayoutSegment } from "next/navigation";
import { FaHeart, FaUsersGear } from "react-icons/fa6";
import { TbReportSearch } from "react-icons/tb";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { ChangeEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/app/_hooks/redux_hooks";
import { AppDispatch, RootState } from "@/redux/store";
import { toastAdded } from "@/app/[locale]/_redux/start-slice";
import { AgentAgencyInformationState } from "../(pages)/agency-information/_redux/agent-agency-information-state";
import Modal from "@/app/[locale]/_components/modal";
import { modalImageChangeOpened, profileImageChanged } from "../(pages)/agency-information/_redux/agent-agency-information-slice";
import { useOutsideClick } from "@/app/_hooks/use-outside-click";
import { RequestStatus } from "@/types/enums/request-status";
import { accountContainer } from "@/inversify/inversify.config";
import { AccountRepository } from "@/repositories/account-repository";
import { TYPES } from "@/inversify/types";
import { updateAgentProfileImage } from "../(pages)/agency-information/_redux/agent-agency-information-thunk";
import LineDotLoader from "@/app/[locale]/_components/line-dot-loader";

export default function SideBar() {
    const inputRefFile = useRef<HTMLInputElement>(null)
    const [previewImage, setPreviewImage] = useState<any>(undefined);

    const modalContentRef = useRef<HTMLDivElement>(null);
    const agentAgencyInfoState: AgentAgencyInformationState = useAppSelector((state: RootState) => {
        return state.agentAgencyInfo;
    })

    const dispatch: AppDispatch = useAppDispatch();
    const segment = useSelectedLayoutSegment();
    const { data: sessionData, update: updateSession } = useSession()
    const companyOwnerName = `${sessionData?.company?.first_name ?? ''} ${sessionData?.company?.last_name ?? ''}`

    let current = useMemo(() => { return segment ?? '' }, [segment]);
    const profileImage = useMemo(() => {
        return agentAgencyInfoState.profileImage;
    }, [agentAgencyInfoState.profileImage]);

    const profileImageStatus = useMemo(() => {
        return agentAgencyInfoState.updateProfileImageRequestStatus;
    }, [agentAgencyInfoState.updateProfileImageRequestStatus]);

    const updateProfileImageStatus = useMemo(() => {
        return profileImageStatus === RequestStatus.WAITING || profileImageStatus === RequestStatus.IN_PROGRESS;
    }, [profileImageStatus])

    const modalChangeImage = useMemo(() => { return agentAgencyInfoState.modalChangeImage }, [agentAgencyInfoState.modalChangeImage]);

    const cbOnModalClose = useCallback(() => {
        if (!updateProfileImageStatus) {
            if (modalContentRef.current) {
                modalContentRef.current.classList.remove('animate-slide-up');
                modalContentRef.current.classList.add('animate-slide-down');
                setTimeout(() => {
                    dispatch(modalImageChangeOpened(false))
                    dispatch(profileImageChanged())
                }, 300);
            }
        }
    }, [dispatch, updateProfileImageStatus]);

    useEffect(() => {
        if (!profileImage) {
            setPreviewImage(undefined);
            return;
        }

        let objectURL = URL.createObjectURL(profileImage);

        setPreviewImage(objectURL);

        return () => { URL.revokeObjectURL(objectURL); }
    }, [profileImage]);



    function onSidebarActiveLink(altText: string, current: string) {
        return altText === current ? 'text-primary hover:underline' : 'hover:text-primary hover:underline';
    }

    function agentProfileUpload(event: any) {
        let { files } = event.target;
        console.log('files', files)

        if (files && files[0]) {
            let message = '';
            let type = '';
            let file: File = files[0];
            if (!file.type.includes('image')) {
                type = 'danger';
                message = 'File must be an image.';
                if (!profileImage) { event.target.value = null; }
            }
            else {
                if (file.size > (1024 * 1024 * 2)) {
                    type = 'danger';
                    message = 'File image must be at least 2mb.';
                    if (!profileImage) { event.target.value = null; }
                }
                else {
                    dispatch(modalImageChangeOpened(true))
                    dispatch(profileImageChanged(file))
                }

            }

            if (message !== '' && type !== '') {

                dispatch(toastAdded({
                    id: Date.now(),
                    duration: 1,
                    position: '',
                    type: type,
                    message: message
                }))
            }
        }
    }

    return current === 'orders' ? null :
        (
            <div className="border-r border-r-tertiary-dark relative">
                <div className="p-8 w-[416px] space-y-4">
                    <div className="space-y-4">
                        <div className="relative h-[180px] w-[180px] m-auto block">
                            <Image alt='profile-image'
                                src={sessionData?.user?.profile_image_url ?? `https://estorephilbucketv1.s3.us-west-2.amazonaws.com/assets/images/profile_image_default.jpg`}
                                height={180}
                                width={180}
                                className="h-full w-full rounded-full m-auto block"
                            />
                            {
                                current === 'agency-information' &&
                                (
                                    <label className="bg-primary border border-white rounded-full absolute bottom-0 text-white -right-2 cursor-pointer z-10 p-4">
                                        <FaCamera size={32} />
                                        <input type="file"
                                            ref={inputRefFile}
                                            className="hidden"
                                            onChange={agentProfileUpload} />
                                    </label>
                                )
                            }
                        </div>
                        <div className="text-center">
                            <h1>{sessionData?.company?.company_name}</h1>
                            <p>{companyOwnerName}</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <SidebarLink link='/dashboard/agency-information'
                            altText='agency-information'
                            icon={<FaUserTie size={24} />}
                            text='AGENCY INFORMATION'
                            current={current}
                            onActiveLink={onSidebarActiveLink} />
                        <SidebarLink link='/dashboard/staffs'
                            altText='staffs'
                            icon={<FaUsersGear size={24} />}
                            text='STAFFS'
                            current={current}
                            onActiveLink={onSidebarActiveLink} />
                        <SidebarLink link='/dashboard/orders'
                            altText='orders'
                            icon={<FaShoppingCart size={24} />}
                            text='ORDERS'
                            current={current}
                            onActiveLink={onSidebarActiveLink} />
                        {/* <SidebarLink link='/dashboard/notifications'
                            altText='notifications'
                            icon={<FaBell size={24} />}
                            text='NOTIFICATIONS'
                            current={current}
                            onActiveLink={(altText: string, current: string) => {
                                return altText === current ? 'text-primary hover:underline' : 'hover:text-primary hover:underline';
                            }} />
                        <SidebarLink link='/dashboard/reports'
                            altText='reports'
                            icon={<TbReportSearch size={24} />}
                            text='REPORTS'
                            current={current}
                            onActiveLink={(altText: string, current: string) => {
                                return altText === current ? 'text-primary hover:underline' : 'hover:text-primary hover:underline';
                            }} /> */}
                        <SidebarLink link='/dashboard/favorites'
                            altText='favorites'
                            icon={<FaHeart size={24} />}
                            text='FAVORITES'
                            current={current}
                            onActiveLink={onSidebarActiveLink} />
                    </div>
                </div>

                <Modal open={modalChangeImage}>
                    <div ref={modalContentRef}
                        className={`animate-slide-up translate-y-full flex-none w-auto rounded-2xl bg-white text-center relative z-10 px-8`}>
                        <div className="py-8 space-y-3 w-[512px] m-auto">
                            <h1 className="text-center font-semibold text-[24px]">Upload Profile</h1>
                            {
                                (profileImage && previewImage) &&
                                (
                                    <Image src={previewImage} alt={"preview-image"}
                                        width={192}
                                        height={192}
                                        className="w-48 h-48 m-auto rounded block" />
                                )
                            }
                            <div className="flex items-center justify-center gap-4">
                                <button disabled={updateProfileImageStatus}
                                    onClick={() => {
                                        if (sessionData?.token) {
                                            let accountRepository = accountContainer.get<AccountRepository>(TYPES.AccountRepository);
                                            dispatch(updateAgentProfileImage(
                                                accountRepository,
                                                sessionData.token,
                                                updateSession,
                                                sessionData
                                            ));
                                        }
                                    }}
                                    className="rounded border border-transparent bg-primary p-2 text-white">
                                    {
                                        !(updateProfileImageStatus) ? 'Upload Image' :
                                            (
                                                <div className='w-fit m-auto block space-x-0.5'>
                                                    <span className='inline-block align-middle'>
                                                        <LineDotLoader height={24} width={48} color={'#fff'} />
                                                    </span>
                                                    <span className='inline-block'>Processing</span>
                                                </div>
                                            )
                                    }
                                </button>
                                <button disabled={updateProfileImageStatus}
                                    className="rounded border border-primary p-2 text-primary"
                                    onClick={() => {
                                        if (inputRefFile.current) {
                                            inputRefFile.current.click();
                                        }
                                    }}>Change</button>
                                <button disabled={updateProfileImageStatus}
                                    className="rounded border border-transparent bg-danger p-2 text-white"
                                    onClick={() => { cbOnModalClose(); }}>Cancel</button>
                            </div>
                        </div>

                    </div>
                </Modal>
            </div>
        )
}
