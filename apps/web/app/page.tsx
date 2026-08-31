import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Divisions from "@/components/Divisions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black font-sans">
      <Hero />
      <WhoWeAre />
      <Divisions />
    </main>
  );
}
