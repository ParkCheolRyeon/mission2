import { Button } from "../ui/button";

export default function BottomBtn() {
  return (
    <div className="m-auto flex w-full flex-wrap items-center justify-center gap-6">
      <Button className="mt-8 flex h-11 w-11/12 items-center justify-center rounded-xl hover:bg-blue-500 bg-blue-700 text-center font-bold tracking-wider text-white">
        Let's get it done
      </Button>
    </div>
  );
}
