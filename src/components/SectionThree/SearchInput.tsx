import { Search } from "lucide-react";
import { ChangeEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface IProps {
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function SearchInput({ setInputValue }: IProps) {
  const [middleValue, setMiddleValue] = useState<string>("");
  const onChangeInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setMiddleValue(value);
    if (value === "") {
      setInputValue("");
    }
  };

  const handleClickFindFn = () => {
    if (middleValue !== "") {
      setInputValue(middleValue);
    }
  };

  const handleOnKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (
    e
  ) => {
    if (e.key === "Enter") {
      handleClickFindFn(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex w-11/12 items-center space-x-2">
        <Input
          type="text"
          placeholder="Search with love ..."
          className="focus-visible:ring-0 focus-visible:ring-offset-0 shadow-md shadow-slate-500"
          onChange={onChangeInputValue}
          onKeyDown={handleOnKeyPress}
        />
        <Button
          type="submit"
          className="shadow-md shadow-slate-500 bg-blue-500 hover:bg-blue-700"
          onClick={() => handleClickFindFn()}
        >
          <Search />
        </Button>
      </div>
    </div>
  );
}
