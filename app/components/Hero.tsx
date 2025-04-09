import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <>
      <div className="bg-[#F8F7F3]">
        {/* ======HERO SECTION====== */}
        <section className="">
          <div className="relative rounded-xl">
            <Image
              src="/assets/hero-img-large.png"
              alt="Hero Background Image"
              width={1440}
              height={922}
              sizes="100vw"
              priority
              quality={100}
              className="h-[750px] w-full lg:h-[922px] lg:w-[1440] xl:w-full object-cover"
            />
            <div className="flex flex-col justify-between  md:px-8 lg:px-24 pb-24 absolute inset-0 bg-black/60">
              <div className="pb-24 md:pb-0" />
              <div className="px-4 text-center text-[#FFFFFF] mt-10  max-w-5xl mx-auto">
                <p className="font-bold text-3xl md:text-5xl lg:text-7xl md:leading-16 lg:leading-20">
                  Turn Your <span className="text-[#47E0FF]">Space </span>{" "}
                  <br className="hidden md:block" /> into a Destination!
                </p>
                <p className="text-base p-3 md:text-base mt-3 mb-3 max-w-2xl mx-auto">
                  Have a space to share or looking for the perfect spot? List
                  unique spaces for rent or browse hidden gems for your next
                  event, photoshoot, or workspace. Connect, create, and bring
                  your vision to life in spaces tailored to every occasion!
                </p>
                <div className="bg-white mt-12 rounded-lg p-2.5 max-w-2xl mx-auto">
                  <form action="">
                    <div className="md:flex space-y-3 md:space-y-0  items-center">
                      <div className="flex flex-col items-start md:w-[75%]">
                        <label htmlFor="search" className="text-black text-xs">
                          What are you planning?
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your Email"
                          className="py-3 pr-3 pl-3 md:pl-0 w-full border-[1.3px] border-[#8F8F8F] rounded-md md:border-none md:rounded-none focus:outline-none text-black placeholder:text-[#8F8F8F] placeholder:text-xs"
                        />
                      </div>
                      <div className="flex flex-col items-start md:w-[75%]">
                        <label htmlFor="search" className="text-black text-xs">
                          Location
                        </label>
                        <input
                          type="text"
                          name="location"
                          placeholder="Lekki Lagos"
                          className="py-3 pr-3 pl-3 md:pl-0 w-full border-[1.3px] border-[#8F8F8F] rounded-md md:border-none md:rounded-none focus:outline-none text-black placeholder:text-[#8F8F8F] placeholder:text-xs"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="flex justify-between px-4">
                <a
                  href="https://api.whatsapp.com/send/?phone=2347038075053&text=Hello+there!+I'd+like+to+know+more+about+your+product+and+services.&type=phone_number&app_absent=0"
                  target="_blank"
                >
                  <div className="bg-[#ffffff] text-black p-2  px-6 h-fit flex justify-center items-center gap-2 rounded-3xl font-normal fixed bottom-10 right-10 z-[999] animate-bounce">
                    <div className="bg-[#019734] p-2 rounded-full flex items-center w-8 h-8">
                      <FaWhatsapp color="#FFFFFF" size={24} className="" />
                    </div>
                    Say Hi
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
