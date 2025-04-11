import CultureShare from "@/app/components/CultureShare";
import ChairPersonIntro from "@/app/components/ChairPersonIntro";
import CollaborativeWork from "@/app/components/CollaborativeWork";
import EffortsToCreate from "@/app/components/EffortsToCreate";
import SendDonation from "@/app/components/SendDonation";
import Companions from "@/app/components/Companions";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <CultureShare />
      <ChairPersonIntro />
      <CollaborativeWork />
      <SendDonation />
      <EffortsToCreate />
      <Companions />
      <Footer />
    </div>
  );
}
