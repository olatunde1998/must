"use client";
import { collaborativeData } from "@/utils/CollaborativeData";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CollaborativeWork() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-16 md:px-24  md:py-32">
        <div className="flex gap-10 justify-center items-center">
          <p className="text-3xl md:text-4xl md:leading-16 lg:leading-20">
            함께하는 일
          </p>
          <p className="text-3xl md:text-4xl md:leading-16 lg:leading-20">
            우리의 흔적
          </p>
        </div>
        <main className="space-y-8">
          {collaborativeData.map((item, index) => (
            <section
              key={item.id}
              className="lg:flex justify-between items-end gap-10"
            >
              {index % 2 === 0 ? (
                <>
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
                      src={item.imageUrl}
                      alt="Collaborative work image"
                      width={752}
                      height={131}
                      sizes="100vw"
                      priority
                      quality={100}
                      className="object-contain w-fit h-[115px]"
                    />
                  </motion.div>

                  <div className="lg:max-w-[500px]">
                    <p className="text-base md:my-4">{item.content}</p>
                    <p className="font-bold text-3xl">{item.headings}</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="lg:max-w-[500px]">
                    <p className="text-base md:my-4">{item.content}</p>
                    <p className="font-bold text-3xl">{item.headings}</p>
                  </div>
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
                      src={item.imageUrl}
                      alt="Collaborative work image"
                      width={752}
                      height={131}
                      sizes="100vw"
                      priority
                      quality={100}
                      className="object-contain w-fit h-[115px]"
                    />
                  </motion.div>
                </>
              )}
            </section>
          ))}
        </main>
      </section>
    </>
  );
}
