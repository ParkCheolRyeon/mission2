import { useRandomColors } from "@/hooks/useRandomColors";
import { ImageBoxs } from "../../components/SectionTwo/Datas/ImgBoxs";
import ImgBox from "./ImgBox";

interface IProps {
  imgList: Array<string | ArrayBuffer | null>;
  imgColors: string[];
}

export default function AddImages({ imgList, imgColors }: IProps) {
  return (
    <div className="m-auto relative flex w-full flex-wrap items-center justify-center gap-6">
      {ImageBoxs.map((imageBox, index: number) => (
        <ImgBox
          color={imageBox.color}
          key={`sectiontwo_image_box_key_${index}`}
        />
      ))}
      {imgList.map((img, index: number) => (
        <ImgBox
          color={
            index === imgList.length - 1 ? useRandomColors() : imgColors[index]
          }
          img={img}
          key={`sectiontwo_image_box_key_${index}`}
        />
      ))}
    </div>
  );
}
