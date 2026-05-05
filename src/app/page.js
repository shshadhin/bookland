import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import HowItWorks from "@/components/HowItWorks";
import MarqueeSection from "@/components/MarqueeSection";
import Review from "@/components/Review";

export default function Home() {
  return (
    <div >
      <Banner></Banner>
      <FeaturedBooks></FeaturedBooks>
      <MarqueeSection></MarqueeSection>
      <HowItWorks></HowItWorks>
      <Review></Review>
    </div>
  );
}
