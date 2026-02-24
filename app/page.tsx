import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Phone, MapPin, Code, Smartphone, Globe } from 'lucide-react'
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
      <section id="home" className="container mx-auto max-w-7xl space-y-8 pb-12 pt-8 md:pb-16 md:pt-12 lg:py-28 px-4">
        <div className="mx-auto flex max-w-[980px] flex-col items-center gap-6 text-center">
          <div className="relative mb-4">
            <Image
              src="/IMG_2307.jpg"
              alt="Profile - Bùi Văn Duy"
              width={160}
              height={160}
              className="rounded-full border-4 border-primary/20 mx-auto object-cover aspect-square"
              priority
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl lg:leading-[1.1]">
              Flutter Developer
            </h1>
            <p className="max-w-[700px] text-xl text-muted-foreground md:text-2xl font-light">
              Building scalable mobile solutions with Clean Architecture, optimized performance, and seamless API integration
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <Button size="lg" className="text-base px-8" asChild>
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8" asChild>
              <Link href="#contact">Let's Talk</Link>
            </Button>
          </div>
          <div className="flex items-center gap-6 mt-6">
            <Link href="https://github.com/duybui03" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link href="mailto:duyka207@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto max-w-7xl py-12 md:py-16 lg:py-20 px-4">
        <div className="mx-auto max-w-[980px]">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              About Me
            </h2>
            <p className="max-w-[650px] text-lg text-muted-foreground leading-relaxed">
              Flutter Developer specializing in Clean Architecture and high-performance mobile applications.
              Experienced in building scalable solutions with seamless API integration and optimized user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Stack Section */}
      <section className="container mx-auto max-w-7xl py-12 md:py-16 lg:py-20 px-4 bg-muted/30">
        <div className="mx-auto max-w-[980px]">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Technical Stack
            </h2>
            <p className="max-w-[650px] text-lg text-muted-foreground">
              Technologies and tools I use to build production-ready applications
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-background border-2 group-hover:border-primary transition-colors">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-medium">Flutter</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-background border-2 group-hover:border-primary transition-colors">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-medium">Dart</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-background border-2 group-hover:border-primary transition-colors">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-medium">AWS</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-background border-2 group-hover:border-primary transition-colors">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-medium">REST API</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-background border-2 group-hover:border-primary transition-colors">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-medium">Git</span>
            </div>
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-background border-2 group-hover:border-primary transition-colors">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <span className="text-sm font-medium">Firebase</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto max-w-7xl py-12 md:py-16 lg:py-20 px-4">
        <div className="mx-auto max-w-[1100px]">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[650px] text-lg text-muted-foreground">
              Real-world applications demonstrating technical expertise and business impact
            </p>
          </div>

          <div className="space-y-12">
            {/* Viettel Project */}
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 flex justify-center items-center">
                  <Image
                    src="/viettel.png"
                    alt="Viettel Enterprise Solution"
                    width={300}
                    height={180}
                    className="object-contain"
                  />
                </div>
                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge>Featured</Badge>
                    <Badge variant="outline">Enterprise</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Viettel Enterprise Solution</h3>

                  <div className="space-y-4 text-muted-foreground mb-6">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Context</p>
                      <p>Enterprise mobile application for Viettel's internal operations and customer management</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Role</p>
                      <p>Lead Flutter Developer - Architecture design, API integration, performance optimization</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Tech Stack</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">Flutter</Badge>
                        <Badge variant="secondary">Clean Architecture</Badge>
                        <Badge variant="secondary">REST API</Badge>
                        <Badge variant="secondary">State Management</Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Impact</p>
                      <p>Improved operational efficiency and streamlined customer service workflows</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* IoT Project */}
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-64 md:h-auto">
                  <Image
                    src="/aqua_farm.webp"
                    alt="Aqua Farm Mobile"
                          width={300}
                    height={180}
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">IoT</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Aqua Farm Mobile</h3>

                  <div className="space-y-4 text-muted-foreground mb-6">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Context</p>
                      <p>Real-time monitoring system for water quality parameters with cloud integration</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Role</p>
                      <p>Full-stack Developer - Mobile app development, AWS IoT integration, real-time data visualization</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Tech Stack</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">Flutter</Badge>
                        <Badge variant="secondary">AWS IoT Core</Badge>
                        <Badge variant="secondary">DynamoDB</Badge>
                        <Badge variant="secondary">MQTT</Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Impact</p>
                      <p>Enabled real-time monitoring with 99.9% uptime and instant alert notifications</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* GIS Project */}
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-64 md:h-auto">
                  <Image
                    src="/giss.avif"
                    alt="GIS Mapping Application"
                           fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">GIS</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">GIS Mapping Application</h3>

                  <div className="space-y-4 text-muted-foreground mb-6">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Context</p>
                      <p>Geographic information system for field data collection and mapping</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Role</p>
                      <p>Mobile Developer - Map integration, offline data sync, location services</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Tech Stack</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">Flutter</Badge>
                        <Badge variant="secondary">Google Maps API</Badge>
                        <Badge variant="secondary">SQLite</Badge>
                        <Badge variant="secondary">Geolocation</Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Impact</p>
                      <p>Reduced field data collection time by 40% with offline-first architecture</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* E-commerce Project */}
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-64 md:h-auto">
                  <Image
                    src="/loyalty_system.jpg"
                    alt="E-commerce Platform"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">E-commerce</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Customer Loyalty Platform</h3>

                  <div className="space-y-4 text-muted-foreground mb-6">
                    <div>
                      <p className="font-semibold text-foreground mb-1">Context</p>
                      <p>Loyalty points management system for retail businesses</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Role</p>
                      <p>Full-stack Developer - Backend API, admin dashboard, mobile integration</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Tech Stack</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">ReactJS</Badge>
                        <Badge variant="secondary">NodeJS</Badge>
                        <Badge variant="secondary">MongoDB</Badge>
                        <Badge variant="secondary">REST API</Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Impact</p>
                      <p>Increased customer retention by 25% through gamified rewards system</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience & Skills Section */}
      <section id="experience" className="container mx-auto max-w-7xl py-12 md:py-16 lg:py-20 px-4 bg-muted/30">
        <div className="mx-auto max-w-[980px]">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Experience
            </h2>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">Flutter Developer</CardTitle>
                  <Badge variant="secondary">Current</Badge>
                </div>
                <CardDescription className="text-base">RBC Tech Vietnam</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground">
                  • Developing IoT water quality monitoring systems with Flutter and AWS<br />
                  • Implementing Clean Architecture patterns for scalable mobile applications<br />
                  • Integrating real-time data synchronization with cloud services
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">Fresher Frontend Developer</CardTitle>
                  <Badge variant="outline">2025</Badge>
                </div>
                <CardDescription className="text-base">Novax</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  • Built web admin dashboards with modern frontend frameworks<br />
                  • Collaborated with backend teams for API integration
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">Information Technology Student</CardTitle>
                  <Badge variant="outline">2021 - 2025</Badge>
                </div>
                <CardDescription className="text-base">Hanoi University of Mining and Geology</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  High Quality Program • GPA: 3.38/4.0 • Expected graduation: June 2025
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto max-w-7xl py-12 md:py-16 lg:py-20 px-4">
        <div className="mx-auto max-w-[980px]">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Let's Build Together
            </h2>
            <p className="max-w-[650px] text-xl text-muted-foreground">
              Ready to build scalable mobile products together? Let's discuss your next project.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">Get In Touch</CardTitle>
                <CardDescription className="text-base">
                  Available for Flutter development opportunities and collaborations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:duyka207@gmail.com" className="text-muted-foreground hover:text-foreground">
                        Duyka207@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">0327 868 763</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Hanoi, Vietnam</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex flex-wrap gap-3 justify-center">
                  <Button variant="outline" asChild>
                    <Link href="https://github.com/duybui03" className="gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#" className="gap-2">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </Link>
                  </Button>
                  <Button asChild>
                    <Link href="mailto:duyka207@gmail.com" className="gap-2">
                      <Mail className="h-4 w-4" />
                      Send Email
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto max-w-7xl py-12 md:py-16 px-4 bg-muted/30">
        <div className="mx-auto max-w-[800px] text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Let's build scalable mobile products together
          </h2>
          <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
            Specialized in Flutter development with Clean Architecture, performance optimization, and seamless API integration
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="text-base px-8" asChild>
              <Link href="mailto:duyka207@gmail.com">Start a Project</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8" asChild>
              <Link href="https://github.com/duybui03">View GitHub</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between px-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Bui Van Duy. Flutter Developer.
          </p>
          <div className="flex items-center gap-6">
            <Link href="https://github.com/duybui03" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="mailto:duyka207@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
