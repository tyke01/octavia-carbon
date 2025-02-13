import Hero from "@/components/sections/Hero";
import MissionZero from "@/components/sections/MissionZero";
import Projects from "@/components/sections/Projects";
import TextAndVideo from "@/components/sections/TextAndVideo";
import LabNotes from "@/components/sections/LabNotes";

export default function Home() {
  return (
    <>
      <Hero />
      <TextAndVideo />
      <MissionZero />
      <Projects />
      <LabNotes />
    </>
  );
}
