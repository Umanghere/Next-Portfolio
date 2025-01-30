"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({links}) => {
    const pathName = usePathname()
  return (
    <div>
        <Link className={`rounded p-1 ${pathName === links.url && "bg-black text-white"}`} href={links.url} >{links.title}</Link>
      
    </div>
  )
}

export default NavLink
