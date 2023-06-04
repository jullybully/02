import React, { RefObject } from "react";
import { ComponentProps } from "react";

const fieldRootStyles = `p-0 align-top min-w-0 border-0 inline-flex flex-col relative`;

const inputStyles = `w-full border-none outline-none select-none font-[inherit] text-current peer`;

const inputRootStyles = `group px-1 py-2 relative inline-flex font-[inherit] bg-white rounded-md`;

const inputBorderStyles = `text-left absolute inset-0 m-0 py-0 px-2 pointer-events-none overflow-hidden min-w-0 rounded-md border-gray-400 border-solid border-0 peer-focus:border-2 peer-focus:border-soft-red  group-hover:border-[1px] group-hover:border-soft-red`;


const inputLabelStyles = `block font-[inherit] p-0 text-black text-opacity-[.5] origin[left_top] whitespace-nowrap transition-default overflow-ellipsis z-index-[1] transform translate-x-3 translate-y-2  scale-100 absolute top-0 left-0 overflow-hidden`;

const inputLabelActiveStyles = `translate-y-[-.4em] scale-75 text-inherit`;

export const InputAdornment = React.forwardRef<HTMLDivElement, ComponentProps<'div'> & { show?: boolean }>(function InputAdornment(props, ref) {
  const { className, show, ...rest } = props
  return (
    <div className={`inline-flex justify-center items-center px-1 font-[inherit] ${show ? 'visible' : 'invisible'} ${className ? className : ''}`} {...rest} ref={ref}>
    </div>
  )
})

interface OwnTextFieldProps<T> {
  InputProps?: {
    startAdornment?: JSX.Element | null;
    endAdornment?: JSX.Element | null;
  }
  fullWidth?: boolean
  label?: string
  error?: boolean
  helperText?: string
  classes?: {
    fieldRoot?: string
    inputRoot?: string
    input?: string
    error?: string
  }
  tag: T;
}
type TextFieldProps<T extends "input" | "textarea"> = OwnTextFieldProps<T> & ComponentProps<T>;

declare function TextFieldFn<T extends "input" | "textarea">(props: TextFieldProps<T>): JSX.Element;

export const TextField = React.forwardRef<HTMLElement, TextFieldProps<any>>(function TextField(props, ref) {
  const { InputProps = {}, fullWidth, classes, label, tag, error, helperText, ...rest } = props;
  const { startAdornment, endAdornment } = InputProps;

  return (
    <div className={`${fieldRootStyles} ${fullWidth ? "w-full" : ""} ${classes ? classes.fieldRoot : ""}`}>
      <div className={`${inputRootStyles} ${fullWidth ? 'w-full' : ''} ${classes ? classes.inputRoot : ''}`} >
        {
          label ? (<label className={`${inputLabelStyles} ${inputLabelActiveStyles} ${error ? 'text-red-500!' : ''}`}>{label}</label>) : null
        }
        {
          startAdornment ? (
            startAdornment
          ) : null
        }
        {
          tag === "textarea" ? (
            <textarea ref={ref as RefObject<HTMLTextAreaElement>} {...rest} className={`${inputStyles} ${classes ? classes.input : ''}`} />
          ) : (
            <input type="text" ref={ref as RefObject<HTMLInputElement>} {...rest} className={`${inputStyles} ${classes ? classes.input : ''}`} />
          )
        }
        <fieldset aria-hidden="true" className={`${inputBorderStyles} ${error ? 'border-red-500!' : ''}`}>
          <legend className="block max-w-0 p-0 invisible leading-[11px]" style={{ maxWidth: "100%" }}>
            <span>{label}</span>
          </legend>
        </fieldset>
        {
          endAdornment ? (
            endAdornment

          ) : null
        }
      </div >
      {
        error ? (
          <p className={`text-xs ${error ? 'text-red-500!' : ''} ${classes.error ? classes.error : ''}`}>{helperText}</p>
        ) : null
      }
    </div>
  )
}) as typeof TextFieldFn;