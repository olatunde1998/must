import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Footer() {
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
              <span>개인정보 처리방침</span>
              <span>이용약관</span>
              <span className="text-[#7C7C7C]">
                고객센터 평일 08:00~19:00 (주말 및 공휴일 휴무)
              </span>
            </div>
            <div className="text-xs flex flex-col md:flex-row items-center space-y-3 space-x-6">
              <p className="mr-auto">
                사단법인 사색의향기
              </p>
              <p className="space-x-3 flex flex-row mr-auto justify-start items-center">
                <span className="text-[#7C7C7C]">이사장</span>
                <span>오덕균</span>
              </p>
              <p className="space-x-3 flex flex-row mr-auto justify-start items-center">
                <span className="text-[#7C7C7C]">고유번호</span>
                <span>355-82-00129</span>
              </p>
            </div>

            <div className="text-xs flex flex-col md:flex-row items-center justify-start space-y-3 md:space-y-0 space-x-6 my-3">
              <div className="space-x-3 flex flex-row mr-auto justify-start items-center md:flex-row">
                <p className="text-[#7C7C7C]">주소</p>
                <p>서울시 강남구 테헤란로 19길 28 이림빌딩3층(역삼동)</p>
              </div>
              <div className="space-x-3 flex flex-row mr-auto justify-start items-center">
                <p className="text-[#7C7C7C]">전화</p>
                <p>02-539-5101</p>
              </div>
              <div className="space-x-3 flex flex-row mr-auto justify-start items-center">
                <p className="text-[#7C7C7C]">팩스</p>
                <p>070-8668-5091</p>
              </div>
              <div className="space-x-3 flex flex-row mr-auto justify-start items-center">
                <p className="text-[#7C7C7C]">이메일</p>
                <p>culppy@culppy.com</p>
              </div>
            </div>
            <p className="text-xs">
              Copyright ⓒ 2025 사색의향기. All Rights Reserved
            </p>
          </div>
          <div className="lg:w-[30%]">
            <p className="text-2xl mb-4 font-semibold">뉴스레터 구독하기</p>
            <p>
              이메일 구독을 통해 사색의향기의 최신 소식과 교육 및 이벤트 소식을
              빠르게 받아보실 수 있습니다.
            </p>
            <div className="border-1 border-slate-200 mt-12 rounded-full p-1.5 md:p-2.5 w-full">
              <form action="">
                <div className="flex items-center">
                  <input
                    type="email"
                    name="email"
                    placeholder="이메일 구독신청"
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
