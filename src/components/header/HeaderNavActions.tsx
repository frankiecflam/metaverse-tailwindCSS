import { SearchIcon } from "../../assets/images";
import Image from "next/image";

const HeaderNavActions = () => {
  return (
    <div className="flex gap-x-2 items-center">
      <button>
        <Image src={SearchIcon} alt="search icon" />
      </button>
    </div>
  );
};

export default HeaderNavActions;
