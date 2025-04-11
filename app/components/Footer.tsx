import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("FooterSection");
  return (
    <>
      <footer className="bg-[#222222] pb-24 md:pb-0">
        <section className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start justify-between px-6 py-16  md:px-20 md:py-24  text-white">
          <div className="lg:w-[70%]">
            <Image
              src="/assets/must-brand-logo.svg"
              alt="Must Brand logo"
              width={200}
              height={76}
              sizes="100vw"
              priority
              quality={100}
              className="object-contain w-fit h-[50px] hidden lg:block"
            />
            <div className="mt-4 flex flex-col md:flex-row  md:mt-8 lg:mt-20 mb-10 text-xs md:text-sm xl:text-base leading-6 space-x-6">
              <span>{t("contentOne")}</span>
              <span>{t("contentTwo")}</span>
              <span className="text-[#7C7C7C]">{t("contentThree")}</span>
            </div>
            <div className="text-xs flex flex-col md:flex-row items-center space-y-3 space-x-6">
              <p className="mr-auto">{t("contentFour")}</p>
              <p className="space-x-3 flex flex-row mr-auto justify-start items-center">
                <span className="text-[#7C7C7C]">{t("contentFive")}</span>
                <span>{t("contentSix")}</span>
              </p>
              <p className="space-x-3 flex flex-row mr-auto justify-start items-center">
                <span className="text-[#7C7C7C]">{t("contentSeven")}</span>
                <span>{t("contentEight")}</span>
              </p>
            </div>

            <div className="text-xs flex flex-col md:flex-row items-center justify-start space-y-3 md:space-y-0 space-x-6 my-3">
              <div className="space-x-3 flex flex-row mr-auto justify-start items-center md:flex-row">
                <p className="text-[#7C7C7C]">
                  주소
                  {t("contentNine")}
                </p>
                <p>{t("contentTen")}</p>
              </div>
              <div className="space-x-3 flex flex-row mr-auto justify-start items-center">
                <p className="text-[#7C7C7C]">{t("contentEleven")}</p>
                <p>{t("contentTwelve")}</p>
              </div>
              <div className="space-x-3 flex flex-row mr-auto justify-start items-center">
                <p className="text-[#7C7C7C]">{t("contentThirteen")}</p>
                <p>{t("contentFourteen")}</p>
              </div>
              <div className="space-x-3 flex flex-row mr-auto justify-start items-center">
                <p className="text-[#7C7C7C]">{t("contentFifteen")}</p>
                <p>{t("contentSixteen")}</p>
              </div>
            </div>
            <p className="text-xs">{t("contentSeventeen")}</p>
          </div>
          <div className="lg:w-[30%]">
            <p className="text-2xl mb-4 font-semibold">
              {t("contentEighteen")}
            </p>
            <p>{t("contentNineteen")}</p>
            <div className="border-1 border-slate-200 mt-12 rounded-full p-1.5 md:p-2.5 w-full">
              <form action="">
                <div className="flex items-center">
                  <input
                    type="email"
                    name="email"
                    placeholder={t("contentTwenty")}
                    className="w-[85%] p-2 focus:outline-none  placeholder:text-xs placeholder:text-white rounded-full"
                  />
                  <ArrowRight />
                </div>
              </form>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}
