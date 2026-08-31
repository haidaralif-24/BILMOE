import Hero from "@/components/Hero";
import Divisions from "@/components/Divisions";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-black font-sans">
      <Hero />
      <Divisions />
    </div>
  );
}
