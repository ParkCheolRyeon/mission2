import { Input } from "@/components/ui/input";
import { Label } from "../ui/label";

interface IProps {
  setImg: (newImg: string | ArrayBuffer | null) => void;
}

export function ImageInput({ setImg }: IProps) {
  const handleFileRead = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const result = e.target?.result;
        if (result && typeof result === "string") {
          setImg(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="grid min-w-44 items-center text-center justify-center shadow-lg shadow-slate-600 rounded-xl  hover:bg-blue-400 bg-blue-600">
        <div className="w-full justify-center items-center my-3">
          <Label
            htmlFor="img_upload"
            className="text-xl text-white w-fit flex justify-center"
          >
            Click Me!
          </Label>
          <Input
            id="img_upload"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileRead}
            placeholder="이미지를 선택하셈"
          />
        </div>
      </div>
    </div>
  );
}
