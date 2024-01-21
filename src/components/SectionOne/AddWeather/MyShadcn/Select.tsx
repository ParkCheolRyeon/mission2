import React from "react";
import { Label } from "../../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../ui/select";
import { ItemsTypes, WeatherTypes } from "@/types/sectionOne/types";
import { weatherDatas } from "../../Datas/WeatherDatas";

interface IProps {
  setInputValue: React.Dispatch<React.SetStateAction<ItemsTypes>>;
}

export default function MySelect({ setInputValue }: IProps) {
  const setWeatherImgFn = (e: string) => {
    setInputValue((prev) => ({
      ...prev,
      weatherimg: e,
    }));
  };

  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor="framework" className="text-right">
        날씨
      </Label>
      <div className="col-span-3">
        <Select onValueChange={setWeatherImgFn}>
          <SelectTrigger id="framework">
            <SelectValue placeholder="날씨 어때요?" />
          </SelectTrigger>
          <SelectContent position="popper">
            {weatherDatas.map((weatherData: WeatherTypes, index: number) => {
              return (
                <SelectItem
                  value={weatherData.name}
                  key={`sectionOne_weatherData_key_${index}`}
                >
                  <div className="flex gap-2">
                    <img
                      className="w-6 h-6"
                      src={weatherData.src}
                      alt={weatherData.alt}
                    />
                    {weatherData.name}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
