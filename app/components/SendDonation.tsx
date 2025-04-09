import { HeartHandshake } from "lucide-react";

export default function SendDonation() {
  return (
    <>
      <section className="bg-[#F8F4F3] flex flex-col justify-center items-center py-16 space-y-6">
        <p>기부를 통해 따뜻한 마음을 보내고 싶다면,</p>
        <p>후원계좌 안내</p>
        <p>국민 924501-01-351204 / 사단법인 사색의향기</p>
        <div className="flex items-center gap-6">
          <button className="rounded-3xl text-base border-[1.3px] border-gray-400 flex items-center gap-3 px-3 py-2 cursor-pointer">
            <HeartHandshake className="size-4" />
            정기 후원
          </button>
          <button className="rounded-3xl text-base border-[1.3px] border-gray-400 px-3 py-2 cursor-pointer">
            일시 후원
          </button>
        </div>
      </section>
    </>
  );
}
