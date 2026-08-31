import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Divisions from "@/components/Divisions";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-black font-sans">
      <Hero />
      <WhoWeAre />
      <Divisions />
    </div>
  );
}
