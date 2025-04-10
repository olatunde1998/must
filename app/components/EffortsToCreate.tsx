import { Download } from "lucide-react";
import Image from "next/image";

export default function EffortsToCreate() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-6 py-16 md:px-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2  md:gap-10">
          <div className="mb-12">
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
              더 나은 세상을 <br />
              만들어 가기 위한 노력.
            </p>
            <div className="text-sm space-y-6">
              <p className="leading-6">
                바른 인성과 성품을 고양하며 함께 나누는 활동을 통해 세대와
                나라를 초월한 커뮤니티를 만들어나가려고 노력하고 있습니다.{" "}
                <br /> 작은 담소와 삶의 지혜가 필요하신 모든 분들을 환영합니다.
              </p>
              <p>
                삶의 어려운 고충이 있으신 분들에게 작은 도움을 드립니다.
                법률적이거나 개인적으로 해결하기 어려운 문제들이 있으시다면 소담
                서포터즈에게 도움을 요청해주세요.
              </p>
            </div>

            <p className="text-base my-16">
              2025. 6. 출시 예정{" "}
              <span className="ml-4 text-[#8C5947]">
                커뮤니티 APP ‘소소담담’
              </span>
            </p>

            <button className="mt-8 rounded-3xl text-base border-[1.3px] border-gray-400 flex items-center gap-3 px-3 py-2 cursor-pointer">
              정기 후원
              <Download className="size-4" />
            </button>
          </div>
          <div className="flex justify-end">
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
          </div>
        </div>
      </section>
    </>
  );
}
