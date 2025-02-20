document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  // Assuming lucide is available globally or imported elsewhere. If not, you'll need to import it.
  // For example:
  // import * as lucide from 'lucide';
  // Or if using a CDN:
  // <script src="https://unpkg.com/lucide@latest/dist/lucide.js"></script>
  // In that case, lucide is available globally.
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  } else {
    console.warn("Lucide icons not initialized. Ensure Lucide is properly imported or included.")
  }

  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      })
    })
  })

  // Projects data
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

  // Populate projects grid
  const projectsGrid = document.getElementById("projects-grid")
  if (projectsGrid) {
    projects.forEach((project) => {
      const projectElement = document.createElement("a")
      projectElement.href = `project.html?project=${encodeURIComponent(project.title)}`
      projectElement.className = "group"
      projectElement.innerHTML = `
                <div class="overflow-hidden transition-shadow hover:shadow-md rounded-lg">
                    <div class="p-0">
                        <div class="relative aspect-[4/3]">
                            <img src="${project.image}" alt="${project.title}" class="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105">
                        </div>
                        <div class="p-4">
                            <h3 class="text-lg font-medium">${project.title}</h3>
                            <span class="text-sm text-muted-foreground">${project.subtitle}</span>
                        </div>
                    </div>
                </div>
            `
      projectsGrid.appendChild(projectElement)
    })
  }

  // Handle contact form submission
  const contactForm = document.getElementById("contact-form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
      console.log("Contact form submitted")
      // Add your form submission logic here
    })
  }

  // Project details page
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

  // Populate project details
  const urlParams = new URLSearchParams(window.location.search)
  const projectTitle = urlParams.get("project")
  if (projectTitle) {
    document.getElementById("project-image").src = projectData.image
    document.getElementById("project-title").textContent = projectData.title
    document.getElementById("project-client").textContent = `Client: ${projectData.client}`
    document.getElementById("project-duration").textContent = `Duration: ${projectData.duration}`
    document.getElementById("project-year").textContent = `Year: ${projectData.year}`
    document.getElementById("project-overview").textContent = projectData.overview
    document.getElementById("project-challenge").textContent = projectData.challenge
    document.getElementById("project-solution").textContent = projectData.solution
    document.getElementById("project-outcome").textContent = projectData.outcome

    const processContainer = document.getElementById("project-process")
    projectData.process.forEach((step, index) => {
      const stepElement = document.createElement("div")
      stepElement.className = "grid md:grid-cols-2 gap-8 items-center"
      stepElement.innerHTML = `
                <div class="${index % 2 === 0 ? "md:order-1" : ""}">
                    <h3 class="text-xl font-medium mb-4">${step.title}</h3>
                    <p>${step.description}</p>
                </div>
                <div class="relative aspect-video rounded-lg overflow-hidden">
                    <img src="${step.image}" alt="${step.title}" class="object-cover w-full h-full">
                </div>
            `
      processContainer.appendChild(stepElement)
    })
  }
})

