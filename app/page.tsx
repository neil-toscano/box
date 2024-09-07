'use client'

import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Twitter, Linkedin, Instagram, Moon, Sun } from 'lucide-react'
import Image from 'next/image'

export default function Component() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark'
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
    { name: "Twitter", url: "https://www.linkedin.com/in/neil-toscano-fernandez-2b106a20b/", icon: <Twitter className="h-5 w-5" /> },
    { name: "GitHub", url: "https://www.linkedin.com/in/neil-toscano-fernandez-2b106a20b/", icon: <Github className="h-5 w-5" /> },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/neil-toscano-fernandez-2b106a20b/", icon: <Linkedin className="h-5 w-5" /> },
    { name: "Instagram", url: "https://www.linkedin.com/in/neil-toscano-fernandez-2b106a20b/", icon: <Instagram className="h-5 w-5" /> },
  ]

  const portfolioImages = [
    { src: "https://nextui.org/images/album-cover.png", alt: "Proyecto 1" },
    { src: "https://nextui.org/images/hero-card-complete.jpeg", alt: "Proyecto 2" },
    { src: "https://nextui.org/images/card-example-6.jpeg", alt: "Proyecto 3" },
    { src: "https://nextui.org/images/card-example-2.jpeg", alt: "Proyecto 4" },
  ]

  return (
    <div className={`min-h-screen p-8 transition-colors duration-300 ${
      theme === 'light' 
        ? 'bg-gradient-to-r from-purple-300 via-blue-300 to-teal-300' 
        : 'bg-gray-900'
    }`}>
      <Card className={`max-w-4xl mx-auto overflow-hidden ${
        theme === 'light' 
          ? 'bg-white/10 backdrop-blur-md shadow-lg' 
          : 'bg-gray-800 border-gray-700'
      }`}>
        <CardContent className="p-8">
          <div className="flex justify-end mb-4">
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className={`${
                theme === 'light'
                  ? 'bg-white/20 text-gray-800 hover:bg-white/30 border-gray-400'
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600 border-gray-600'
              }`}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          <div className="flex flex-col items-center mb-8">
            <Avatar className={`w-32 h-32 mb-4 border-4 ${
              theme === 'light' ? 'border-white/50' : 'border-gray-600'
            }`}>
              <AvatarImage src={personalInfo.avatar} alt={personalInfo.name} />
              <AvatarFallback>{personalInfo.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <h1 className={`text-3xl font-bold mb-2 ${
              theme === 'light' ? 'text-gray-800' : 'text-gray-100'
            }`}>{personalInfo.name}</h1>
            <p className={`text-xl ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>{personalInfo.title}</p>
          </div>

          <Card className={`mb-8 ${
            theme === 'light' 
              ? 'bg-white/20 backdrop-blur-md' 
              : 'bg-gray-700 border-gray-600'
          }`}>
            <CardContent className="p-6">
              <h2 className={`text-2xl font-semibold mb-4 ${
                theme === 'light' ? 'text-gray-800' : 'text-gray-100'
              }`}>Quién soy</h2>
              <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>{personalInfo.bio}</p>
            </CardContent>
          </Card>

          <Card className={`mb-8 ${
            theme === 'light' 
              ? 'bg-white/20 backdrop-blur-md' 
              : 'bg-gray-700 border-gray-600'
          }`}>
            <CardContent className="p-6">
              <h2 className={`text-2xl font-semibold mb-4 ${
                theme === 'light' ? 'text-gray-800' : 'text-gray-100'
              }`}>Qué hago</h2>
              <ul className={`list-disc list-inside ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
                <li>Diseño de interfaces de usuario intuitivas y atractivas</li>
                <li>Desarrollo de aplicaciones web responsivas y de alto rendimiento</li>
                <li>Creación de experiencias de usuario memorables y accesibles</li>
                <li>Optimización de sitios web para SEO y velocidad de carga</li>
              </ul>
            </CardContent>
          </Card>

          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((link) => (
              <Button 
                key={link.name} 
                variant="outline" 
                size="icon" 
                className={`${
                  theme === 'light'
                    ? 'bg-white/20 hover:bg-white/30 text-gray-800 border-gray-400'
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-200 border-gray-600'
                }`} 
                asChild
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                  <span className="sr-only">{link.name}</span>
                </a>
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {portfolioImages.map((image, index) => (
              <div 
                key={index} 
                className={`relative aspect-video overflow-hidden rounded-lg border ${
                  theme === 'light' ? 'border-gray-400' : 'border-gray-600'
                }`}
              >
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