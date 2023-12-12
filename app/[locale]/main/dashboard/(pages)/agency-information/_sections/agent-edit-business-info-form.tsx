'use client';

import GoogleLikeInputField from "@/app/[locale]/_components/google-like-input-field";
import { ChangeEvent } from "react";

export default function AgentEditBusinessInfoForm() {
  return (
    <>
      <div className="border-b border-secondary-light pb-2">
        <h3 className='text-[32px] leading-0 text-center'>Edit Basic Information</h3>
      </div>
      <div className="flex items-stretch gap-4">

        <div className="flex-1 space-y-4">
          <GoogleLikeInputField labelText='Email'
            inputProps={{
              id: 'email',
              type: 'email',
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                return;
              }
            }} />
          <GoogleLikeInputField labelText='First Name'
            inputProps={{
              id: 'firstName',
              type: 'text',
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                return;
              }
            }} />
          <GoogleLikeInputField labelText='Last Name'
            inputProps={{
              id: 'lastName',
              type: 'text',
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                return;
              }
            }} />
          <GoogleLikeInputField labelText='Phone Number'
            inputProps={{
              id: 'phoneNumber',
              type: 'text',
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                return;
              }
            }} />
          <GoogleLikeInputField labelText='Address'
            inputProps={{
              id: 'address',
              type: 'text',
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                return;
              }
            }} />
        </div>
      </div>
    </>
  )
}