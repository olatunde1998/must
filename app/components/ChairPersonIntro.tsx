import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function ChairPersonIntro() {
  return (
    <>
      <section className="max-w-4xl mx-auto">
        <div className="flex items-end justify-between gap-20">
          <div className="max-w-[500px] mb-12">
            <p className="text-3xl md:text-5xl md:leading-16 lg:leading-20 mb-10">
              이사장 인사말.
            </p>
            <div className="text-sm">
              <p>안녕하세요, 사색의향기 이사장 오덕균 입니다.</p>
              <p className="my-2.5">
                사색의향기는 ‘행복한 문화 나눔’을 통해 더 나은 사회를
                만들어가고자 노력해왔습니다. 앞으로도 문학과 인문학의 가치를
                공유하며, 열린 커뮤니티로서 함께 성장하겠습니다.
              </p>
              <p>많은 관심과 응원 부탁드립니다. 감사합니다.</p>
            </div>
            <div className="mt-6 flex items-center">
              <p>사단법인 사색의향기 이사장 오덕균</p>
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
            <button className="flex items-center gap-3 cursor-pointer">
              인터뷰 더 보기{" "}
              <span>
                <ArrowLeft />
              </span>
            </button>
          </div>
          <div className="xl:mr-[-272px]">
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
          </div>
        </div>

        <div className="md:flex justify-between gap-10 mt-32">
          <div className="flex flex-col items-center">
            <Image
              src="/assets/deokgyun-avatar.png"
              alt="Chairperson Avatar Image"
              width={270}
              height={270}
              sizes="100vw"
              priority
              quality={100}
              className="object-contain w-fit h-[200px] rounded-full bg-gray-300"
            />
            <p className="mt-3 text-lg font-semibold">오덕균 이사장</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/assets/junho-avatar.png"
              alt="Director Avatar Image"
              width={270}
              height={270}
              sizes="100vw"
              priority
              quality={100}
              className="object-contain w-fit h-[200px] rounded-full bg-gray-300"
            />
            <p className="mt-3 text-lg font-semibold">정준호 이사</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/assets/hyukjun-avatar.png"
              alt="Advisor Avatar Image"
              width={270}
              height={270}
              sizes="100vw"
              priority
              quality={100}
              className="object-contain w-fit h-[200px] rounded-full bg-gray-300"
            />
            <p className="mt-3 text-lg font-semibold">권혁준 고문</p>
          </div>
        </div>
      </section>
    </>
  );
}
