import Head from "next/head";
import Header from "../src/components/header/Header";
import Hero from "../src/components/hero/Hero";
import About from "../src/components/about/About";
import Explore from "../src/components/explore/Explore";
import GetStarted from "../src/components/getStarted/GetStarted";

export default function Home() {
  return (
    <>
      <Head>
        <title>Metaverse</title>
        <meta
          name="description"
          content="Metaverse built with React and Tailwind"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Hero />
        <About />
        <Explore />
        <GetStarted />
      </main>
    </>
  );
}
