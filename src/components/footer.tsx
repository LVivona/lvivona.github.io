import Link from "next/link"
import { Github } from "./icons/github"
export const Footer = () => <footer className="py-6 mt-8">
    <div className="container mx-auto flex justify-between items-center px-4 md:flex-row flex-col dark:text-white">
      {/* Left section */}
      <div>
        <Link href={"https://github.com/LVivona"}>
          <Github />
        </Link>
      </div>

      {/* Center section (Links) */}
      <div className="flex space-x-6">
        <p className="text-sm text-center">
          vivona.xyz. All rights reserved.
          <br />
          &copy; {new Date().getFullYear()}
        </p>
      </div>

      {/* Right section (Links) */}
      <div className="flex space-x-4">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </div>
  </footer>
