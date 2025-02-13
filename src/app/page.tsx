import Hero from "@/components/sections/Hero";
import MissionZero from "@/components/sections/MissionZero";
import Projects from "@/components/sections/Projects";
import TextAndVideo from "@/components/sections/TextAndVideo";

export default function Home() {
  return (
    <>
      <Hero />
      <TextAndVideo />
      <MissionZero />
      <Projects />
    </>
  );
}
