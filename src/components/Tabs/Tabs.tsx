import React, { ComponentPropsWithRef, forwardRef, useRef } from "react";
import { isFragment } from "react-is";

interface TabsProps extends ComponentPropsWithRef<'div'> {
  value: string,
  classes?: {
    root: string
    tabList: string
  }
};

const nextItem = (list: HTMLElement, item: HTMLElement | null): HTMLElement => {
  if (list === item) {
    return list.firstElementChild as HTMLElement;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling as HTMLElement;
  }
  return list.firstElementChild as HTMLElement;
};

const previousItem = (list: HTMLElement, item: HTMLElement | null): HTMLElement => {
  if (list === item) {
    return list.lastElementChild as HTMLElement;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling as HTMLElement;
  }
  return list.lastElementChild as HTMLElement;
};

const moveFocus = (list: HTMLElement, currentFocus: HTMLElement | null, traversalFunction: (list: HTMLElement, item: HTMLElement | null) => HTMLElement) => {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus?.parentElement!);

  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      // avoid infinite loop
      if (wrappedOnce) {
        return;
      }
      wrappedOnce = true;
    }
    const targetToFocus = nextFocus.firstElementChild!;
    const nextFocusDisabled = targetToFocus.getAttribute('disabled') || targetToFocus.getAttribute('aria-disabled') === 'true';

    if (!targetToFocus.hasAttribute('tabindex') || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus);
    }
    else {
      (targetToFocus as any).focus();
      return;
    }
  }
}
const Tabs = forwardRef<HTMLDivElement, TabsProps>((props, ref) => {

  const {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    classes,
    className,
    children: childrenProp,
    onChange,
    value,
    ...other
  } = props;
  // const valueToIndex = new Map();
  const tablistRef = useRef<HTMLDivElement | null>(null);

  let childIndex = 0;
  const children = React.Children.map(childrenProp, (child) => {
    if (!React.isValidElement(child)) {
      return null;
    }
    if (isFragment(child)) {
      console.error([
        "The Tabs component doesn't accept a Fragment as a child.",
        'Consider providing an array instead.',
      ].join('\n'));

    }
    const childValue = child.props.value === undefined ? childIndex : child.props.value;
    // valueToIndex.set(childValue, childIndex);
    const selected = childValue === value;

    childIndex += 1;
    return React.cloneElement(child, {
      selected,
      value: childValue,
      onChange,
      ...(childIndex === 1 && !value && !child.props.tabIndex ? { tabIndex: 0 } : {})
    })
  })
  const handleKeyDown = (event: React.KeyboardEvent) => {
    const list = tablistRef.current;
    if (!list) {
      throw new Error('TabList is not rendered')
    }
    const currentFocus = document.activeElement as HTMLElement;

    const role = currentFocus?.getAttribute('role');
    if (role !== 'tab') {
      return;
    }

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        moveFocus(list, currentFocus, previousItem);
        break;
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        moveFocus(list, currentFocus, nextItem);
        break;
      case 'Home':
        event.preventDefault();
        moveFocus(list, null, nextItem);
        break;
      case 'End':
        event.preventDefault();
        moveFocus(list, null, previousItem);
        break;
      default:
        break;
    }
  }
  return (
    <div
      ref={ref}
      {...other}
      className={`${className || ''} ${classes?.root || ''}`}
    >
      <div role="tablist" aria-label={ariaLabel || 'provide tablist label'} aria-labelledby={ariaLabelledBy} className={`border-b-gray-300 border-solid border-b-0 xl:border-b-[1px] max-w-[890px] mx-auto flex items-center justify-between text-lg text-grayish-blue flex-col xl:flex-row px-4 lg:px-0 ${classes?.tabList || ''}`} ref={tablistRef} onKeyDown={handleKeyDown}>
        {children}
      </div>
    </div>
  )
})

export default Tabs;