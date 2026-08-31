import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Divisions from "@/components/Divisions";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-black font-sans">
      <Hero />
      <WhoWeAre />
      <SectionDivider color="stem" intensity={0.3} height={3} />
      <Divisions />
    </div>
  );
}
