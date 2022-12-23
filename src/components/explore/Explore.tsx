import ExploreFeatureList from "./ExploreFeatureList";

const Explore = () => {
  return (
    <section className="section relative " id="explore">
      <div className="bg-[#9542E859] blur-[175px] w-[404px] h-[800px] absolute -rotate-[114.2deg] top-[5%] left-[20%] -z-50" />
      <div className="container mx-auto">
        <h1 className="section-heading">| The World</h1>
        <p className="section-subHeading">
          Choose the world you want to explore
        </p>
        <ExploreFeatureList />
      </div>
    </section>
  );
};

export default Explore;
