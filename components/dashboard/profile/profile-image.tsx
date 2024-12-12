import { cn } from "@/lib/utils";
import Image from "next/image";
interface ProfileImageProps {
  imageUrl?: string;
  className?: string;
}
export const ProfileImage = ({ imageUrl, className }: ProfileImageProps) => {
  return (
    <div className={cn(`max-w-28 h-28 mx-auto`, className)}>
      <Image
        height={500}
        width={500}
        src={imageUrl || "/user-profile.jpg"}
        alt="user image"
        className="rounded-full w-full h-full object-cover border"
      />
    </div>
  );
};
