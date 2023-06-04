import React, { ComponentPropsWithRef, useContext } from "react";
import AccordionContext from "./AccordionContext";

interface AccordionSummaryProps extends ComponentPropsWithRef<'button'> {
  classes?: {
    root?: string;
    button?: string;
    content?: string;
    icon?: string;
  }
}
const AccordionSummary = React.forwardRef<HTMLButtonElement, AccordionSummaryProps>(function AccordionSummary(props, ref) {
  const { children, className, onClick, classes, ...other } = props;

  const { disabled = false, expanded, toggle } = useContext(AccordionContext)!;

  const handleChange = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (toggle) {
      toggle(event);
    }
    if (onClick) {
      onClick(event)
    }
  }
  return (
    <h3>
      <button
        disabled={disabled}
        aria-expanded={expanded}
        className={`px-2 py-4 w-full border-solid border-t-[1px] border-gray-300 hover:text-soft-red outline-offset-2 ${classes?.button ? classes.button : ""}`}
        ref={ref}
        onClick={handleChange}
        {...other}
      >
        <span className={`flex justify-between items-center ${classes?.content ? classes.content : ''}`}>
          {children}
          <span className={`w-2 h-2 pointer-events-none border-solid border-gray-400 border-r-[3px] border-b-[3px] rotate-45 transition-transform duration-300 ${expanded ? '-rotate-[135deg] border-soft-red' : ''} ${classes?.icon ? classes.icon : ''}`}></span>
        </span>
      </button>
    </h3>
  )
})

export default AccordionSummary;