import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="bg-[#F8F7F3]">
        {/* ======HERO SECTION====== */}
        <section className="">
          <div className="relative rounded-br-full">
            <Image
              src="/assets/hero-image.png"
              alt="Hero Background Image"
              width={1440}
              height={800}
              sizes="100vw"
              priority
              quality={100}
              className="h-[550px] md:h-[650px] w-full xl:h-[780px] lg:w-[1440] xl:w-full object-cover rounded-br-[180px]"
            />
            <div className="flex flex-col justify-between pt-32 md:pt-40 lg:pt-48  md:px-8 lg:px-24 xl:pt-64 absolute inset-0 bg-black/40">
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
            <div className="rounded-t-4xl flex items-center justify-end space-x-2 bg-white p-4  absolute -bottom-10 right-0 w-[300px]">
              <ArrowLeft className="size-10 bg-[#111111] text-white p-2 rounded-full cursor-pointer" />
              <ArrowRight className="size-10 bg-[#111111] text-white p-2 rounded-full cursor-pointer" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
