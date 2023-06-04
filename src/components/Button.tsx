import { ComponentPropsWithoutRef } from "react";

const colors: Record<ThemeColor, string> = {
  'soft-red': 'bg-soft-red hover:text-soft-red hover:border-soft-red',
  'soft-blue': 'bg-soft-blue hover:text-soft-blue hover:border-soft-blue',
  'gray': '!text-gray-600 bg-gray-100 hover:text-white hover:border-gray-600 hover:bg-gray-600'
}
type ThemeColor = 'soft-red' | 'soft-blue' | 'gray';

const Button = ({ themeColor, className, ...otherProps }: ComponentPropsWithoutRef<'button'> & { themeColor?: ThemeColor }) => {

  const colorClasses = themeColor ? colors[themeColor] : colors['soft-blue'];

  return (
    <button className={`md:px-[2em] px-[1em] py-[.5em] rounded-md text-white shadow-md hover:bg-white border-transparent border-solid border-2 outline-offset-4 transition-colors ${colorClasses} ${className ? className : ''}`} {...otherProps}>
    </button>
  )
}

export default Button;