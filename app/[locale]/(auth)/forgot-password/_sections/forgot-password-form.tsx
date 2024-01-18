'use client'

import InputCustom from "@/app/[locale]/_components/input-custom"
import { ValidationType } from "@/types/enums/validation-type"
import { ChangeEvent } from "react"
import { FaEnvelope } from "react-icons/fa6"

function divClassName(status: ValidationType) {
  return `border divide-x rounded overflow-hidden w-full flex items-center gap-2
        ${status !== ValidationType.NONE && status !== ValidationType.VALID ? 'text-danger divide-danger has-[input:focus]:border-danger border-danger' :
      status === ValidationType.VALID ? 'text-success border-success divide-success has-[input:focus]:border-success' :
        'border-tertiary-dark divide-tertiary-dark has-[input:focus]:border-primary has-[input:focus]:divide-primary'
    }`
}

export default function ForgotPasswordForm() {
  return (
    <div className="bg-white shadow-md w-[448px] rounded overflow-hidden m-auto block text-center">
      <div className=" bg-[#3a3f51] w-full p-4">
        <h1 className="text-[30px] text-white">Forgot Password</h1>
      </div>
      <div className="p-4 space-y-4">
        <p className="text-sm">Please enter the email and click submit to receive reset password token.</p>
        <InputCustom errorText=''
          divClassName={divClassName(ValidationType.NONE)}
          rightSideContent={<div className='p-2'><FaEnvelope className='inline-block' /></div>}
          inputProps={{
            id: 'email-login-id',
            value: '',
            className: 'p-2',
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              return
            },
            placeholder: 'Enter email address',
          }} />
        <button className="w-full bg-success-dark text-white py-2 rounded hover:bg-success"
          onClick={() => {


          }}>
          Submit
        </button>
      </div>
    </div>
  )
}