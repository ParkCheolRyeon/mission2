import SectionBg from "../components/common/SectionBg";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

export default function MissionTwo() {
  return (
    <div className="flex w-full min-h-lvh flex-wrap justify-center">
      {/* 섹션 1 */}
      <SectionOne />

      {/* 섹션2 */}
      <SectionTwo />

      {/* 섹션2 */}
      <SectionThree />
    </div>
  );
}
