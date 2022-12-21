import { UpdatesImage } from "../../assets/images";
import Image from "next/image";
import { HeadsetIcon, VrpanoIcon } from "../../assets/images";

const Updates = () => {
  return (
    <section className="section" id="updates">
      <div className="container mx-auto grid lg:grid-cols-2 items-center gap-y-16">
        <div className="flex flex-col items-start">
          <div>
            <h1 className="section-heading text-start">| Whats new?</h1>
            <p className="section-subHeading text-start">
              What&apos;s new about Metaversus?
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-8 justify-between mt-8">
            <li className="flex flex-col items-start gap-y-6">
              <div className="bg-[#323f5d] rounded-3xl p-5">
                <Image src={HeadsetIcon} alt="Image of a pair of headphones" />
              </div>
              <h1 className="text-primary font-bold text-[24px] leading-[30.24px]">
                Title A new world
              </h1>
              <p className="text-secondary text-[18px] leading-[32.4px]">
                we have the latest update with new world for you to try never
                mind
              </p>
            </li>
            <li className="flex flex-col items-start gap-y-6">
              <div className="bg-[#323f5d] rounded-3xl p-5">
                <Image src={VrpanoIcon} alt="Image of vrpano" />
              </div>
              <h1 className="text-primary font-bold text-[24px] leading-[30.24px]">
                Title More realistic
              </h1>
              <p className="text-secondary text-[18px] leading-[32.4px]">
                In the latest update, your eyes are narrow, making the world
                more realistic than eve
              </p>
            </li>
          </ul>
        </div>
        <div>
          <Image
            src={UpdatesImage}
            alt="Image of a planet"
            className="w-[90%] h-[90%] object-contain mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Updates;
