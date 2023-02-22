import CONFIG from "@/site.config"
import Link from "next/link"
import React from "react"

const d = new Date()
const y = d.getFullYear()
const from = +CONFIG.since

type Props = {
  className?: string
}

const Footer: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
    </div>
  )
}

export default Footer
