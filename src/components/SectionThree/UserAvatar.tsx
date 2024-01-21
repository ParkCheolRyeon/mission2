import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface IProps {
  img: string;
}

export default function UserAvatar({ img }: IProps) {
  return (
    <Avatar className="border border-blue-800">
      <AvatarImage src={img} className="rounded-full" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
