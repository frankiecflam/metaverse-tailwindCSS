import Image from "next/image";
import { HeadsetIcon } from "../../assets/images";
import HeaderSocialList from "../header/HeaderSocialList";

const Footer = () => {
  return (
    <footer className="pt-36 pb-6 px-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-8 border-b-2 border-solid border-[#ffffff1a] pb-12">
          <h1 className="text-6xl lg:text-7xl font-bold text-center lg:text-start">
            Enter the Metaverse{" "}
          </h1>
          <button className="py-4 px-8 rounded-full bg-[#25618B] flex gap-x-2 items-center">
            <Image src={HeadsetIcon} alt="Image of a pair of headphones" />
            <p>ENTER METAVERSE</p>
          </button>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center py-12 gap-y-12 relative">
          <p className="font-extrabold capitalize leading-[30.24px] text-[32px]">
            METAVERUS
          </p>
          <p className="leading-[21px] tracking-wide text-secondary text-center">
            Copyright &copy; 2021 - 2022 Metaversus. All rights reserved.
          </p>
          <HeaderSocialList />
          <div className="bg-[#65C4FA] absolute -z-50 blur-[150px] left-[37%] w-[500px] h-[100px]" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
