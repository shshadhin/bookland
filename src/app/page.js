import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import MarqueeSection from "@/components/MarqueeSection";
import Review from "@/components/Review";

export default function Home() {
  return (
    <div >
      <Banner></Banner>
      <MarqueeSection></MarqueeSection>
      <HowItWorks></HowItWorks>
      <Review></Review>
      <Footer></Footer>
    </div>
  );
}
