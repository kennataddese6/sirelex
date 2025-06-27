import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-screen relative ">
      <Image
        src={"/facebooklogo.png"}
        width={20}
        height={20}
        alt="Facbeook logo"
        className="absolute z-20 left-[50%] top-1/4"
      />
      <Image
        src={"/instagramlogo.png"}
        width={30}
        height={30}
        alt="Instagram logo"
        className="absolute z-20 right-[10%] top-1/6"
      />
      <Image
        src={"/googlelogo.png"}
        width={25}
        height={25}
        alt="Google logo"
        className="absolute z-20 left-[44%] top-4/6"
      />
      <Image
        src={"/linkdelinlogo.png"}
        width={28}
        height={28}
        alt="Linkedln logo"
        className="absolute z-20 right-[8%] top-5/6"
      />
      <div className="absolute inset-0 backdrop-blur-2xl bg-white/10 border border-white/20 shadow-lg shadow-white/10 rounded-xl z-10" />
      <div className="w-[34rem] h-[34rem] bg-[dodgerblue] rounded-full absolute z-0 top-[60%] left-[71%] -translate-1/2  blur-2xl"></div>
      <div className="relative z-20 flex items-center h-screen px-36 gap-12">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">
            <span className="text-[dodgerblue] font-extrabold">Grow </span>
            your Business with our digital solutions
          </h1>
          <p className="mt-5 text-lg">
            Sirelex is a startup agency providing exceptional web
            design/development, Social Media Management, Search Engine
            Optimization, Video Editing, Logo Design and Graphic Design.
          </p>
          <button className="mt-5 bg-[dodgerblue] text-white py-2 px-8 rounded-full font-semibold cursor-pointer">
            Let&apos;s Chat
          </button>
          <span className="ml-3 text-sm"> +1 (530) 712-3425</span>
        </div>
        <div className=" bg-[url('/heroimagecropped.png')] bg-[center_top_3rem]  bg-no-repeat w-1/2 h-full bg-cover"></div>
      </div>
    </div>
  )
}

export default Hero
