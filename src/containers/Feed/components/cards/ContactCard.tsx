import CONFIG from "site.config"
import React from "react"
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai"

const ContactCard: React.FC = () => {
  return (
    <>
      <div className="p-1 mb-3 dark:text-white">👨‍👨‍👧‍👦 Team Members</div>
      <ul className="rounded-2xl bg-white dark:bg-zinc-700 p-1 flex flex-col">
        {CONFIG.profile.linkedin_andrew && (
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin_andrew}`}
            rel="noreferrer"
            target="_blank"
            className="  overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiFillLinkedin className="text-2xl flex-shrink-0" />
            <div className="text-sm">Andrew Humble</div>
          </a>
        )}
        {CONFIG.profile.linkedin_ella && (
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin_ella}`}
            rel="noreferrer"
            target="_blank"
            className="  overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiFillLinkedin className="text-2xl flex-shrink-0" />
            <div className="text-sm">Ella Johnson</div>
          </a>
        )}
        {CONFIG.profile.linkedin_steven && (
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin_steven}`}
            rel="noreferrer"
            target="_blank"
            className="  overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiFillLinkedin className="text-2xl flex-shrink-0" />
            <div className="text-sm">Steven Xu</div>
          </a>
        )}
        {CONFIG.profile.linkedin_darius && (
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin_darius}`}
            rel="noreferrer"
            target="_blank"
            className="  overflow-hidden p-3 hover:bg-gray-100 dark:hover:bg-zinc-700 rounded-2xl cursor-pointer flex items-center gap-3 text-gray-500 dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiFillLinkedin className="text-2xl flex-shrink-0" />
            <div className="text-sm">Darius</div>
          </a>
        )}
      </ul>
    </>
  )
}

export default ContactCard
