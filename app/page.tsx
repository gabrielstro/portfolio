'use client'
import Image from 'next/image'
import { useState } from 'react'
import { HexColorPicker } from "react-colorful";
import Quote from './components/quote/quote';
import quoteList from '@/utils/quoteList';
import colorList from '@/utils/colorList';
import { ProjectCard, SkillCard } from './components/cards/';
import Link from 'next/link';

type RgbaColor = {
  r: number;
  g: number;
  b: number;
  a: number;
} 

type Quote = {
  text: string;
  author: string;
}

type hexColor = string;

const getRandomColor = (): string => {
  return colorList[Math.floor(Math.random() * colorList.length)];
}

const getRandomQuote = (): Quote => {
  return quoteList[Math.floor(Math.random() * quoteList.length)];
}

export default function Home() {
  const [color, setColor] = useState<hexColor>(colorList[0]);
  const [quoteData, setQuoteData] = useState(quoteList[0]);
  
  function SectionTitle ({ title }: { title: string }) {
    return (
      <div className='section-title flex items-center mb-12'>
        <h2 style={{ color: color }}>#<span className='ml-1 text-xl font-medium text-white'>{title}</span></h2>
        <hr style={{ borderColor: color }} className="w-2/5 border-0 border-t border-black mx-3" />
        {/* <span className='text-gray-500 self-end'>see all</span> */}
      </div>
    )
  }
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <header className="header z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/275logo07.svg"
              alt="Logo"
              width={56}
              height={56}
              priority
            />
            <span className='dark:text-white font-bold text-base'>Gabriel Strobel</span>
          </a>
        </div>
        <div className='menu-links flex'>
          <Link className='menu-link pr-8' href='#'><span style={{ color: color}}>#</span>home</Link>
          <Link className='menu-link pr-8' href='#projects'><span style={{ color: color}}>#</span>works</Link>
          <Link className='menu-link pr-8' href='#contact'><span style={{ color: color}}>#</span>contacts</Link>
          <Link className='menu-link pr-8' href='#about-me'><span style={{ color: color}}>#</span>about-me</Link>
        </div>
      </header>

      <section className="first my-32 flex max-w-5xl justify-between	">
        <div className="w-1/2	">
          <h1 className="text-3xl font-semibold mb-8">Gabriel Strobel <span style={{ color: color}}>front-end developer</span></h1>
          <p className="text-gray-400 mb-6">Desenvolvedor FrontEnd desde 2017, especializado em criar componentes de interface e páginas interativas utilizando tecnologias como React, Next e Tailwind. Motivado pela inovação, busco constantemente aprimorar a experiência do usuário em projetos colaborativos.</p>
          <button className="btn btn-primary border py-2 px-4" style={{ borderColor: color }}>Entre em contato</button>
        </div>
        
        <div>
          <HexColorPicker color={color} onChange={setColor} className='w-auto' />
          <button className='btn btn-primary border py-2 px-4 mt-6' style={{ borderColor: color }} onClick={() => setColor(getRandomColor())}>change color</button>
        </div>
      </section>

      <section id='projects' className='max-w-5xl w-full my-10'>
        <SectionTitle title='projetos'/>
        <div className='project-cards-list flex flex-wrap gap-4'>
          <ProjectCard image='/project 123milhas.webp' title='Aluguel de carros' description='Sistema de aluguel de carros em grande plataforma de viagens, em parceria com maior locadora de carros do Brasil.' link='https://checkout-frontend.vercel.app/' />
          <ProjectCard image='/arquitetura_de_precos_varejo02.png' title='Arquitetura de preços' description='Sistema de arquitetura de preços para grandes redes de varejo.' link='https://checkout-frontend.vercel.app/' />
          <ProjectCard image='/logos/logo-meusucesso.png' title='Checkout' description='Sistema de checkout/carrinho para plataforma de cursos online.' link='https://checkout-frontend.vercel.app/' />
          <ProjectCard image='/wiseuponline.jpg' title='Curso de Inglês' description='Plataforma de curso de inglês online.' link='https://checkout-frontend.vercel.app/' />
          <ProjectCard image='/powerhouse03.jpg' title='Plataforma de empreendedorismo' description='Plataforma de transmissão de evento e assinatura anual.' link='https://checkout-frontend.vercel.app/' />
        </div>
      </section>

      <section className='skills max-w-5xl w-full my-10'>
        <SectionTitle title='habilidades'/>
        <div className='skills-cards-list flex flex-wrap gap-4'>
          <SkillCard category='Language' skillsList={['HTML', 'CSS', 'Javascript', 'Typescript']} />
          <SkillCard category='Libs & Frameworks' skillsList={['React', 'Next', 'Vanilla', 'JQuery']} />
          <SkillCard category='Analytics' skillsList={['Google Analytics', 'Google Tag Manager', 'HotJar']} />
          <SkillCard category='Tests' skillsList={['Jest', 'React Testing Library', 'TDD']} />
          <SkillCard category='Ads' skillsList={['Google Ads', 'Facebook Ads']} />
          <SkillCard category='Monitoring' skillsList={['Sentry', 'New Relic']} />
        </div>
      </section>

      <section id='about-me' className='max-w-5xl w-full my-10'>
        <SectionTitle title='sobre mim'/>
        <div className='about-me-text '>
          <p className='text-gray-400'>Olá, sou Gabriel!
            <br />
            <br />
            Desenvolvedor FrontEnd desde 2017, possuo grande experiência no desenvolvimento de componentes de interface, ferramentas de gerenciamento, landing pages e checkout. Em minhas experiências profissionais utilizo tecnologias como React, Next, Tailwind, Storybook, aliadas a ferramentas de analytics, testes e monitoramento.
            <br />
            <br />
            Sou motivado pela criação de projetos inovadores em ambientes colaborativos e busco sempre aprimorar a experiência do usuário e agregar valor aos produtos.
          </p>
        </div>
      </section>
      
      <section id='contact' className='contact max-w-5xl w-full mt-10 mb-24'>
        <SectionTitle title='contato'/>
        <div className="w-1/2	">
          <p className='text-gray-400 font-medium'>Estou aberto a novos projetos e oportunidades.
          <br />
          <br />
          Entre em contato via <Link href={'https://www.linkedin.com/in/gabriel-strobel-a8376880/'}><Image src={'/logos/linkedin.svg'} width={22} height={22} className='inline' alt=''></Image> Linkedin</Link> ou email gabrielcoelho91@gmail.com
          </p>
        </div>
      </section>

      <Quote 
        text={quoteData.text} 
        author={quoteData.author} 
        onClick={() => setQuoteData(getRandomQuote())} 
      />

    </main>
  )
}
