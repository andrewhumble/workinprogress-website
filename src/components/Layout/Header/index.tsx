import { useRef } from "react"
import CONFIG from "site.config"
import NavBar from "./NavBar"
import Logo from "./Logo"
import ThemeToggle from "./ThemeToggle"

type Props = {
  fullWidth: boolean
}

const Header: React.FC<Props> = ({ fullWidth }) => {
  const navRef = useRef(null)

  return (
    <div className="sticky-nav grid grid-cols-2 grid-rows-2 gap-7 h-6 flex flex-row items-center md:mb-6 py-20 px-40">
      <div className="flex flex-grow">
        <Logo className="dark:text-gray-50 logo" />
      </div>
      <div className="row-span-2 justify-self-end">
        <NavBar />
      </div>
      <div className="pl-2">
        <div className="flex flex-grow">
          <i className="nav dark:text-gray-50">A CSCI 4800 Spring 2023 Project</i>
        </div>
      </div>
    </div>
  )
}

export default Header
