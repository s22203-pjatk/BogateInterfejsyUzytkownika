import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { BsApple, BsGlobe } from "react-icons/bs";
import { SiNintendo } from "react-icons/si";
import { RiMacLine } from "react-icons/ri";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons/lib";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    apple: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    web: BsGlobe,
    ios: BsApple,
    nintendo: SiNintendo,
    mac: RiMacLine,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
