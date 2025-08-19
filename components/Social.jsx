import React from 'react'
import { FaInstagram, FaFacebook, FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
function Social() {
  return (
          <div className="flex gap-4 text-2xl">
            <Link href={"https://www.facebook.com/Sothearak.gmail/"}>
              <FaFacebook />
            </Link>
            <Link href={"https://www.instagram.com/than_sothearak/"}>
              <FaInstagram />
            </Link>
            <Link href={"https://github.com/Than-sothearak"}>
              <FaGithub />
            </Link>
            <Link href={""}>
              <FaTelegram />
            </Link>
             <Link href={"https://www.linkedin.com/in/than-sothearak-146891243/"}>
              <FaLinkedin />
            </Link>
          </div>
  )
}

export default Social