import Link from "next/link"
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t mt-16">
      <div className="max-w-7xl mx-auto px-[5%] py-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-6 mb-4 md:mb-0">
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <Twitter className="w-5 h-5" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </Link>
          <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <Youtube className="w-5 h-5" />
          </Link>
        </div>
        <p className="text-sm text-muted-foreground">© {currentYear} Your Name. All rights reserved.</p>
      </div>
    </footer>
  )
}

