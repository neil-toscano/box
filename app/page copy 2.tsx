'use client'

import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Twitter, Linkedin, Instagram, Moon, Sun } from 'lucide-react'
import Image from 'next/image'

export default function Component() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    setTheme(savedTheme)
    document.documentElement.classList.toggle('dark', savedTheme === 'dark')
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  const personalInfo = {
    name: "Neil Toscano",
    title: "Desarrollador Web & Diseñador UI/UX",
    avatar: "https://github.com/shadcn.png",
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
    { src: "https://nextui.org/images/card-example-6.jpeg", alt: "Proyecto 3" },
    { src: "https://nextui.org/images/card-example-2.jpeg", alt: "Proyecto 4" },
  ]

  return (
    <div className="min-h-screen p-8 transition-colors duration-300 bg-gradient-to-r from-purple-300 via-blue-300 to-teal-300 dark:bg-[#0c1220]">
      <Card className="max-w-4xl mx-auto overflow-hidden bg-white/10 dark:bg-[#0c1220] backdrop-blur-md shadow-lg dark:border-[#00FFFF] dark:border">
        <CardContent className="p-8">
          <div className="flex justify-end mb-4">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="bg-white/20 dark:bg-[#0c1220] text-gray-800 dark:text-[#00FFFF] hover:bg-white/30 dark:hover:bg-[#1a2332] border-[#00FFFF]"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          <div className="flex flex-col items-center mb-8">
            <Avatar className="w-32 h-32 mb-4 border-4 border-white/50 dark:border-[#00FFFF]">
              <AvatarImage src={personalInfo.avatar} alt={personalInfo.name} />
              <AvatarFallback>{personalInfo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-[#00FFFF] mb-2">{personalInfo.name}</h1>
            <p className="text-xl text-gray-700 dark:text-[#00FFFF]/80">{personalInfo.title}</p>
          </div>

          <Card className="bg-white/20 dark:bg-[#0c1220] backdrop-blur-md mb-8 dark:border-[#00FFFF] dark:border">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-[#00FFFF] mb-4">Quién soy</h2>
              <p className="text-gray-700 dark:text-white">{personalInfo.bio}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/20 dark:bg-[#0c1220] backdrop-blur-md mb-8 dark:border-[#00FFFF] dark:border">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-[#00FFFF] mb-4">Qué hago</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-white">
                <li>Diseño de interfaces de usuario intuitivas y atractivas</li>
                <li>Desarrollo de aplicaciones web responsivas y de alto rendimiento</li>
                <li>Creación de experiencias de usuario memorables y accesibles</li>
                <li>Optimización de sitios web para SEO y velocidad de carga</li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="outline" size="icon" className="bg-white/20 dark:bg-[#0c1220] hover:bg-white/30 dark:hover:bg-[#1a2332] text-gray-800 dark:text-[#00FFFF] border-gray-400 dark:border-[#00FFFF]" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </a>
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioImages.map((image, index) => (
              <div key={index} className="relative aspect-video overflow-hidden rounded-lg border border-gray-400 dark:border-[#00FFFF]">
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