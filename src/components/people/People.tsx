import {
  PeopleMapImage,
  People1Image,
  People2Image,
  People3Image,
} from "../../assets/images";
import Image from "next/image";

const People = () => {
  return (
    <section className="section" id="people">
      <div className="container mx-auto">
        <h1 className="section-heading">| People on the World</h1>
        <p className="section-subHeading">
          Track friends around you and invite them to play together in the same
          world
        </p>
        <div className="relative mt-8">
          <Image
            src={PeopleMapImage}
            alt="Map of the world showing the location of our customers"
          />
          <div className="rounded-full bg-[#5D6680] w-[35px] h-[35px] md:w-[70px] md:h-[70px] p-2 absolute bottom-20 right-20">
            <Image src={People1Image} alt="Image of customer group 1" />
          </div>
          <div className="rounded-full bg-[#5D6680] w-[35px] h-[35px] md:w-[70px] md:h-[70px] p-2 absolute top-10 left-20">
            <Image src={People2Image} alt="Image of customer group 2" />
          </div>
          <div className="rounded-full bg-[#5D6680] w-[35px] h-[35px] md:w-[70px] md:h-[70px] p-2 absolute top-1/2 left-[45%]">
            <Image src={People3Image} alt="Image of customer group 3" />
          </div>
          <div className="absolute bg-[#4298E8] w-full h-[1236.81px] blur-[125px] -rotate-[114.2deg] -z-50 -top-[50%] lg:top-[40%] -left-[20%] lg:left-0" />
        </div>
      </div>
    </section>
  );
};

export default People;
