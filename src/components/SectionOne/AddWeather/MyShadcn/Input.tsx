import { ItemsTypes } from "@/types/sectionOne/types";
import React from "react";
import { Input } from "../../../ui/input";
import { Label } from "../../../ui/label";

interface IProps {
  inputName: string;
  stateName: string;
  defaultValue: string;
  inputValue?: ItemsTypes;
  setInputValue: React.Dispatch<React.SetStateAction<ItemsTypes>>;
}

export default function MyInput({
  inputName,
  defaultValue,
  setInputValue,
  stateName,
}: IProps) {
  const handleChangeInputValueFn = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="grid grid-cols-4 items-center gap-4 ">
      <Label htmlFor={inputName} className="text-right">
        {inputName}
      </Label>
      <Input
        name={stateName}
        placeholder={inputName === "온도" ? defaultValue + " °C" : defaultValue}
        onChange={handleChangeInputValueFn}
        className="col-span-3"
      />
    </div>
  );
}
