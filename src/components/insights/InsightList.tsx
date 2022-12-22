import {
  Planet06Image,
  Planet07Image,
  Planet08Image,
  ArrowTopRightIcon,
} from "../../assets/images";
import Image, { StaticImageData } from "next/image";

export function InsightItem({
  src,
  alt,
  heading,
  description,
}: {
  src: StaticImageData;
  alt: string;
  heading: string;
  description: string;
}) {
  return (
    <li className="grid md:grid-cols-[1fr_2fr] lg:grid-cols-[2fr_3fr_1fr] gap-x-10 gap-y-10 items-center">
      <Image
        src={src}
        alt={alt}
        className="rounded-[32px] object-cover w-full h-[250px]"
      />
      <div className="flex flex-col gap-y-6">
        <h1 className="text-2xl md:text-5xl text-primary">{heading}</h1>
        <p className="text-secondary">{description}</p>
      </div>
      <div className="p-3 border-white border-[1px] border-solid rounded-full justify-self-center animate-pulse hidden lg:block cursor-pointer">
        <Image
          src={ArrowTopRightIcon}
          alt="Arrow pointing towards the right top"
        />
      </div>
    </li>
  );
}

const InsightList = () => {
  return (
    <ul className="mt-20 flex flex-col gap-y-24 md:gap-y-10">
      <InsightItem
        src={Planet06Image}
        alt="Image of a planet"
        heading="The launch of the Metaverse makes Elon musk ketar-ketir"
        description="Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique."
      />
      <InsightItem
        src={Planet07Image}
        alt="Image of a planet"
        heading="7 tips to easily master the madness of the Metaverse"
        description="Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum."
      />
      <InsightItem
        src={Planet08Image}
        alt="Image of a planet"
        heading="With one platform you can explore the whole world virtually"
        description="Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem."
      />
    </ul>
  );
};

export default InsightList;
