import { ValidationType } from "@/types/enums/validation-type";
import { TextInputField } from "@/types/props/text-input-field";
import { ChangeEvent } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa6";

export default function InputGoogleLikePasswordCustom({
  inputId,
  labelText,
  passwordField,
  labelClassName,
  inputContainerClassName,
  show,
  onPasswordShown,
  onPasswordChanged,
}: {
  inputId: string;
  labelText: string;
  passwordField: TextInputField<string>;
  inputContainerClassName: (status: ValidationType) => string;
  labelClassName: (status: ValidationType) => string;
  show: boolean;
  onPasswordShown: (show: boolean) => void;
  onPasswordChanged: (passwordValue: string) => void;
}) {

  return (
    <div>
      <div className={`flex items-center justify-center gap-x-4 ${inputContainerClassName(passwordField.status)}`}>
        <div className="flex-1">
          <div className="bg-white w-full">
            <div className="relative bg-inherit">
              <input id={inputId}
                type={show ? 'text' : 'password'}
                placeholder=''
                value={passwordField.value}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  onPasswordChanged(event.target.value);
                }}
                className='peer outline-0 outline-transparent relative' />
              <label htmlFor={inputId}
                className={labelClassName(passwordField.status)}>{labelText}</label>
            </div>

          </div>
        </div>
        <div className="flex-none">
          <div className='cursor-pointer' onClick={() => { onPasswordShown(show) }}>
            <FaRegEye size={24} className={`${show ? 'hidden' : 'block'}`} />
            <FaEyeSlash size={24} className={`${show ? 'block' : 'hidden'}`} />
          </div>
        </div>
      </div>
      {(passwordField.errorText !== '') && (<div className="text-danger">{passwordField.errorText}</div>)}
    </div>
  );
}