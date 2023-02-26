import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const NavBar: React.FC = () => {
  const links = [{ id: 1, name: 'About', to: '/about' }, { id: 2, name: 'Videos', to: '/videos' }]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row items-center">
        {links.map((link) => (
          <li
            key={link.id}
            className="block text-black dark:text-gray-50 nav"
          >
            <Link href={link.to}>
              <button className="p-3">
                <a className="nav">{link.name}</a>
              </button>
            </Link>
          </li>
        ))}
        <li className="block text-black dark:text-gray-50 nav">
          <button className="p-3">
            <ThemeToggle />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default NavBar
