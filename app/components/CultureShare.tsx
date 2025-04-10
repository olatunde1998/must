"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CultureShare() {
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
          새로운 문화 나눔을 만들어갑니다.
        </p>
        <div className="flex items-center gap-3 md:gap-10 justify-center">
          <p className="font-bold text-xl md:text-4xl md:leading-16 lg:leading-20">
            우리는
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
              src="/assets/book.png"
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
          사색의향기입니다.
        </p>
        <p className="text-xs mt-3 md:mt-0 md:text-base text-center max-w-xl mx-auto">
          사색의향기는 문학인들의 커뮤니티로서 “행복한 문화 나눔&quot;을 통한
          사회 공헌과 선진적이고 건전한 사회 문화를 만들어나가기 위해 노력하는
          비영리 단체입니다.
        </p>
      </motion.section>
    </>
  );
}
