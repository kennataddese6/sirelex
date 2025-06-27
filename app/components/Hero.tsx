const Hero = () => {
  return (
    <div className="h-screen relative ">
      <div className="absolute inset-0 backdrop-blur-2xl bg-white/10 border border-white/20 shadow-lg shadow-white/10 rounded-xl z-10" />
      <div className="w-[34rem] h-[34rem] bg-[dodgerblue] rounded-full absolute z-0 top-[60%] left-[71%] -translate-1/2  blur-2xl"></div>
      <div className="relative z-20 flex items-center h-screen px-36 gap-12">
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">
            <span className="text-[dodgerblue] font-extrabold">Grow </span>
            your Buisness with our digital solutions
          </h1>
          <p className="mt-5 text-lg">
            Sirelex is a startup agency providing exceptional web
            design/development, Social Media Management, Search Engine
            Optimization, Video Editing, Logo Design and Graphic Design more.
          </p>
          <button className="mt-5 bg-[dodgerblue] text-white py-2 px-8 rounded-full font-semibold cursor-pointer">
            Let's Chat
          </button>
          <span className="ml-3"> +1 (530) 712-3425</span>
        </div>
        <div className="bg-[url('/heroimage.png')] bg-[right_top_4rem] bg-size-[auto_42rem] bg-no-repeat w-1/2 h-full bg-cover"></div>
        {/*        <div className="w-1/2">
          <Image
            src={"/heroimage.png"}
            width={975}
            height={775}
            alt="hero image"
            className="w-full h-screen object-cover"
          />
        </div> */}
      </div>
    </div>
  )
}

export default Hero
