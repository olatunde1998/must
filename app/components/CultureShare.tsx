import Image from "next/image";

export default function CultureShare() {
  return (
    <>
      <section className="max-w-2xl mx-auto py-32">
        <p className="font-bold text-3xl md:text-5xl md:leading-16 lg:leading-20">
          새로운 문화 나눔을 만들어갑니다.
        </p>
        <div className="flex items-center gap-10 justify-center">
          <p className="font-bold text-3xl md:text-5xl md:leading-16 lg:leading-20">
            우리는
          </p>
          <Image
            src="/assets/book.png"
            alt="Book Image"
            width={280}
            height={94}
            sizes="100vw"
            priority
            quality={100}
            className="object-contain w-fit h-[94px] rounded-full"
          />
        </div>
        <p className="font-bold text-3xl md:text-5xl md:leading-16 lg:leading-20 text-center">
          사색의향기입니다.
        </p>
        <p className="text-base text-center max-w-xl mx-auto">
          사색의향기는 문학인들의 커뮤니티로서 “행복한 문화 나눔"을 통한 사회
          공헌과 선진적이고 건전한 사회 문화를 만들어나가기 위해 노력하는 비영리
          단체입니다.
        </p>
      </section>
    </>
  );
}
