import Image from "next/image"
import Start from "../Button/Start"

const Navbar = () => {
  return (
    <nav className="w-full max-w-7xl mx-auto flex items-center justify-between">
        <Image 
            src={"/brand/rankify-vertical-black.png"} 
            width={150} 
            height={150} 
            alt="Rank Up your HR productivity with Rankify"
        />

        <ul className="flex items-center gap-10 text-xl justify-evenly">
            <li>Solutions</li>
            <li>About</li>
            <li>Company</li>
        </ul>

        <Start href="/sign-in" text="Account"/>
    </nav>
  )
}

export default Navbar