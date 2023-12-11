import { ChangeEvent, ComponentProps } from "react";

export default function CourierGoogleLikeInputField({
  labelText,
  inputProps,
}: {
  labelText: string;
  inputProps: ComponentProps<'input'>
}) {
  return (
    <div className="bg-white w-full">
      <div className="relative bg-inherit">
        <input {...inputProps}
          className="peer p-2 w-full text-[#707070] px-2 border-[.5px] focus:border-info border-[#707070] rounded outline-0 outline-none" placeholder='' />
        <label htmlFor={inputProps.id}
          className="absolute cursor-text left-0 -top-3 text-sm text-[#707070] bg-inherit mx-2 px-1 
            peer-placeholder-shown:text-base peer-placeholder-shown:text-[#707070] peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-info peer-focus:text-sm transition-all">{labelText}</label>
      </div>
    </div>
  )
}