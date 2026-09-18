import { ClosingCta } from "../components/ClosingCta";
import { FeaturedMenu } from "../components/FeaturedMenu";
import { Hero } from "../components/Hero";
import { LocationsPreview } from "../components/LocationsPreview";
import { Marquee } from "../components/Marquee";
import { Reviews } from "../components/Reviews";
import { StoryBand } from "../components/StoryBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <FeaturedMenu />
      <StoryBand />
      <LocationsPreview />
      <Reviews />
      <ClosingCta />
    </>
  );
}
