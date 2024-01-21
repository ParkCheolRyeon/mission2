import React from "react";

interface IProps {
  children: React.ReactNode;
  bgcolor: string;
  gap?: string;
}

export default function SectionBg({ children, bgcolor, gap }: IProps) {
  return (
    <div
      className={`relative m-auto flex max-h-fit w-80 max-w-full  2xl:items-center ${bgcolor} rounded-2xl shadow-slate-500 shadow-xl `}
    >
      <div
        className={`m-auto flex w-11/12 h-full flex-col flex-wrap justify-center my-10 ${
          gap ? gap : "gap-10"
        }`}
      >
        {children}
      </div>
    </div>
  );
}
