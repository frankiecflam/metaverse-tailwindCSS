import { GetStartedImage } from "../../assets/images";
import Image from "next/image";
import GetStartedList from "./GetStartedList";

const GetStarted = () => {
  return (
    <section className="section">
      <div className="container mx-auto grid lg:grid-cols-2 items-center">
        <div className="relative">
          <Image
            src={GetStartedImage}
            alt="image of a planet wearing a pair of headphones"
            className="object-contain w-[90%] h-[90%] mx-auto"
          />
          <div className="bg-[#2d4898bf] blur-[200px] top-[10%] left-[30%] -rotate-[53.13deg] w-[304px] h-screen absolute -z-50" />
        </div>
        <div>
          <h1 className="section-heading text-start">| How Metaverus Works</h1>
          <p className="section-subHeading text-start">
            Get started with just a few clicks
          </p>
          <GetStartedList />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
