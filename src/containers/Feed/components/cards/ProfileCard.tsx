import CONFIG from "site.config"
import Image from "next/image"
import React from "react"

type Props = {
  className?: string
}

const ProfileCard: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <div className="p-1 mb-3 dark:text-white">🔧 Our Project</div>
      <div className="w-full md:p-4 lg:p-4 rounded-2xl bg-white dark:bg-zinc-700 mb-9">
        <div className="bg-white p-1 flex flex-col items-center dark:bg-zinc-700 dark:text-white">
          <div className=" text-xl mt-3 italic font-bold">{CONFIG.profile.name}</div>
          <div className="text-sm mb-3 text-gray-500 dark:text-gray-400">
            {CONFIG.profile.role}
          </div>
        </div>
        <div className="relative w-full after:content-[''] after:block after:pb-[100%]">
          <div className="absolute w-full h-full after:content-[''] after:block after:pb-[100%]">
            <a href='https://ocw.mit.edu/' target="_blank" rel="noreferrer">
              <Image src={CONFIG.profile.image} layout="fill" alt="" sizes=
                "(max-width: 50%) 100vw, 50vw"
              />
            </a>
          </div>
        </div>
        <div className="bg-white p-1 flex flex-col items-center dark:bg-zinc-700 dark:text-white">
          <div className="text-sm mt-3 mb-2">{CONFIG.profile.bio}</div>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
