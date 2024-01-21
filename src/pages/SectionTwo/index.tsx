import AddImages from "@/components/SectionTwo/AddImages";
import BottomBtn from "@/components/SectionTwo/BottomBtn";
import { ImageInput } from "@/components/SectionTwo/ImgInput";
import TitleText from "@/components/SectionTwo/TitleText";
import SectionBg from "@/components/common/SectionBg";
import { useRandomColors } from "@/hooks/useRandomColors";
import { X } from "lucide-react";
import { useState } from "react";
import Mybutton from "../../components/common/Button/Button";

export default function SectionTwo() {
  const [open, setOpen] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [imgList, setImgList] = useState<Array<string | ArrayBuffer | null>>(
    []
  );
  const [imgColors, setImgColors] = useState<string[]>([]);

  const handleAddImage = (newImg: string | ArrayBuffer | null) => {
    setImgList((prevList) => [...prevList, newImg]);
    setImgColors((prevColors) => [...prevColors, useRandomColors()]);
  };

  return (
    <SectionBg bgcolor={"bg-white"} gap="gap-8">
      <Mybutton
        setOpen={setOpen}
        setShowAlert={setShowAlert}
        position="start"
        open={open}
      >
        <X className="border-2 border-black w-12 h-12 rounded-full shadow-md shadow-slate-600" />
      </Mybutton>
      {open ? (
        <>
          <TitleText imgList={imgList} />
          <ImageInput setImg={handleAddImage} />
          <AddImages imgList={imgList} imgColors={imgColors} />
          <BottomBtn />
        </>
      ) : (
        <TitleText imgList={imgList} open={open} />
      )}
    </SectionBg>
  );
}
