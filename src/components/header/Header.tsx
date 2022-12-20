import HeaderNavActions from "./HeaderNavActions";
import HeaderNavBrand from "./HeaderNavBrand";
import HeaderNavList from "./HeaderNavList";

const Header = () => {
  return (
    <header className="w-3/4 py-9 mx-auto">
      <nav className="flex justify-between items-center">
        <HeaderNavActions />
        <HeaderNavBrand />
        <HeaderNavList />
      </nav>
    </header>
  );
};

export default Header;
