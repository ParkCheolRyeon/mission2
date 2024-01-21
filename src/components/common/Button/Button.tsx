import React, { ForwardedRef } from "react";

interface IProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  position?: string;
  open?: boolean;
  gap?: string;
}

const MyButton = (
  { setOpen, setShowAlert, children, position, open, gap }: IProps,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <button
      className={`flex items-center justify-${position} w-full ${gap}`}
      onClick={() => {
        if (open) {
          setOpen(!open);
          setShowAlert(false);
        } else {
          setOpen(true);
          setShowAlert(false);
        }
      }}
    >
      {children}
    </button>
  );
};

export default React.forwardRef(MyButton);
