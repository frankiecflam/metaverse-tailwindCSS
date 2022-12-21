import { useState } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import HeaderSocialList from "./HeaderSocialList";
import Overlay from "../ui/Overlay";

export function HeaderNavItem({
  href,
  sectionName,
}: {
  href: string;
  sectionName: string;
}) {
  return (
    <li className="text-xl font-bold capitalize">
      <Link href={href}>{sectionName}</Link>
    </li>
  );
}

const HeaderNavList = () => {
  const [showNavList, setShowNavList] = useState(false);

  return (
    <div className="z-50">
      <button
        className="btn-menu"
        onClick={() => setShowNavList((prevState) => !prevState)}
      />
      <ul
        className={`fixed top-0 right-0 py-24 h-screen w-[90%] sm:w-[50%] lg:w-[40%] bg-[#253242] flex flex-col items-center gap-y-12 origin-right duration-500 overflow-y-scroll z-50 ${
          showNavList ? "scale-x-100" : "scale-x-0"
        }`}
        onClick={() => setShowNavList(false)}
      >
        <HeaderNavItem href="/" sectionName="home" />
        <HeaderNavItem href="#about" sectionName="about" />
        <HeaderNavItem href="#explore" sectionName="explore" />
        <HeaderNavItem href="#get_started" sectionName="get started" />
        <HeaderNavItem href="#updates" sectionName="updates" />
        <HeaderNavItem href="#people" sectionName="people" />
        <HeaderNavItem href="#insights" sectionName="insights" />
        <HeaderNavItem href="#enter_metaverse" sectionName="enter metaverse" />
        <HeaderSocialList />
      </ul>
      {showNavList &&
        ReactDOM.createPortal(
          <Overlay onClick={() => setShowNavList(false)} />,
          document.getElementById("overlay-root")!
        )}
    </div>
  );
};

export default HeaderNavList;
