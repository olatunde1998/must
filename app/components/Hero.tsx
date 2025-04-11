import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("HeroSection");
  return (
    <>
      <div id="introduction">
        <section className="max-w-6xl mx-auto rounded-full">
          <div className="relative rounded-full pt-16">
            <Image
              src="/assets/hero-image.png"
              alt="Hero Background Image"
              width={1440}
              height={800}
              sizes="100vw"
              priority
              quality={100}
              className="h-[550px] md:h-[650px] w-full xl:h-[680px] lg:w-[1280px]  object-cover lg:rounded-[50px]"
            />
            <div className="flex flex-col justify-between lg:rounded-[50px] pt-32 md:pt-40 lg:pt-42  md:px-8 lg:px-24 absolute inset-0 bg-black/20 lg:rounded-t-[133px]">
              <div className="px-4 text-center text-[#FFFFFF] mt-10  max-w-7xl mx-auto">
                <p className="text-base p-3 md:text-3xl mt-3 mb-3 max-w-2xl mx-auto">
                  {t("contentOne")}
                </p>
                <p className="font-bold text-3xl md:text-5xl md:leading-16 lg:leading-20">
                  {t("contentTwo")}
                </p>
                <p className="text-base p-3 md:text-3xl mt-3 mb-3 max-w-2xl mx-auto">
                  {t("contentThree")}
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
