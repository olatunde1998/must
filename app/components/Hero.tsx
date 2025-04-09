import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="bg-[#F8F7F3]">
        {/* ======HERO SECTION====== */}
        <section className="">
          <div className="relative rounded-xl">
            <Image
              src="/assets/must-prototype.png"
              alt="Hero Background Image"
              width={1440}
              height={800}
              sizes="100vw"
              priority
              quality={100}
              className="h-[750px] w-full lg:h-[850px] lg:w-[1440] xl:w-full object-cover"
            />
            <div className="flex flex-col justify-between  md:px-8 lg:px-24 pt-64 absolute inset-0 bg-black/60">
              <div className="px-4 text-center text-[#FFFFFF] mt-10  max-w-7xl mx-auto">
                <p className="text-base p-3 md:text-3xl mt-3 mb-3 max-w-2xl mx-auto">
                  특별한 나눔
                </p>
                <p className="font-bold text-3xl md:text-5xl md:leading-16 lg:leading-20">
                  함께하는 마음이 만드는 소중한 변화
                </p>
                <p className="text-base p-3 md:text-3xl mt-3 mb-3 max-w-2xl mx-auto">
                  즐거움과 나눔이 있는 감동의 순간
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
