import Image from "next/image"
const Navbar = () => {
  return (
    <header className="pl-30 pr-36 flex justify-between items-center py-2 fixed z-20 top-0 w-full">
      <div>
        <Image src={"/logo.png"} width={75} height={75} alt="Logo Image" />
      </div>
      <ul className="flex gap-24">
        <li className="font-bold">Home</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </header>
  )
}

export default Navbar
