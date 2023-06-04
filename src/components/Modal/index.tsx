import { HTMLAttributes, ReactNode, RefObject, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import useModal from "../../hooks/useModal";


interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  focusFirst?: string | RefObject<HTMLElement> | HTMLElement;
  focusAfterClosed?: string | RefObject<HTMLElement> | HTMLElement;
  autoFocus?: boolean;
  onClose: () => void;
  children: ReactNode;
  maxWidth?: string;
  classes?: {
    root?: string
    backDrop?: string
    childrenOuter?: string
    childrenContainer?: string
  }
}
const Modal = (
  { focusFirst, focusAfterClosed, onClose, autoFocus, children, maxWidth, classes, ...rest }: ModalProps
) => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true)
    return () => {
      setIsMounted(false)
    }
  }, [isMounted])

  const { ref, modalRoot } = useModal<HTMLDivElement>({ autoFocus, focusFirst, focusAfterClosed, onClose, overlayModal: true });

  const modal = (
    <div role="presentation" className={`fixed z-index-[1300] inset-0 ${classes ? classes?.root : ''}`}>
      <div className={`fixed flex justify-center items-center inset-0 bg-black bg-opacity-50 -z-index-[1] tap-transparent opacity-0 transition-opacity ${isMounted ? 'opacity-100 transition-opacity' : ''} ${classes ? classes?.backDrop : ''}`}>
        <div tabIndex={0}></div>
        <div
          role="presentation"
          tabIndex={-1}
          className={`h-full outline-none flex justify-center items-center ${classes?.childrenOuter ? classes.childrenOuter : ''}`}
        >
          <div
            className={`relative max-h-[calc(100% - 2rem)] rounded-sm overflow-y-auto flex flex-col max-w-2xl bg-white text-black text-opacity-80 m-8 py-2 px-6 ${classes?.childrenContainer ? classes.childrenContainer : ''}`}
            ref={ref}
            role="dialog"
            style={maxWidth ? { maxWidth } : {}}
            {...rest}
          >
            {children}
          </div>
        </div>
        <div tabIndex={0}></div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modal, modalRoot);
};

export default Modal;