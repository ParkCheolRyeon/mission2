interface IProps {
  imgList: Array<string | ArrayBuffer | null>;
  open?: boolean;
}
export default function TitleText({ imgList, open }: IProps) {
  return (
    <div className="flex w-full flex-col text-center">
      <div className="flex flex-col gap-2">
        <div
          className={`text-2xl font-extrabold tracking-wide ${
            open === false ? "text-red-300" : ""
          }`}
        >
          {open === false ? "Don't Close Me!!" : "Add Your Images"}
        </div>
        <div
          className={`text-2xl font-extrabold tracking-wide ${
            imgList.length !== 0 ? "text-blue-500" : ""
          }`}
        >
          {imgList.length !== 0
            ? "One More Time!!"
            : open === false
            ? "Please"
            : "Try Now!!"}
        </div>
      </div>
    </div>
  );
}
