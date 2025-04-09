import Hero from "@/app/components/Hero";
import CultureShare from "@/app/components/CultureShare";
import ChairPersonIntro from "@/app/components/ChairPersonIntro";
import CollaborativeWork from "@/app/components/CollaborativeWork";
import SendDonation from "@/app/components/SendDonation";

export default function Home() {
  return (
    <div className="min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <CultureShare />
      <ChairPersonIntro />
      <CollaborativeWork />
      <SendDonation />
    </div>
  );
}
