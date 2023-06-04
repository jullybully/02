import React, { ComponentPropsWithRef, isValidElement, ReactNode, useCallback, useMemo, useState } from "react";
import { isFragment } from "react-is";
import AccordionContext from "./AccordionContext";

const TransitionComponent = ({ children, expanded }: { children: ReactNode, expanded: boolean }) => {
  return (
    <div className={`collapsible-wrapper ${expanded ? '' : 'collapsed'}`}>
      <div className="collapsible">
        {children}
      </div>
    </div>
  );
};

interface AccordionProps extends ComponentPropsWithRef<'div'> {
  defaultExpanded?: boolean;
  disabled?: boolean;
  disableGutters?: boolean;
  expanded?: boolean;
  onChange?: (...args: any) => void;
  classes?: {
    root?: string;
    region?: string;
  };
}

const Summary = ({ children }: { children: ReactNode }) => {
  if (isFragment(children)) {
    console.error("The Accordion doesn't accept a Fragment as a child.");
    return null;
  }

  if (!isValidElement<ComponentPropsWithRef<'div'>>(children)) {
    console.error('Expected the first child of Accordion to be a valid element.');
    return null;
  }

  return <>{children}</>;
};

const AccordionContent = ({ summary, children, expanded, classes }: { summary: ReactNode, children: ReactNode[], expanded: boolean, classes?: { region?: string } }) => {
  return (
    <>
      <TransitionComponent expanded={expanded}>
        <div
          aria-labelledby={(summary as any).props.id}
          id={(summary as any).props['aria-controls']}
          role="region"
          className={`${expanded ? 'mb-4' : ''} ${classes?.region || ''}`}
        >
          {children}
        </div>
      </TransitionComponent>
    </>
  );
};

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(function Accordion(props, ref) {
  const {
    children: childrenProp,
    className,
    defaultExpanded = false,
    disabled = false,
    disableGutters = false,
    expanded: expandedProp,
    onChange,
    classes,
    ...other
  } = props;

  const [expanded, setExpanded] = useState(defaultExpanded);

  const handleChange = useCallback((event: React.MouseEvent) => {
    setExpanded((prevExpanded) => !prevExpanded);

    if (onChange) onChange(event, !expanded);
  }, [expanded, onChange]);

  const [summary, ...children] = React.Children.toArray(childrenProp);

  const contextValue = useMemo(() => ({ expanded, disabled, disableGutters, toggle: handleChange }), [
    expanded,
    disabled,
    disableGutters,
    handleChange,
  ]);

  return (
    <div ref={ref} {...other} className={`${className || ''} ${classes?.root || ''}`}>
      <AccordionContext.Provider value={contextValue}>
        <Summary>{summary}</Summary>
      </AccordionContext.Provider>
      <AccordionContent summary={summary} children={children} expanded={expanded} classes={classes} />
    </div>
  );
});

export default Accordion;
