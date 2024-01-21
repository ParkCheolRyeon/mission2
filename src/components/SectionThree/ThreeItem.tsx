import { sectionThreeItemDatasType } from "@/types/sectionThree/types";
import { useState } from "react";
import InviteBtn from "./InviteBtn";
import UserAvatar from "./UserAvatar";

interface IProps {
  sectionThreeItem: sectionThreeItemDatasType;
}

export default function ThreeItem({ sectionThreeItem }: IProps) {
  const [isInvited, setIsInvited] = useState(false);

  return (
    <div className="flex h-16 w-11/12 items-center justify-center rounded-xl border-2 border-black bg-white">
      <div className="justify-star ml-2 flex h-20 w-4/5 items-center gap-1">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-black ${sectionThreeItem.bgcolor}`}
        >
          <UserAvatar img={sectionThreeItem.img} />
        </div>
        <div className="flex flex-col">
          <div className="text-base font-extrabold">
            {sectionThreeItem.name}
          </div>
          <div className="text-[10px] text-slate-500">
            {sectionThreeItem.job}
          </div>
        </div>
      </div>
      <InviteBtn
        setIsInvited={setIsInvited}
        isInvited={isInvited}
        sectionThreeItem={sectionThreeItem}
        textcolor={isInvited ? "text-white" : "text-black"}
        bgcolor={isInvited ? "bg-black" : "bg-amber-400"}
      />
    </div>
  );
}
