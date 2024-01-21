import SectionBg from "@/components/common/SectionBg";
import React, { useState } from "react";
import Mybutton from "../../components/common/Button/Button";
import { ChevronDown, ChevronLeft, ChevronUp, X } from "lucide-react";
import SearchInput from "@/components/SectionThree/SearchInput";
import SectionThreeItems from "@/components/SectionThree/SectionThreeItems";

export default function SectionThree() {
  const [open, setOpen] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  const [inputValue, setInputValue] = useState<string>("");

  return (
    <SectionBg bgcolor="bg-amber-400" gap="gap-10">
      <Mybutton
        setOpen={setOpen}
        setShowAlert={setShowAlert}
        position="start"
        open={open}
        gap={`${open ? "gap-14" : "gap-5"}`}
      >
        {open ? (
          <>
            <ChevronDown className="border-2 border-black w-12 h-12 rounded-full shadow-md shadow-slate-600 bg-white" />
            <div className="text-2xl font-extrabold">Friends</div>
          </>
        ) : (
          <>
            <ChevronUp className="border-2 border-black w-12 h-12 rounded-full shadow-md shadow-slate-600 bg-white" />
            <div className="text-2xl font-extrabold text-blue-600">
              Open And Invite!!
            </div>
          </>
        )}
      </Mybutton>
      {open && (
        <>
          <SearchInput setInputValue={setInputValue} />
          <SectionThreeItems inputValue={inputValue} />
        </>
      )}
    </SectionBg>
  );
}
