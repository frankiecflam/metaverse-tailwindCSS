import { Planet09Image, HeroStampImage } from "../../assets/images";
import Image from "next/image";

const FounderMessage = () => {
  return (
    <section className="section" id="founder_message">
      <div className="container mx-auto relative">
        <div className="bg-[#2D4898] absolute w-[304px] h-screen blur-[200px] -rotate-[53.13deg] -z-50 -top-[50%] right-[50%]" />
        <div className="grid lg:grid-cols-[2fr_5fr] gap-y-8">
          <div className="relative py-10 lg:pt-24 px-6 border-[1px] border-[#6A6A6A] border-solid rounded-3xl">
            <p className="font-medium text-3xl">Samantha</p>
            <p className="text-lg">Founder Metaverus</p>
            <p className="mt-6 selection:text-[18px] leading-[39.6px] sm:text-[24px] sm:leading-[45.6px]">
              “With the development of today&apos;s technology, metaverse is
              very useful for today&apos;s work, or can be called web 3.0. by
              using metaverse you can use it as anything”
            </p>
            <Image
              src={HeroStampImage}
              alt="image of the Metaverse's stamp"
              className="absolute top-[5%] -right-[35%] object-contain w-[155px] h-[155px] hidden lg:block"
            />
          </div>
          <Image
            src={Planet09Image}
            alt="Image of a planet"
            className="object-cover rounded-3xl h-full w-full lg:ml-[38.75px]"
          />
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
