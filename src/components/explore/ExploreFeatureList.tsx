import {
  Planet01Image,
  Planet02Image,
  Planet03Image,
  Planet04Image,
  Planet05Image,
} from "../../assets/images";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { HeadsetIcon } from "../../assets/images";

export function ExploreFeatureItem({
  src,
  alt,
  active,
  onClick,
  heading,
  description,
}: {
  src: StaticImageData;
  alt: string;
  active: boolean;
  onClick: () => void;
  heading: string;
  description: string;
}) {
  return (
    <li
      className={`lg:h-[563px] relative hover:cursor-pointer flex flex-col justify-end overflow-hidden rounded-3xl duration-500  ${
        active ? "flex-grow-[2] h-[563px]" : "flex-grow h-[100px]"
      }`}
      onClick={onClick}
    >
      <Image
        src={src}
        alt={alt}
        className="object-cover absolute top-0 left-0 h-full -z-50"
      />
      <div
        className={`relative py-8 px-4 flex flex-col items-start gap-y-6 duration-500 justify-center ${
          active ? "bg-[#00000080]" : ""
        }`}
      >
        <div
          className={`bg-[#ffffff40] rounded-3xl p-3 ${
            active ? "block" : "hidden"
          }`}
        >
          <Image src={HeadsetIcon} alt="headset icon" />
        </div>
        <p
          className={`leading-[20px] tracking-wide ${
            active ? "block" : "hidden"
          }`}
        >
          {description}
        </p>
        <h2
          className={`font-bold leading-[40px] ${
            active
              ? "relative rotate-0 top-0 left-0 translate-x-0 whitespace-normal text-2xl"
              : "absolute -translate-x-1/2 whitespace-nowrap text-2xl lg:text-4xl top-1/2 left-1/2 -translate-y-1/2 lg:translate-y-0 lg:-rotate-90 lg:-top-[180%]"
          }`}
        >
          {heading}
        </h2>
      </div>
    </li>
  );
}

const ExploreFeatureList = () => {
  const [activeItemIndex, setActiveItemIndex] = useState<1 | 2 | 3 | 4 | 5>(1);

  return (
    <ul className="mt-14 flex gap-4 flex-col lg:flex-row">
      <ExploreFeatureItem
        src={Planet01Image}
        alt="image of planet 1"
        active={activeItemIndex === 1}
        onClick={() => setActiveItemIndex(1)}
        description="ENTER METAVERSE"
        heading="The Hogwarts"
      />
      <ExploreFeatureItem
        src={Planet02Image}
        alt="image of planet 2"
        active={activeItemIndex === 2}
        onClick={() => setActiveItemIndex(2)}
        description="ENTER METAVERSE"
        heading="The Upside Down"
      />
      <ExploreFeatureItem
        src={Planet03Image}
        alt="image of planet 3"
        active={activeItemIndex === 3}
        onClick={() => setActiveItemIndex(3)}
        description="ENTER METAVERSE"
        heading="Kadirojo Permai"
      />
      <ExploreFeatureItem
        src={Planet04Image}
        alt="image of planet 4"
        active={activeItemIndex === 4}
        onClick={() => setActiveItemIndex(4)}
        description="ENTER METAVERSE"
        heading="Paradise Island"
      />
      <ExploreFeatureItem
        src={Planet05Image}
        alt="image of planet 5"
        active={activeItemIndex === 5}
        onClick={() => setActiveItemIndex(5)}
        description="ENTER METAVERSE"
        heading="Hawkins Labs"
      />
    </ul>
  );
};

export default ExploreFeatureList;
