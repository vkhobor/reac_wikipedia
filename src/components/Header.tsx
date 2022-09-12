import { FunctionComponent } from "react";
import CatIcon from "~icons/mdi/cat";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="sticky top-0 z-10 bg-materialBlue shadow-material h-14 p-3 flex justify-end flex-row">
      <CatIcon className="hover:text-black text-white h-full w-auto" />
    </header>
  );
};

export default Header;
