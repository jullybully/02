import React, { forwardRef } from "react"

interface TabProps {
  value: string
  label: string
  selected?: boolean;
  onClick?: (...args: any) => void;
  onFocus?: (...args: any) => void;
  onChange?: (...args: any) => void;
  classes?: {
    root: string
    tab: string
  }
}
/**
 * 
 * @param label - used as aria-label which represents all of its tabs 
 * @param value - a string value that represents the tab
 */
const Tab = forwardRef<HTMLButtonElement, TabProps>(function Tab(props, ref) {
  const { selected, classes, onClick, onFocus, onChange, label, value, ...other } = props;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!selected && onChange) {
      onChange(event, value)
    }
    if (onClick) {
      onClick(event)
    }
  }
  const handleFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
    if (!selected && onChange) {
      onChange(event, value);
    }

    if (onFocus) {
      onFocus(event);
    }
  }

  return (
    <div className={`tablist-item-wrapper ${classes?.root || ''}`}>
      <button role="tab" aria-selected={selected} className={`tablist-item ${classes?.tab || ''} ${selected ? 'active' : ''}`} ref={ref} {...other} tabIndex={selected ? 0 : -1} onClick={handleClick} onFocus={handleFocus}>
        {label}
      </button>
    </div>
  )
})

export default Tab;