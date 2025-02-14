import Hero from "@/components/sections/Hero";
import MissionZero from "@/components/sections/MissionZero";
import Projects from "@/components/sections/Projects";
import TextAndVideo from "@/components/sections/TextAndVideo";
import LabNotes from "@/components/sections/LabNotes";
import FirstPlant from "@/components/sections/FirstPlant";

export default function Home() {
  return (
    <>
      <Hero />
      <TextAndVideo />
      <MissionZero />
      <Projects />
      <LabNotes />
      <FirstPlant />
    </>
  );
}
