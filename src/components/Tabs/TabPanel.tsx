import { ComponentPropsWithRef, forwardRef } from "react";
import { getPanelId, getTabId, useTabContext } from "./TabContext";

interface TabPanelProps extends ComponentPropsWithRef<'div'> {
  value: string
}
const TabPanel = forwardRef<HTMLDivElement, TabPanelProps>((props, ref) => {

  const { children, className, value, ...other } = props;

  const context = useTabContext();
  if (context === null) {
    throw new TypeError('No TabContext provided');
  }
  const id = getPanelId(context, value)!;
  const tabId = getTabId(context, value)!;

  return (
    <div tabIndex={0} role="tabpanel" id={id} aria-labelledby={tabId} hidden={value !== context.value}
      ref={ref}
      className={className}
      {...other}
    >
      {
        value === context.value && children
      }
    </div>
  )
})

export default TabPanel;