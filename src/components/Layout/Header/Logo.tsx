import React from "react"
import Link from "next/link"
import CONFIG from "site.config"

type Props = {}

const Logo: React.FC<Props> = () => {
  return (
    <Link href="/">
      <div className="flex items-center">
        <a aria-label={CONFIG.blog.title} href="">
          {CONFIG.blog.title}
        </a>
      </div>
    </Link>
  )
} 

export default Logo
