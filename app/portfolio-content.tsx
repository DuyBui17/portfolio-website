"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, Mail, Phone, MapPin, Code, Smartphone, Globe } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/components/language-provider"

export default function PortfolioContent() {
  const { t } = useLanguage()

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
                {t.nav.home}
              </Link>
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                {t.nav.about}
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                {t.nav.projects}
              </Link>
              <Link href="#experience" className="transition-colors hover:text-foreground/80">
                {t.nav.experience}
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                {t.nav.contact}
              </Link>
            </nav>
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
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
              {t.hero.title}
            </h1>
            <p className="max-w-[700px] text-xl text-muted-foreground md:text-2xl font-light">
              {t.hero.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            <Button size="lg" className="text-base px-8" asChild>
              <Link href="#projects">{t.hero.viewWork}</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8" asChild>
              <Link href="#contact">{t.hero.letsTalk}</Link>
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
              {t.about.title}
            </h2>
            <p className="max-w-[650px] text-lg text-muted-foreground leading-relaxed">
              {t.about.description}
            </p>
          </div>
        </div>
      </section>

      {/* Technical Stack Section */}
      <section className="container mx-auto max-w-7xl py-12 md:py-16 lg:py-20 px-4 bg-muted/30">
        <div className="mx-auto max-w-[980px]">
          <div className="flex flex-col items-center space-y-6 text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              {t.techStack.title}
            </h2>
            <p className="max-w-[650px] text-lg text-muted-foreground">
              {t.techStack.subtitle}
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
              {t.projects.title}
            </h2>
            <p className="max-w-[650px] text-lg text-muted-foreground">
              {t.projects.subtitle}
            </p>
          </div>

          <div className="space-y-12">
            {/* Viettel Project */}
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-48 md:h-auto flex items-center justify-center bg-muted/30">
                  <Image
                    src="/viettel.png"
                    alt="Viettel Enterprise Solution"
                    width={250}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge>{t.projects.featured}</Badge>
                    <Badge variant="outline">{t.projects.enterprise}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t.projects.viettel.title}</h3>

                  <div className="space-y-4 text-muted-foreground mb-6">
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.context}</p>
                      <p>{t.projects.viettel.context}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.role}</p>
                      <p>{t.projects.viettel.role}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.techStack}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">Flutter</Badge>
                        <Badge variant="secondary">Clean Architecture</Badge>
                        <Badge variant="secondary">REST API</Badge>
                        <Badge variant="secondary">State Management</Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.impact}</p>
                      <p>{t.projects.viettel.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* IoT Project */}
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-48 md:h-auto">
                  <Image
                    src="/aqua_farm.webp"
                    alt="IoT Water Quality Monitoring"
                    height={300}
                    width={300}
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{t.projects.iot}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t.projects.iotWater.title}</h3>

                  <div className="space-y-4 text-muted-foreground mb-6">
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.context}</p>
                      <p>{t.projects.iotWater.context}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.role}</p>
                      <p>{t.projects.iotWater.role}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.techStack}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">Flutter</Badge>
                        <Badge variant="secondary">AWS IoT Core</Badge>
                        <Badge variant="secondary">DynamoDB</Badge>
                        <Badge variant="secondary">MQTT</Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.impact}</p>
                      <p>{t.projects.iotWater.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* GIS Project */}
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-48 md:h-auto">
                  <Image
                    src="giss.avif"
                    alt="GIS Mapping Application"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{t.projects.gis}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t.projects.gisMapping.title}</h3>

                  <div className="space-y-4 text-muted-foreground mb-6">
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.context}</p>
                      <p>{t.projects.gisMapping.context}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.role}</p>
                      <p>{t.projects.gisMapping.role}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.techStack}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">Flutter</Badge>
                        <Badge variant="secondary">Google Maps API</Badge>
                        <Badge variant="secondary">SQLite</Badge>
                        <Badge variant="secondary">Geolocation</Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.impact}</p>
                      <p>{t.projects.gisMapping.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* E-commerce Project */}
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-48 md:h-auto">
                  <Image
                    src="loyalty_system.jpg"
                    alt="E-commerce Platform"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{t.projects.ecommerce}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t.projects.loyalty.title}</h3>

                  <div className="space-y-4 text-muted-foreground mb-6">
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.context}</p>
                      <p>{t.projects.loyalty.context}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.role}</p>
                      <p>{t.projects.loyalty.role}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.techStack}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">ReactJS</Badge>
                        <Badge variant="secondary">NodeJS</Badge>
                        <Badge variant="secondary">MongoDB</Badge>
                        <Badge variant="secondary">REST API</Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.impact}</p>
                      <p>{t.projects.loyalty.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Chatbot Project */}
            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all">
              <div className="grid md:grid-cols-5 gap-0">
                <div className="md:col-span-2 relative h-48 md:h-auto flex items-center justify-center bg-muted/30">
                  <Image
                    src="/chatbotFb.png"
                    alt="Facebook Chatbot"
                    width={450}
                    height={250}
                    className="object-contain"
                  />
                </div>
                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline">{t.projects.chatbot}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t.projects.facebookChatbot.title}</h3>
                  
                  <div className="space-y-4 text-muted-foreground mb-6">
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.context}</p>
                      <p>{t.projects.facebookChatbot.context}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.role}</p>
                      <p>{t.projects.facebookChatbot.role}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.techStack}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary">NodeJS</Badge>
                        <Badge variant="secondary">OpenAI API</Badge>
                        <Badge variant="secondary">Facebook Messenger API</Badge>
                        <Badge variant="secondary">Webhook</Badge>
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t.projects.impact}</p>
                      <p>{t.projects.facebookChatbot.impact}</p>
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
              {t.experience.title}
            </h2>
          </div>

          <div className="space-y-8 max-w-3xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{t.experience.flutter.title}</CardTitle>
                  <Badge variant="secondary">{t.experience.current}</Badge>
                </div>
                <CardDescription className="text-base">{t.experience.flutter.company}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground whitespace-pre-line">
                  {t.experience.flutter.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{t.experience.frontend.title}</CardTitle>
                  <Badge variant="outline">2025</Badge>
                </div>
                <CardDescription className="text-base">{t.experience.frontend.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground whitespace-pre-line">
                  {t.experience.frontend.description}
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{t.experience.student.title}</CardTitle>
                  <Badge variant="outline">2021 - 2025</Badge>
                </div>
                <CardDescription className="text-base">{t.experience.student.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {t.experience.student.description}
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
              {t.contact.title}
            </h2>
            <p className="max-w-[650px] text-xl text-muted-foreground">
              {t.contact.subtitle}
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2">
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">{t.contact.getInTouch}</CardTitle>
                <CardDescription className="text-base">
                  {t.contact.available}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">{t.contact.email}</p>
                      <a href="mailto:duyka207@gmail.com" className="text-muted-foreground hover:text-foreground">
                        Duyka207@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">{t.contact.phone}</p>
                      <p className="text-muted-foreground">0327 868 763</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-muted/50">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">{t.contact.location}</p>
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
                      {t.contact.sendEmail}
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
            {t.cta.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
            {t.cta.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="text-base px-8" asChild>
              <Link href="mailto:duyka207@gmail.com">{t.cta.startProject}</Link>
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8" asChild>
              <Link href="https://github.com/duybui03">{t.cta.viewGithub}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto max-w-7xl flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between px-4">
          <p className="text-sm text-muted-foreground">
            {t.footer.copyright}
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
