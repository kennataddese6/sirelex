import Image from "next/image"
import { FaArrowRightLong } from "react-icons/fa6"

const Hero = () => {
  return (
    <div>
      <div className="text-center mt-6  w-fit mx-auto px-10 relative">
        <Image
          src={"/image.png"}
          width={50}
          height={50}
          alt="herosmallimg"
          className="absolute left-0"
        />
        <h1 className="text-8xl font-semibold">
          AI-Powered Hiring,
          <br />
          Real-World Impact.
        </h1>
      </div>
      <p className="text-center mt-4 text-2xl text-black/60">
        Experience a recruitment revolution with our AI-powered platform that{" "}
        <br />
        streamlines hiring processes and enhance candidate management
      </p>
      <div className="mt-5 text-center">
        <button className="bg-[#fe6347] font-semibold py-2 px-6 text-white rounded-full">
          Get a Demo
          <FaArrowRightLong className="inline ml-2" fontSize={12} />
        </button>
        <button className="text-[#214dd0] font-bold ring-1 ring-[#214dd0] mx-3  py-2 px-6  rounded-full">
          Talk to our Tech Expert
        </button>
      </div>
    </div>
  )
}

export default Hero
