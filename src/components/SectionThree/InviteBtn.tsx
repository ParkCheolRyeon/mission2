import { cn } from "@/lib/utils";
import { sectionThreeItemDatasType } from "@/types/sectionThree/types";
import React, { SetStateAction } from "react";
import { ToastAction } from "../ui/toast";
import { useToast } from "../ui/use-toast";

interface IProps {
  bgcolor?: string;
  textcolor?: string;
  setIsInvited: React.Dispatch<SetStateAction<boolean>>;
  isInvited?: boolean;
  sectionThreeItem: sectionThreeItemDatasType;
}

export default function InviteBtn({
  bgcolor,
  textcolor,
  setIsInvited,
  isInvited,
  sectionThreeItem,
}: IProps) {
  const { toast } = useToast();

  const handelToastFn = (isInvited: boolean) => {
    if (!isInvited) {
      return toast({
        title: `${sectionThreeItem.name}님을 초대했습니다!`,
        description: `${sectionThreeItem.name}의 직업은 ${sectionThreeItem.job} 입니다. 👍`,
        className: cn(
          "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
        ),
        action: (
          <ToastAction
            altText="Try again"
            className="bg-rose-600 text-white hover:bg-red-400 hover:text-black"
            onClick={() => setIsInvited(false)}
          >
            취소하기!
          </ToastAction>
        ),
      });
    }
    return toast({
      title: `이미 초대를 진행하셨습니다.`,
      description: `${sectionThreeItem.name}님의 연락을 기다려주세요.👏`,
      className: cn(
        "top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4"
      ),
    });
  };

  return (
    <div
      className={`mr-3 flex h-7 w-3/12 items-center justify-center rounded-lg border-2 border-black ${bgcolor} cursor-pointer shadow-md shadow-slate-700`}
      onClick={() => setIsInvited(true)}
    >
      <div
        className={`text-[10px] font-extrabold ${textcolor}`}
        onClick={() => handelToastFn(isInvited as boolean)}
      >
        invited
      </div>
    </div>
  );
}
