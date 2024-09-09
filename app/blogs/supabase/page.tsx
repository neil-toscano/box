'use client'

import './supabase.css';

import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Moon, Sun, Youtube } from 'lucide-react'
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
    name: "¿Qué es Supabase?",
    title: "Explorando el mundo de los contratos inteligentes",
    avatar: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png",
    bio: "Solidity es el lenguaje que impulsa los contratos inteligentes en Ethereum, permitiendo crear aplicaciones descentralizadas sin intermediarios. Piensa en él como un código legal inmutable, donde las reglas se ejecutan automáticamente en la blockchain, ofreciendo transparencia y seguridad sin precedentes.",
  }

  const socialLinks = [
    { name: "Twitter", url: "https://www.youtube.com/watch?v=77h_NHUoSI8&t=8s", icon: <Youtube className="h-10 w-10" /> },
  ]

  const portfolioImages = [
    { src: "https://media.licdn.com/dms/image/v2/D4D12AQEHaPTAVVUggQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693287761377?e=1731542400&v=beta&t=LFNaVhj5mn9vMR8wG-0ardj5UqLa9fiboUq6XQVzXAI", alt: "Proyecto 1" },
    { src: "https://lh5.googleusercontent.com/5St-xYkS6ya4nGGX8tTyqZBsgFss-mZwdv_3Sxlow2KqHfrYuD2WfViVQ4DaJZskgoVuet489SBhA-9HEqLLGFVls0UeV_Fs-VgSscCXsiS1PpWMXF7xO2Sce_fbsM1c9-0q_wNKyFtNLuNAQey4dTY", alt: "Proyecto 2" },
    { src: "https://technology.amis.nl/wp-content/uploads/2022/06/image.png", alt: "Proyecto 3" },
    { src: "https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff5ced52e-7d8d-4d3e-85e9-53c006ff0d6d_800x356.png", alt: "Proyecto 4" },
  ]

  return (
    <div className={`min-h-screen p-8 transition-colors duration-300 ${
      theme === 'light' 
        ? 'bg-gradient-to-r from-purple-300 via-blue-300 to-teal-300' 
        : 'md:bg-gray-900 sm:bg-gray-800'
    }`}>
      <Card className={`max-w-4xl mx-auto overflow-hidden ${
        theme === 'light' 
          ? 'md:bg-white/10 md:backdrop-blur-md md:shadow-lg' 
          : 'md:bg-gray-800 md:border-gray-700'
      }
      ${
      theme === 'light' 
        ? 'sm:bg-white sm:backdrop-blur-sm sm:shadow-md' 
        : 'sm:bg-gray-800 sm:border-transparent'
      }
      `}>
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
          <div className="flex justify-center space-x-4 mb-8">
          <p className={`text-xl ${
              theme === 'light' ? 'text-gray-700' : 'text-gray-300'
            }`}>Míralo en</p>
            {socialLinks.map((link) => (
              <Button 
                key={link.name} 
                variant="outline" 
                size="icon" 
                className={`${
                  theme === 'light'
                    ? 'bg-white/20 hover:bg-white/30 text-red-500 border-slate-50'
                    : 'bg-gray-700 hover:bg-gray-600 text-red-500 border-slate-50'
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

          <Card className={`mb-8 ${
            theme === 'light' 
              ? 'bg-white/20 backdrop-blur-md' 
              : 'bg-gray-700 border-gray-600'
          }`}>
            <CardContent className="p-6">
              <h2 className={`text-2xl font-semibold mb-4 ${
                theme === 'light' ? 'text-gray-800' : 'text-gray-100'
              }`}>¿Qué es?</h2>
              <p className={theme === 'light' ? 'text-gray-700' : 'text-gray-300'}>{personalInfo.bio}</p>
            </CardContent>
          </Card>
          <Card className={`mb-8 ${
            theme === 'light' 
              ? 'bg-white/20 backdrop-blur-md' 
              : 'bg-gray-700 border-gray-600'
          } `}>
            <CardContent className="p-6 rounded-xl card">
              <h2 className={`text-2xl font-semibold mb-4 ${
                theme === 'light' ? 'text-gray-800' : 'text-gray-100'
              }`}>Empresas que lo usan</h2>
              <ul className={`list-disc list-inside ${
                theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>
               <li><strong>Uniswap</strong>: Utiliza Solidity para crear un intercambio descentralizado que permite el comercio de tokens sin intermediarios.</li>
               <li><strong>Chainlink</strong>: Emplea Solidity para conectar contratos inteligentes con datos del mundo real a través de oráculos descentralizados.</li>
               <li><strong>Decentraland</strong>: Usa Solidity para gestionar propiedades digitales en un metaverso descentralizado donde los usuarios compran y construyen terrenos virtuales.</li>
              </ul>
            </CardContent>
          </Card>

          

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