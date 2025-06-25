import Image from "next/image"
import { FaArrowRightLong } from "react-icons/fa6"
const Navbar = () => {
  return (
    <header className="px-16 flex justify-between items-center py-5">
      <div>
        <Image src={"/image.png"} width={175} height={175} alt="Logo Image" />
      </div>
      <ul className="flex gap-16">
        <li>About Us</li>
        <li>Services</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>
      <button className="bg-[#214dd0] font-semibold py-2 px-6 text-white rounded-full">
        Get Demo
        <FaArrowRightLong />
      </button>
    </header>
  )
}

export default Navbar
