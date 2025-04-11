"use client";
import { Download } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function EffortsToCreate() {
  const t = useTranslations("EffortsToCreateSection");
  return (
    <>
      <section
        id="small App"
        className="max-w-7xl mx-auto px-6 py-16 md:px-24 lg:py-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-2  md:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", duration: 3 }}
            className="mb-12"
          >
            <Image
              src="/assets/appicon.png"
              alt="Chairman Image"
              width={96}
              height={96}
              sizes="100vw"
              priority
              quality={100}
              className="object-contain w-[40px] lg:w-fit mb-4"
            />
            <p className="text-2xl font-medium md:text-4xl md:leading-16 lg:leading-16 mb-10">
              {t("contentOne")}
              <br />
              {t("contentTwo")}
            </p>
            <div className="text-sm space-y-6">
              <p className="leading-6">
                {t("contentThree")}
                <br />
                {t("contentFour")}
              </p>
              <p>{t("contentFive")}</p>
            </div>

            <p className="text-base my-16">
              {t("contentSix")}
              <span className="ml-4 text-[#8C5947]">{t("contentSeven")}</span>
            </p>

            <button className="mt-8 rounded-3xl text-base border-[1.3px] border-gray-400 flex items-center gap-3 px-3 py-2 cursor-pointer">
              {t("contentEight")}
              <Download className="size-4" />
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
            className="flex justify-end"
          >
            <Image
              src="/assets/app-screen.png"
              alt="Chairman Image"
              width={360}
              height={802}
              sizes="100vw"
              priority
              quality={100}
              className="object-cover w-fit  h-[700px]"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
