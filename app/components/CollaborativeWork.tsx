import Image from "next/image";

export default function CollaborativeWork() {
  return (
    <>
      <section className="max-w-7xl px-24 mx-auto py-32">
        <div className="flex gap-10 justify-center items-center">
          <p className="text-3xl md:text-4xl md:leading-16 lg:leading-20">
            함께하는 일
          </p>
          <p className="text-3xl md:text-4xl md:leading-16 lg:leading-20">
            우리의 흔적
          </p>
        </div>

        <main className="space-y-8">
          <section className="md:flex justify-between items-end gap-10">
            <Image
              src="/assets/work-one-image.png"
              alt="Collaborative work image"
              width={752}
              height={131}
              sizes="100vw"
              priority
              quality={100}
              className="object-contain w-fit h-[115px]"
            />
            <div className="max-w-[500px]">
              <p className="text-base my-4">
                깊은 사유와 따뜻한 대화가 어우러진 시간 마음을 울리는 문학과
                인문학의 이야기
              </p>
              <p className="font-bold text-3xl">인문학 콘서트</p>
            </div>
          </section>
          <section className="md:flex justify-between items-end gap-10">
            <div className="max-w-[500px]">
              <p className="text-base my-4">
                깊은 사유와 따뜻한 대화가 어우러진 시간 마음을 울리는 문학과
                인문학의 이야기
              </p>
              <p className="font-bold text-3xl">인문학 콘서트</p>
            </div>
            <Image
              src="/assets/work-two-image.png"
              alt="Collaborative work image"
              width={752}
              height={131}
              sizes="100vw"
              priority
              quality={100}
              className="object-contain w-fit h-[115px]"
            />
          </section>
          <section className="md:flex justify-between items-end gap-10">
            <Image
              src="/assets/work-three-image.png"
              alt="Collaborative work image"
              width={752}
              height={131}
              sizes="100vw"
              priority
              quality={100}
              className="object-contain w-fit h-[115px]"
            />
            <div className="max-w-[500px]">
              <p className="text-base my-4">
                깊은 사유와 따뜻한 대화가 어우러진 시간 마음을 울리는 문학과
                인문학의 이야기
              </p>
              <p className="font-bold text-3xl">인문학 콘서트</p>
            </div>
          </section>
          <section className="md:flex justify-between items-end gap-10">
            <div className="max-w-[500px]">
              <p className="text-base my-4">
                깊은 사유와 따뜻한 대화가 어우러진 시간 마음을 울리는 문학과
                인문학의 이야기
              </p>
              <p className="font-bold text-3xl">인문학 콘서트</p>
            </div>
            <Image
              src="/assets/work-four-image.png"
              alt="Collaborative work image"
              width={752}
              height={131}
              sizes="100vw"
              priority
              quality={100}
              className="object-contain w-fit h-[115px]"
            />
          </section>
        </main>
      </section>
    </>
  );
}
