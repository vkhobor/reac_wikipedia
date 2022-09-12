import { FunctionComponent } from "react";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      {/* Body */}
      {props.children}
    </>
  );
};

export default Layout;
