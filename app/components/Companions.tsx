import { ArrowLeft, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
// import { companionData } from "@/utils/CompanionData";
// import { motion } from "framer-motion";

export default function Companions() {
  const t = useTranslations("CompanionsSection");
  const keys = [
    "companionOne",
    "companionTwo",
    "companionThree",
    "companionFour",
  ];
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 md:pl-20  flex items-center justify-between gap-20 lg:gap-32 pb-24 lg:pb-40">
        <div className="hidden md:flex md:flex-col gap-10">
          <p className="text-2xl font-medium md:text-2xl lg:text-4xl md:leading-16 lg:leading-16 mb-10">
            {t("contentOne")}
          </p>
          <div className="flex items-center space-x-2">
            <ArrowLeft className="size-10 bg-[#111111] text-white p-2 rounded-full" />
            <ArrowRight className="size-10 bg-[#111111] text-white p-2 rounded-full" />
          </div>
        </div>

        <div className="flex justify-between space-x-12 overflow-x-auto lg:overflow-x-visible">
          {keys.map((item, index) => {
            const imageUrl = t(`companion.${item}.imageUrl`);
            const headings = t(`companion.${item}.headings`);
            const content = t(`companion.${item}.content`);
            return (
              <div
                key={index}
                className="flex-shrink-0 lg:flex-shrink-1 flex flex-col gap-10 items-center w-[240px] lg:w-full md:max-w-[450px] justify-center text-center"
              >
                <Image
                  src={imageUrl}
                  alt="Companion Image"
                  width={100}
                  height={270}
                  sizes="100vw"
                  priority
                  quality={100}
                  className="object-contain w-[100px] h-fit md:w-fit md:h-[100px]"
                />
                <div>
                  <p className="my-3 text-lg font-semibold">{headings}</p>
                  <p>{content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
