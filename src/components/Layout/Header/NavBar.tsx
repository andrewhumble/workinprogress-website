import Link from 'next/link'

const NavBar: React.FC = () => {
  const links = [{ id: 1, name: 'About', to: '/about' }, { id: 2, name: 'Videos', to: '/videos' }]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map((link) => (
          <li
            key={link.id}
            className="block text-black dark:text-gray-50 nav pl-3 pr-3"
          >
            <Link href={link.to}>
              <a className="nav">{link.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar
