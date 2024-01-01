"use client";

import DashboardHeaderText from "@/app/[locale]/(dashboard)/_components/dashboard-header-text";
import DashboardHeaderTextButton from "@/app/[locale]/(dashboard)/_components/dashboard-header-text-button";
import { useState } from "react";

export default function SellerHeader() {
  const [isInviteDialogVisible, setIsInviteDialogVisible] = useState(false);
  const openInviteDialog = () => {
    setIsInviteDialogVisible(true);
  };

  const closeInviteDialog = () => {
    setIsInviteDialogVisible(false);
  };
  return (
    <>
      {isInviteDialogVisible && (
        <div className="z-[999] fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="flex flex-col justify-between bg-white h-[20.5rem] rounded-md w-[40rem] items-center p-8 gap-2">
            <div className="flex flex-col items-center gap-5  flex-1 w-[40rem] px-5">
              <h2 className="text-xl font-bold mb-4">Invite Seller</h2>
              <div className="w-full mb-5">
                <label className="block text-sm font-medium text-gray-700">
                  Email:
                </label>
                <input
                  type="text"
                  className="mt-1 p-2 border focus:border-blue-500 focus:outline-none w-full"
                />
              </div>
            </div>
            <div className="gap-3 flex flex-col">
              <button
                onClick={closeInviteDialog}
                className="text-white bg-green-500 px-4 py-2 rounded-md w-[10rem]"
              >
                Invite
              </button>
              <button
                onClick={closeInviteDialog}
                className="text-white bg-red-500 px-4 py-2 rounded-md w-[10rem]"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <DashboardHeaderText text="Courier">
        <DashboardHeaderTextButton
          labelText="Invite Seller"
          onClick={openInviteDialog}
        />
      </DashboardHeaderText>
    </>
  );
}
