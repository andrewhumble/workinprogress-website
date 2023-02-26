import React from "react"
import Link from "next/link"
import CONFIG from "site.config"

type Props = {
  className?: string;
};

const Logo = ({ className }: Props) => {
  return (
    <Link href="/">
      <div className="flex items-center centered-div">
        <a aria-label={CONFIG.blog.title} href="" className={`logo ${className}`}>
          {CONFIG.blog.title}
        </a>
      </div>
    </Link>
  )
} 

export default Logo
