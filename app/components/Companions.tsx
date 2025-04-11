import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
// import { useTranslations } from "next-intl";

export default function Companions() {
  // const t = useTranslations("CollaborativeWorkSection");
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 md:pl-20  flex items-center justify-between gap-20 lg:gap-32 pb-24 lg:pb-40">
        <div className="hidden md:flex md:flex-col gap-10">
          <p className="text-2xl font-medium md:text-2xl lg:text-4xl md:leading-16 lg:leading-16 mb-10">
            함께하는 이들
          </p>
          <div className="flex items-center space-x-2">
            <ArrowLeft className="size-10 bg-[#111111] text-white p-2 rounded-full" />
            <ArrowRight className="size-10 bg-[#111111] text-white p-2 rounded-full" />
          </div>
        </div>

        <div className="flex justify-between space-x-12 overflow-x-auto lg:overflow-x-visible">
          <div className="flex-shrink-0 lg:flex-shrink-1 flex flex-col gap-10 items-center w-[240px] lg:w-full md:max-w-[450px] justify-center text-center">
            <Image
              src="/assets/companion-image-one.png"
              alt="Companion Image"
              width={100}
              height={270}
              sizes="100vw"
              priority
              quality={100}
              className="object-contain w-[100px] h-fit md:w-fit md:h-[100px]"
            />
            <div>
              <p className="my-3 text-lg font-semibold">(주)행복한사람들</p>
              <p>행복한 날, 행복한 사람들과 함께하는 특별한 날을 선사합니다.</p>
            </div>
          </div>
          <div className="flex-shrink-0 lg:flex-shrink-1 flex flex-col gap-10 items-center w-[240px] lg:w-full lg:max-w-[450px] justify-center text-center">
            <Image
              src="/assets/companion-image-two.png"
              alt="Companion Image"
              width={100}
              height={270}
              sizes="100vw"
              priority
              quality={100}
              className="object-contain w-fit h-[100px]"
            />
            <div>
              <p className="my-3 text-lg font-semibold">바른댓글 실천연대</p>
              <p>바른댓글 정착으로 아름다운 사회를 만들어갑니다.</p>
            </div>
          </div>
          <div className="flex-shrink-0 lg:flex-shrink-1 flex flex-col gap-10 items-center w-[240px] lg:w-full lg:max-w-[450px] justify-center text-center">
            <Image
              src="/assets/companion-image-three.png"
              alt="Companion Image"
              width={100}
              height={270}
              sizes="100vw"
              priority
              quality={100}
              className="object-contain w-fit h-[100px]"
            />
            <div>
              <p className="my-3 text-lg font-semibold">아트리안</p>
              <p>
                생활미술시장의 뉴 패러다임을 제안하는 상설 아트갤러리 프로젝트.
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 lg:flex-shrink-1 flex flex-col gap-10 items-center w-[240px] lg:w-full md:max-w-[450px] justify-center text-center">
            <Image
              src="/assets/companion-image-four.png"
              alt="Companion Image"
              width={100}
              height={100}
              sizes="100vw"
              priority
              quality={100}
              className="object-contain w-fit h-[80px]"
            />
            <div>
              <p className="my-3 text-lg font-semibold">대한민국위멘위원회</p>
              <p>어린이를 위한 위대한 멘토, 위멘이 함께 합니다.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
