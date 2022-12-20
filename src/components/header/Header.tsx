import HeaderNavActions from "./HeaderNavActions";
import HeaderNavBrand from "./HeaderNavBrand";
import HeaderNavList from "./HeaderNavList";

const Header = () => {
  return (
    <header className="relative">
      <div className="absolute top-0 left-0 w-1/2 -z-50 bg-universe blur-[125px] h-full" />
      <nav className="w-3/4 py-9 mx-auto flex justify-between items-center">
        <HeaderNavActions />
        <HeaderNavBrand />
        <HeaderNavList />
      </nav>
    </header>
  );
};

export default Header;
