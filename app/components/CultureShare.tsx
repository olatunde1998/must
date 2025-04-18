"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Book from "@/public/assets/book.png";

export default function CultureShare() {
  const t = useTranslations("CultureShareSection");
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", duration: 3 }}
        className="max-w-2xl mx-auto px-6 py-24 md:py-32"
      >
        <p className="font-bold text-xl text-center md:text-4xl md:leading-16 lg:leading-20">
          {t("contentOne")}
        </p>
        <div className="flex items-center gap-3 md:gap-10 justify-center">
          <p className="font-bold text-xl md:text-4xl md:leading-16 lg:leading-20">
            {t("contentTwo")}
          </p>
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
          >
            <Image
              src={Book}
              alt="Book Image"
              width={280}
              height={94}
              sizes="100vw"
              priority
              quality={100}
              className="object-contain w-fit h-[45px] md:h-[94px] rounded-full cursor-pointer"
            />
          </motion.div>
        </div>
        <p className="font-bold text-2xl md:text-4xl md:leading-16 lg:leading-20 text-center">
          {t("contentThree")}
        </p>
        <p className="text-xs mt-3 md:mt-0 md:text-base text-center max-w-xl mx-auto">
          {t("contentFour")}
        </p>
      </motion.section>
    </>
  );
}
