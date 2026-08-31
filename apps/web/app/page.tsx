import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import Divisions from "@/components/Divisions";
import FullPageScroller from "@/components/FullPageScroller";

export default function Home() {
  return (
    <FullPageScroller>
      <section data-fullpage-section="true" className="h-screen w-full">
        <Hero />
      </section>
      <section data-fullpage-section="true" className="h-screen w-full">
        <WhoWeAre />
      </section>
      <section data-fullpage-section="true" className="h-screen w-full">
        <Divisions />
      </section>
    </FullPageScroller>
  );
}
