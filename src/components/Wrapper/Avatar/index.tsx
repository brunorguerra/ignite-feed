import { Image } from "./styles";

interface AvatarProps {
    imagePath: string;
    hasBorder: boolean;
}

export const Avatar = ({ imagePath, hasBorder }: AvatarProps) => {
    return <Image src={imagePath} hasBorder={hasBorder} />;
};
