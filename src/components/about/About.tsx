import { ArrowIcon } from "../../assets/images";
import Image from "next/image";

const About = () => {
  return (
    <section className="section relative" id="about">
      <div className="container mx-auto">
        <h1 className="section-heading">| About Metaverus</h1>
        <p className="py-4 text-[24px] md:text-[36px] text-secondary font-medium text-center leading-[180%]">
          <span className="text-primary text-3xl font-extrabold">
            Metaverse
          </span>{" "}
          is a new thing in the future, where you can enjoy the virtual world by
          feeling like it&apos;s really real, you can feel what you feel in this
          metaverse world, because this is really the{" "}
          <span className="text-primary text-3xl font-extrabold">
            madness of the metaverse
          </span>{" "}
          of today, using only{" "}
          <span className="text-primary text-3xl font-extrabold">VR</span>{" "}
          devices you can easily explore the metaverse world you want, turn your
          dreams into reality. Let&apos;s{" "}
          <span className="text-primary text-3xl font-extrabold">explore</span>{" "}
          the madness of the metaverse by scrolling down
        </p>
        <Image
          src={ArrowIcon}
          alt="down arrow"
          className="mx-auto mt-16 mb-2 animate-ping"
        />
      </div>
      <div className="w-[200px] h-[800px] blur-[190px] bg-[#7aebfb] absolute top-[0%] left-1/2 -z-50 rotate-45" />
    </section>
  );
};

export default About;
