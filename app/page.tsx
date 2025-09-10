import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Palette, Smartphone, Globe, Award, Calendar, User, Briefcase, Menu } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-14 items-center justify-center max-w-7xl px-4">
          <div className="flex w-full items-center justify-between">
            <Link className="flex items-center space-x-2" href="#home">
              <span className="font-bold">Portfolio</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link href="#home" className="transition-colors hover:text-foreground/80">
                Home
              </Link>
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                Experience
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container mx-auto max-w-7xl space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 px-4">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 text-center">
          <div className="relative mb-8">
            <Image
              src="/IMG_2307.jpg"
              alt="Profile - Bùi Văn Duy"
              width={200}
              height={200}
              className="rounded-full border-4 border-primary/20 mx-auto object-cover aspect-square"
              priority
            />
          </div>
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
            Hello, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Bui Van Duy
            </span>
          </h1>
          <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
            Flutter Developer with a passion for mobile app development.
          </p>
          <div className="flex gap-4 mt-6">
            <Button size="lg" asChild>
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <Link href="https://github.com/duybui03" className="text-muted-foreground hover:text-foreground">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="mailto:duyka207@gmail.com" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto max-w-7xl py-8 md:py-12 lg:py-24 px-4">
        <div className="mx-auto max-w-[980px]">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Badge variant="secondary" className="mb-4">
              <User className="mr-2 h-4 w-4" />
              About
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About me
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              A final-year Information Technology student at Hanoi University of Mining and Geology, currently developing practical skills in mobile and IoT at RBC Tech Vietnam.
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-12 place-items-stretch">
            <Card className="w-full">
              <CardHeader className="text-center">
                <Smartphone className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle>Mobile Development</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Specialized in Flutter for developing high-performance cross-platform mobile applications.
                </p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader className="text-center">
                <Code className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle>Full-stack Development</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Experience with ReactJS, VueJS, NodeJS to build complete web applications.
                </p>
              </CardContent>
            </Card>
            <Card className="w-full">
              <CardHeader className="text-center">
                <Globe className="h-10 w-10 text-primary mx-auto mb-2" />
                <CardTitle>Cloud & IoT</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">
                  Using AWS (EC2, Lambda, IoT Core, DynamoDB) for IoT systems and cloud computing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto max-w-7xl py-8 md:py-12 lg:py-24 bg-muted/50 px-4">
        <div className="mx-auto max-w-[980px]">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Badge variant="secondary" className="mb-4">
              <Briefcase className="mr-2 h-4 w-4" />
              Projects
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Explore some of the projects I have worked on, from IoT water quality monitoring systems
              to e-commerce web applications, dashboards and chatbots.
            </p>
          </div>

          <div className="mt-12 max-w-5xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-lg transition-shadow h-full project-card">
                    <CardHeader className="card-header">
                      <Image
                        src="/Wi-Fi-AK-01.webp"
                        alt="IoT Water Quality Monitoring System"
                        width={400}
                        height={200}
                        className="object-cover w-full"
                      />
                    </CardHeader>
                    <CardContent className="card-content">
                      <CardTitle className="mb-2">IoT Water Quality Monitoring System</CardTitle>
                      <CardDescription className="mb-4 card-description">
                        Real-time IoT water quality monitoring system using Flutter and AWS.
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline">Flutter</Badge>
                        <Badge variant="outline">AWS IoT Core</Badge>
                        <Badge variant="outline">DynamoDB</Badge>
                      </div>
                      <div className="flex gap-2 card-actions">
                        <Button size="sm" variant="outline" asChild>
                          <Link href="https://github.com/duybui03">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                        <Button size="sm" asChild>
                          <Link href="#">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-lg transition-shadow h-full project-card">
                    <CardHeader className="card-header">
                      <Image
                        src="/tichdiem.png"
                        alt="Customer Loyalty Points System"
                        width={400}
                        height={200}
                        className="object-cover w-full"
                      />
                    </CardHeader>
                    <CardContent className="card-content">
                      <CardTitle className="mb-2">Customer Loyalty Points System</CardTitle>
                      <CardDescription className="mb-4 card-description">
                        Customer loyalty points management website with intuitive interface and comprehensive management features.
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline">ReactJS</Badge>
                        <Badge variant="outline">NodeJS</Badge>
                        <Badge variant="outline">MongoDB</Badge>
                      </div>
                      <div className="flex gap-2 card-actions">
                        <Button size="sm" variant="outline" asChild>
                          <Link href="https://github.com/duybui03">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                        <Button size="sm" asChild>
                          <Link href="#">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-lg transition-shadow h-full project-card">
                    <CardHeader className="card-header">
                      <Image
                        src="/image.png"
                        alt="Facebook Fanpage Chatbot"
                        width={400}
                        height={200}
                        className="object-cover w-full"
                      />
                    </CardHeader>
                    <CardContent className="card-content">
                      <CardTitle className="mb-2">Facebook Fanpage Chatbot</CardTitle>
                      <CardDescription className="mb-4 card-description">
                        Automated chatbot for Facebook Fanpage with message processing and user interaction capabilities.
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline">NodeJS</Badge>
                        <Badge variant="outline">Facebook API</Badge>
                        <Badge variant="outline">Webhook</Badge>
                      </div>
                      <div className="flex gap-2 card-actions">
                        <Button size="sm" variant="outline" asChild>
                          <Link href="https://github.com/duybui03">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                        <Button size="sm" asChild>
                          <Link href="#">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>

                <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group hover:shadow-lg transition-shadow h-full project-card">
                    <CardHeader className="card-header">
                      <Image
                        src="/placeholder.jpg"
                        alt="E-commerce Backend and Dashboard"
                        width={400}
                        height={200}
                        className="object-cover w-full"
                      />
                    </CardHeader>
                    <CardContent className="card-content">
                      <CardTitle className="mb-2">E-commerce Backend & Dashboard</CardTitle>
                      <CardDescription className="mb-4 card-description">
                        Complete e-commerce backend system with admin dashboard using NodeJS and Flutter for mobile interface.
                      </CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <Badge variant="outline">NodeJS</Badge>
                        <Badge variant="outline">Flutter</Badge>
                        <Badge variant="outline">Express</Badge>
                        <Badge variant="outline">REST API</Badge>
                      </div>
                      <div className="flex gap-2 card-actions">
                        <Button size="sm" variant="outline" asChild>
                          <Link href="https://github.com/duybui03">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                        <Button size="sm" asChild>
                          <Link href="#">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section id="experience" className="container mx-auto max-w-7xl py-8 md:py-12 lg:py-24 px-4">
        <div className="mx-auto max-w-[980px]">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Badge variant="secondary" className="mb-4">
              <Award className="mr-2 h-4 w-4" />
              Experience & Skills
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Education & Experience
            </h2>
          </div>

          <div className="grid gap-8 mt-12 md:grid-cols-2 max-w-6xl mx-auto place-items-start">
            {/* Education & Experience */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Education & Experience</h3>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">2025</span>
                    </div>
                    <CardTitle>Fresher FE Developer</CardTitle>
                    <CardDescription>Novax</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Build web-admin
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">Present</span>
                    </div>
                    <CardTitle>Flutter Developer</CardTitle>
                    <CardDescription>RBC Tech Vietnam</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Building IoT water quality monitoring systems using Flutter and AWS.
                      Developing mobile applications and integrating with cloud services.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">2021 - 2025</span>
                    </div>
                    <CardTitle>Information Technology Student</CardTitle>
                    <CardDescription>Hanoi University of Mining and Geology</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      High Quality Program - GPA: 3.38/4.0.
                      Expected graduation: June 2025.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Mobile Development</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Flutter</Badge>
                    <Badge>Dart</Badge>
                    <Badge>Mobile UI/UX</Badge>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Web Development</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>ReactJS</Badge>
                    <Badge>VueJS</Badge>
                    <Badge>NodeJS</Badge>
                    <Badge>JavaScript</Badge>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Cloud & Database</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>AWS EC2</Badge>
                    <Badge>AWS Lambda</Badge>
                    <Badge>IoT Core</Badge>
                    <Badge>DynamoDB</Badge>
                    <Badge>MongoDB</Badge>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="font-semibold mb-2">Tools & OS</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>GitHub</Badge>
                    <Badge>Linux Ubuntu</Badge>
                    <Badge>VS Code</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto max-w-7xl py-8 md:py-12 lg:py-24 bg-muted/50 px-4">
        <div className="mx-auto max-w-[980px]">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Badge variant="secondary" className="mb-4">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Let's create something amazing together
            </h2>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              I am always ready to discuss job opportunities, mobile app projects, or simply chat about technology and IoT.
            </p>
          </div>

          <div className="grid gap-8 mt-12 md:grid-cols-2 max-w-5xl mx-auto place-items-stretch justify-items-center">
            <Card className="w-full max-w-md">
              <CardHeader className="text-center">
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>
                  Get in touch directly through the following channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                  <span>Duyka207@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-muted-foreground" />
                  <span>0327 868 763</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <span>Hanoi, Vietnam</span>
                </div>
                <Separator />
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href="https://github.com/duybui03">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href="#">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full max-w-md">
              <CardHeader className="text-center">
                <CardTitle>Send Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Project Collaboration"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Describe your project or question in detail..."
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row md:justify-between px-4">
          <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
            <p className="text-center text-sm leading-loose text-muted-foreground">
              © 2024 Bui Van Duy. All rights reserved.
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
