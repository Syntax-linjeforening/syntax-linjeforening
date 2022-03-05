import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactElement, useState } from "react";

type StyledDialogProps = {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactElement[] | ReactElement;
  className?: string;
}

const StyledDialog = (props: StyledDialogProps) => {
  return (
    <Transition show={props.isOpen} as={Fragment}>
      <Dialog as="div" onClose={props.handleClose} className="fixed inset-0 z-10 overflow-y-auto">
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-40" />
          </Transition.Child>
          <span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className={`inline-block w-full overflow-hidden align-middle transform ${props.className}`}>
              {props.children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default StyledDialog;

export const CreateDialog = (children: ReactElement | ReactElement[]) => {
  const [isOpen, setIsOpen] = useState(true);

  return isOpen
    ? <Fragment>
      <StyledDialog isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        {children}
      </StyledDialog>
    </Fragment> 
    
    : ''
}