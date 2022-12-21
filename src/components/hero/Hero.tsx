import Image from "next/image";
import { HeroCoverImage, HeroStampImage } from "../../assets/images";

const Hero = () => {
  return (
    <section className="section" id="home">
      <h1 className="uppercase text-4xl  sm:text-6xl lg:text-7xl xl:text-9xl xl:leading-[158.4px] font-bold text-center tracking-tight">
        metaverse <br />
        <div>
          ma
          <span className="mx-2 inline-block border-[9px] rounded-r-[25px] border-white w-[70.7px] h-[36px] sm:w-[106px] sm:h-[54px] xl:w-[212px] xl:h-[108px] xl:border-[18px] xl:rounded-r-[50px]"></span>
          ness
        </div>
      </h1>
      <div className="relative">
        <Image
          src={HeroCoverImage}
          alt="background image composed of various planets"
          className="h-[300px] sm:h-[500px] object-cover rounded-tl-[140px] relative -z-50 -translate-y-[2.5rem]"
        />
        <Image
          src={HeroStampImage}
          alt="image of the Metaverse's stamp"
          className="absolute bottom-0 right-4 w-[100px] h-[100px]"
        />
      </div>
    </section>
  );
};

export default Hero;
