import { Image } from "lucide-react";

interface IProps {
  color?: string;
  img?: string | ArrayBuffer | null;
  isSelected?: boolean;
}

export default function ImgBox({ color, img, isSelected }: IProps) {
  return (
    <div
      className={`flex h-32 w-32 items-center justify-center rounded-xl border-2 border-slate-600 ${color} shadow-lg shadow-slate-400`}
    >
      {img ? (
        <img
          src={img as string}
          alt={`Preview ${isSelected}`}
          className="w-16 h-16 rounded-full border-4 border-white "
        />
      ) : (
        <Image className="h-16 w-16 text-center text-6xl text-white" />
      )}
    </div>
  );
}
