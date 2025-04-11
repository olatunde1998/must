"use client";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ChairPersonIntro() {
  const t = useTranslations("ChairPersonIntroSection");
  const keys = ["memberOne", "memberTwo", "memberThree"];
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 md:px-24">
        <div className="flex flex-col-reverse md:flex-row items-end justify-between gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 3 }}
            className="max-w-[500px] mb-12"
          >
            <p className="text-2xl md:text-5xl md:leading-16 lg:leading-20 mb-10">
              {/* 이사장 인사말. */}
              {t("contentOne")}
            </p>
            <div className="text-sm">
              <p>{t("contentTwo")}</p>
              <p className="my-2.5">{t("contentThree")}</p>
              <p>{t("contentFour")}</p>
            </div>
            <div className="mt-6 flex items-center">
              <p>{t("contentFive")}</p>
              <div>
                <Image
                  src="/assets/signature.png"
                  alt="Signature Image"
                  width={187}
                  height={79}
                  sizes="100vw"
                  priority
                  quality={100}
                  className="object-contain w-fit h-[79px]"
                />
              </div>
            </div>
            <button className="flex items-center gap-3 cursor-pointer">
              {t("contentSix")}
              <span>
                <ChevronRight />
              </span>
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 8px rgb(255, 255, 255)",
            }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 3 }}
            className="xl:mr-[-175px]"
          >
            <Image
              src="/assets/chairman-image.png"
              alt="Chairman Image"
              width={660}
              height={135}
              sizes="100vw"
              priority
              quality={100}
              className="object-contain w-fit"
            />
          </motion.div>
        </div>

        <div className="space-y-10 md:space-y-0 md:flex justify-between md:gap-10 md:mt-32 max-w-5xl">
          {keys.map((item, index) => {
            const imageUrl = t(`teamMember.${item}.imageUrl`);
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 3 }}
                key={index}
                className="flex flex-col items-center"
              >
                <Image
                  src={imageUrl}
                  alt="Chairperson Avatar Image"
                  width={270}
                  height={270}
                  sizes="100vw"
                  priority
                  quality={100}
                  className="object-contain w-fit max-h-[200px] md:max-h-none lg:h-[200px] rounded-full bg-gray-300"
                />
                <p className="mt-3 text-base md:text-lg font-semibold">
                  {t(`teamMember.${item}.name`)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
