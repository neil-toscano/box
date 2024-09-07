import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'
import Image from 'next/image'

export default function Component() {
  const personalInfo = {
    name: "Neil Toscano",
    title: "Desarrollador Web & Diseñador UI/UX",
    avatar: "https://res.cloudinary.com/dvult5ws1/image/upload/v1725681278/foto_cjafrg.jpg",
    bio: "Apasionado por crear experiencias digitales hermosas y funcionales. Siempre aprendiendo, siempre creciendo.",
  }

  const socialLinks = [
    { name: "Twitter", url: "https://twitter.com/alexjohnson", icon: <Twitter className="h-5 w-5" /> },
    { name: "GitHub", url: "https://github.com/alexjohnson", icon: <Github className="h-5 w-5" /> },
    { name: "LinkedIn", url: "https://linkedin.com/in/alexjohnson", icon: <Linkedin className="h-5 w-5" /> },
    { name: "Instagram", url: "https://instagram.com/alexjohnson", icon: <Instagram className="h-5 w-5" /> },
  ]

  const portfolioImages = [
    { src: "https://nextui-docs-v2.vercel.app/images/album-cover.png?height=400&width=600", alt: "Proyecto 1" },
    { src: "https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg?height=400&width=600", alt: "Proyecto 2" },
    { src: "https://github.com/shadcn.png", alt: "Proyecto 3" },
    { src: "https://github.com/shadcn.png", alt: "Proyecto 4" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 p-8">
      <Card className="max-w-4xl mx-auto overflow-hidden bg-white bg-opacity-10 backdrop-blur-md">
        <CardContent className="p-8">
          <div className="flex flex-col items-center mb-8">
            <Avatar className="w-32 h-32 mb-4">
              <AvatarImage src={personalInfo.avatar} alt={personalInfo.name} />
              <AvatarFallback>{personalInfo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold text-white mb-2">{personalInfo.name}</h1>
            <p className="text-xl text-emerald-200">{personalInfo.title}</p>
          </div>

          <Card className="bg-white bg-opacity-20 backdrop-blur-md mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Quién soy</h2>
              <p className="text-emerald-100">{personalInfo.bio}</p>
            </CardContent>
          </Card>

          <Card className="bg-white bg-opacity-20 backdrop-blur-md mb-8">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Qué hago</h2>
              <ul className="list-disc list-inside text-emerald-100">
                <li>Diseño de interfaces de usuario intuitivas y atractivas</li>
                <li>Desarrollo de aplicaciones web responsivas y de alto rendimiento</li>
                <li>Creación de experiencias de usuario memorables y accesibles</li>
                <li>Optimización de sitios web para SEO y velocidad de carga</li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="outline" size="icon" className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </a>
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            {portfolioImages.map((image, index) => (
              <div key={index} className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}