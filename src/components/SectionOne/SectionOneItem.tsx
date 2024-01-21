import { ItemsTypes } from "../../types/sectionOne/types";

export default function SectionOneItem({
  city,
  date,
  weatherimg,
  temperature,
  bgcolor,
}: ItemsTypes) {
  return (
    <div className="flex flex-col gap-7 w-full max-w-80">
      <div
        className={`${bgcolor} flex h-20 items-center justify-evenly gap-24 rounded-lg border  border-neutral-700 shadow-md shadow-black  w-full relative`}
      >
        <div className="flex flex-col text-start">
          <div className="text-base font-bold ">{city}</div>
          <div className="font-blod text-[10px] ">{date}</div>
        </div>
        <div className="flex items-center gap-2 ">
          <img
            className="w-6 h-6 "
            src={`/Icons/${weatherimg}`}
            alt={weatherimg}
          />
          <div className="text-2xl font-extrabold ">{temperature}°C</div>
        </div>
      </div>
    </div>
  );
}
