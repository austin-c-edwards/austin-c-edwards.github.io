import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

// This would typically come from a database or API
const projectData = {
  id: "dreams-tracker",
  title: "Dreams Tracker",
  client: "SleepWell Inc.",
  duration: "3 months",
  year: "2023",
  image: "/placeholder.svg?height=600&width=1200",
  overview:
    "Dreams Tracker is a mobile application designed to help users track and analyze their sleep patterns, ultimately improving their overall sleep quality and well-being.",
  challenge:
    "The main challenge was to create an intuitive interface that would encourage users to consistently log their sleep data while providing meaningful insights without overwhelming them with complex statistics.",
  solution:
    "We developed a clean, user-friendly interface with a focus on quick daily inputs and easy-to-understand visualizations. The app uses machine learning to provide personalized recommendations based on user data and habits.",
  process: [
    {
      title: "Research and Discovery",
      description:
        "We conducted extensive user research to understand sleep patterns, common issues, and user expectations from a sleep tracking app.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Design and Prototyping",
      description:
        "Multiple iterations of wireframes and prototypes were created and tested with potential users to refine the user experience.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Development and Testing",
      description:
        "The app was developed using React Native for cross-platform compatibility. Rigorous testing was performed to ensure accuracy of sleep data collection and analysis.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ],
  outcome:
    "The Dreams Tracker app was successfully launched and has gained over 100,000 users in its first three months. User feedback has been overwhelmingly positive, with many reporting improved sleep quality and habits.",
}

export default function ProjectPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-background/80 backdrop-blur-sm border-b">
        <div className="max-w-7xl mx-auto px-[5%] h-16 flex items-center justify-between">
          <Link
            href="/#work"
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <div className="w-8 h-8 relative">
            <Image src="/logo.svg" alt="Logo" fill className="object-contain" />
          </div>
        </div>
      </header>

      <main className="flex-grow max-w-7xl mx-auto px-[5%] py-12">
        <section className="mb-12">
          <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
            <Image
              src={projectData.image || "/placeholder.svg"}
              alt={projectData.title}
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">{projectData.title}</h1>
          <div className="flex flex-wrap gap-4 text-muted-foreground mb-6">
            <p>Client: {projectData.client}</p>
            <p>Duration: {projectData.duration}</p>
            <p>Year: {projectData.year}</p>
          </div>
          <p className="text-lg max-w-3xl">{projectData.overview}</p>
        </section>

        <section className="mb-12 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
            <p>{projectData.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
            <p>{projectData.solution}</p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">The Process</h2>
          <div className="space-y-12">
            {projectData.process.map((step, index) => (
              <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 0 ? "md:order-1" : ""}>
                  <h3 className="text-xl font-medium mb-4">{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                <div className="relative aspect-video rounded-lg overflow-hidden">
                  <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">The Outcome</h2>
          <p className="text-lg max-w-3xl">{projectData.outcome}</p>
        </section>

        <section className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Interested in working together?</h2>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href="/#work">View More Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/#contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

