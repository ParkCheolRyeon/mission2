import { InputDatasTypes, ItemsTypes } from "@/types/sectionOne/types";
import { useState } from "react";
import MyButton from "../../../common/Button/Button";
import { Button } from "../../../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../../ui/dialog";
import MyInput from "./Input";
import MySelect from "./Select";

import { AlertCircle, Plus } from "lucide-react";
import { AlertTitle } from "../../../ui/alert";
import { inputDatas } from "../../Datas/InputDatas";

interface IProps {
  addWeatherItem: (newWeatherItem: ItemsTypes) => void;
}

export function AddWeather({ addWeatherItem }: IProps) {
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [inputValue, setInputValue] = useState<ItemsTypes>({
    city: "",
    date: "",
    temperature: "",
    weatherimg: "",
  });

  const handleCheckInputFn = (showAlert: boolean) => {
    if (showAlert) {
      return (
        <div className="flex text-red-500 gap-4 my-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>모든 칸을 입력을 하셔야해요</AlertTitle>
        </div>
      );
    }
    return (
      <div className="text-center ">
        <DialogTitle className="text-blue-600 text-2xl">
          날씨를 추가 해주세요
        </DialogTitle>
        <DialogDescription>
          지역, 날짜, 날씨, 기온을 입력하신 후 추가 버튼을 눌러주세요
        </DialogDescription>
      </div>
    );
  };

  const handleClickAddFn = (inputValue: ItemsTypes) => {
    if (
      !inputValue.city ||
      !inputValue.date ||
      !inputValue.temperature ||
      !inputValue.weatherimg
    ) {
      return setShowAlert(true);
    }
    addWeatherItem(inputValue);
    setOpen(false);
    setInputValue({
      city: "",
      date: "",
      temperature: "",
      weatherimg: "",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <MyButton
          setOpen={setOpen}
          setShowAlert={setShowAlert}
          position="center"
        >
          <Plus className="border-2 border-black w-12 h-12 rounded-full shadow-md shadow-slate-600" />
        </MyButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>{handleCheckInputFn(showAlert)}</DialogHeader>
        <div className="grid grid-cols-2 gap-2 py-4">
          {inputDatas.map((inputData: InputDatasTypes, index: number) => {
            return (
              <MyInput
                key={`secionOne_input_key_${index}`}
                inputName={inputData.inputName}
                stateName={inputData.stateName}
                defaultValue={inputData.defaultValue}
                setInputValue={setInputValue}
                inputValue={inputValue}
              />
            );
          })}
          <MySelect setInputValue={setInputValue} />
        </div>
        <DialogFooter>
          <Button
            type="submit"
            variant={"default"}
            // color="blue"
            className="bg-blue-400 hover:bg-blue-600"
            onClick={() => handleClickAddFn(inputValue)}
          >
            추가
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
