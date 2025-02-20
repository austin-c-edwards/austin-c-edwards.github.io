"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/footer"

const projects = [
  {
    title: "Dreams Tracker",
    subtitle: "Mobile App Design",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Design System",
    subtitle: "Web Development",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Mobile App",
    subtitle: "UI/UX Design",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "E-commerce Platform",
    subtitle: "Web Design",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Brand Identity",
    subtitle: "Graphic Design",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Data Visualization",
    subtitle: "Dashboard Design",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function Page() {
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b z-50">
        <nav className="max-w-7xl mx-auto px-[5%] h-16 flex items-center justify-between">
          <div className="flex gap-6">
            {["about", "work", "contact"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className="hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(`#${section}`)?.scrollIntoView({
                    behavior: "smooth",
                  })
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
            <Link
              href="/resume.pdf"
              className="hover:text-primary transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </Link>
          </div>
          <div className="w-8 h-8 relative">
            <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
          </div>
        </nav>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-[5%] pt-24">
        <section id="about" className="py-16">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">About me</h2>
          <div className="space-y-6 lg:max-w-[66%]">
            <div className="relative w-24 h-24 mb-6">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Designer portrait"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight">Digital Designer</h1>
            <p className="text-lg text-muted-foreground">
              Based in London, frequently in NYC and SF. Founder of{" "}
              <Link href="#" className="text-primary hover:underline">
                Design Studio
              </Link>
              .
            </p>
            <p className="text-muted-foreground">
              Bootstrapped profitable businesses, worked on consumer brands and led creative product teams. Worked with
              startups like{" "}
              <Link href="#" className="text-primary hover:underline">
                Company One
              </Link>
              ,{" "}
              <Link href="#" className="text-primary hover:underline">
                Company Two
              </Link>
              , and{" "}
              <Link href="#" className="text-primary hover:underline">
                Company Three
              </Link>
              , as well as hundreds of productivity and communication apps. Advisor to startups.
            </p>
          </div>
        </section>

        <section id="work" className="py-16">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <Link href={`/project/${project.title.toLowerCase().replace(/\s+/g, "-")}`} key={i} className="group">
                <Card className="overflow-hidden transition-shadow hover:shadow-md">
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-medium">{project.title}</h3>
                      <span className="text-sm text-muted-foreground">{project.subtitle}</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-6">Stay in Touch</h2>
          <div className="max-w-md">
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <Input placeholder="Your Name" />
              <Input type="email" placeholder="Your Email" />
              <Textarea placeholder="Your Message" rows={4} />
              <Button type="submit">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      <Footer>
        <div className="max-w-7xl mx-auto px-[5%] py-8 flex flex-col md:flex-row justify-between items-center">
          © 2023 Acme Corp. All rights reserved.
        </div>
      </Footer>
    </div>
  )
}

