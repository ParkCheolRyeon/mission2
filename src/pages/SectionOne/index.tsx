import { AddWeather } from "@/components/SectionOne/AddWeather/MyShadcn/Dialog";
import SectionBg from "@/components/common/SectionBg";
import { useRandomColors } from "@/hooks/useRandomColors";
import { ItemsTypes } from "@/types/sectionOne/types";
import { useState } from "react";
import { items } from "../../components/SectionOne/Datas/Items";
import SectionOneItem from "../../components/SectionOne/SectionOneItem";

export default function SectionOne() {
  const [weatherList, setWeatherList] = useState<ItemsTypes[]>([]);
  const addWeatherItem = (newWeatherItem: ItemsTypes) => {
    const updatedWeatherList = [
      ...weatherList,
      { ...newWeatherItem, bgcolor: useRandomColors() },
    ];
    setWeatherList(updatedWeatherList);
  };

  return (
    <SectionBg bgcolor={"bg-white"} gap="gap-11">
      <div className="bg- flex text-start text-4xl font-extrabold tracking-wider">
        Weather
      </div>
      {/* 기존 더미 데이터 */}
      {items.map((item, index) => {
        return (
          <SectionOneItem
            key={`sectionOne_key_${index}`}
            city={item.city}
            date={item.date}
            weatherimg={item.weatherimg}
            temperature={item.temperature}
            bgcolor={item.bgcolor}
          />
        );
      })}

      {/* 추가 데이터 */}
      {weatherList.map((weather, index) => (
        <SectionOneItem
          key={`custom_weather_key_${index}`}
          city={weather.city}
          date={weather.date}
          weatherimg={weather.weatherimg}
          temperature={weather.temperature}
          bgcolor={weather.bgcolor}
        />
      ))}
      <AddWeather addWeatherItem={addWeatherItem} />
    </SectionBg>
  );
}
