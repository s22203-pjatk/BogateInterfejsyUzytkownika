import { HStack, Icon } from "@chakra-ui/react";
import { SiYoutubegaming } from "react-icons/si";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={"20px"}>
      <Icon as={SiYoutubegaming} boxSize={"50px"} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;