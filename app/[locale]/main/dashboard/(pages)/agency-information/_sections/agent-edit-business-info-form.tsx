'use client';

import GoogleLikeInputField from '@/app/[locale]/_components/google-like-input-field';
import { ChangeEvent } from 'react';

export default function AgentEditBusinessInfoForm() {
  return (
    <>
      <div className='border-b border-secondary-light py-2'>
        <h3 className='text-[32px] leading-0 text-center'>Edit Business Information</h3>
      </div>
      <div className='space-y-4 py-4 text-left'>
        <GoogleLikeInputField labelText='Company Name'
          inputProps={{
            id: 'companyName',
            type: 'text',
            value: '',
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              return;
            }
          }} />
        <GoogleLikeInputField labelText='Business Nature'
          inputProps={{
            id: 'businessNature',
            type: 'text',
            value: '',
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              return;
            }
          }} />
        <div className='space-y-4'>
          <div className='font-semibold'>Owner</div>
          <div className='flex items-center gap-4'>
            <GoogleLikeInputField labelText='Firstname'
              inputProps={{
                id: 'ownerFirstname',
                type: 'text',
                value: '',
                onChange: (event: ChangeEvent<HTMLInputElement>) => {
                  return;
                }
              }} />
            <GoogleLikeInputField labelText='Lastname'
              inputProps={{
                id: 'ownerLastname',
                type: 'text',
                value: '',
                onChange: (event: ChangeEvent<HTMLInputElement>) => {
                  return;
                }
              }} />
          </div>
        </div>
        <div className='space-y-4'>
          <div className='font-semibold'>Contact Information</div>
          <GoogleLikeInputField labelText='Contact Number'
            inputProps={{
              id: 'ownerContactNumber',
              type: 'text',
              value: '',
              onChange: (event: ChangeEvent<HTMLInputElement>) => {
                return;
              }
            }} />
        </div>
        <GoogleLikeInputField labelText='Company Address'
          inputProps={{
            id: 'companyAddress',
            type: 'text',
            value: '',
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              return;
            }
          }} />
      </div>
    </>
  )
}