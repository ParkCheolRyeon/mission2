import { sectionThreeItems } from "../../components/SectionThree/Datas/items";
import ThreeItem from "./ThreeItem";

interface IProps {
  inputValue?: string;
}

export default function SectionThreeItems({ inputValue }: IProps) {
  const filteredComponentsFn = (inputvalue: string) => {
    if (inputvalue !== "") {
      return sectionThreeItems
        .filter((sectionThreeItem) =>
          sectionThreeItem.name.includes(String(inputValue))
        )
        .map((sectionThreeItem, index: number) => {
          return (
            <ThreeItem
              sectionThreeItem={sectionThreeItem}
              key={`section_three_item_key_${index}`}
            />
          );
        });
    }
    return sectionThreeItems.map((sectionThreeItem, index: number) => {
      return (
        <ThreeItem
          sectionThreeItem={sectionThreeItem}
          key={`section_three_item_key_${index}`}
        />
      );
    });
  };

  return (
    <div className="flex flex-col items-center gap-6">
      {filteredComponentsFn(inputValue as string)}
    </div>
  );
}
