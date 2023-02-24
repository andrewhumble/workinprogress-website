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
    <div className="sticky-nav w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-6 py-12 bg-opacity-60 px-12 mx-auto max-w-full">
      <div className="mx-auto">
        <div className="flex items-center flex-grow">
          <Logo className="ml-12 mx-auto" />
        </div>
      </div>
      <div className="flex items-center">
        <NavBar />
      </div>
    </div>
  )
}

export default Header
