'use client'
import Image from 'next/image'
import { useState } from 'react'
import { HexColorPicker } from "react-colorful";
import quoteList from '@/utils/quoteList';
import colorList from '@/utils/colorList';
import Link from 'next/link';
import { ProjectCard, SkillCard, Quote } from '../components';
import { projectsData, skillsData } from '@/utils/text'
import { Logo275 } from '@/public/logos/275logo';

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

export default function FirstVersion() {
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
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 p-5">
      <header className="header z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className='absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:hidden'>
          <Logo275 color={color} />
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className='w-28 h-auto'>
            <Logo275 color={color} />
          </div>
        </div>
        <div className='menu-links flex'>
          <Link className='menu-link pr-8' href='#'><span style={{ color: color}}>#</span>home</Link>
          <Link className='menu-link pr-8' href='#projects'><span style={{ color: color}}>#</span>works</Link>
          <Link className='menu-link pr-8' href='#contact'><span style={{ color: color}}>#</span>contacts</Link>
          <Link className='menu-link pr-8' href='#about-me'><span style={{ color: color}}>#</span>about-me</Link>
        </div>
      </header>

      <section className="first my-16 lg:my-32 flex flex-col lg:flex-row gap-10 max-w-5xl justify-between	">
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-semibold mb-2">Gabriel Strobel</h1>
          <h2 className="text-3xl font-semibold mb-8" style={{ color: color}}>front-end developer</h2>
          <p className="text-gray-400 mb-6">Desenvolvedor front-end desde 2017, especializado em criar componentes de interface e páginas interativas utilizando tecnologias como React, Next e Tailwind.</p>
          <button className="btn btn-primary border py-2 px-4" style={{ borderColor: color }}>Entre em contato</button>
        </div>
        
        <div className='w-auto m-auto flex flex-col '>
          <HexColorPicker color={color} onChange={setColor} className='w-auto' style={{width: 250, height: 250}} />
          <button className='btn btn-primary border py-2 px-4 mt-6 mr-0' style={{ borderColor: color }} onClick={() => setColor(getRandomColor())}>trocar cor</button>
        </div>
      </section>

      <section id='projects' className='max-w-5xl w-full my-10 '>
        <SectionTitle title='projetos'/>
        <div className='project-cards-list flex flex-col lg:flex-row items-center lg:items-stretch flex-wrap gap-4'>
          {projectsData.map((project, index) => (
            <ProjectCard key={index} image={project.image} title={project.title} description={project.description} link={project.link} />
          ))}
        </div>
      </section>

      <section className='skills max-w-5xl w-full my-10'>
        <SectionTitle title='habilidades'/>
        <div className='skills-cards-list flex flex-col md:flex-row flex-wrap items-center md:items-stretch gap-4'>
          {skillsData.map((skill, index) => (
            <SkillCard key={index} category={skill.type} skillsList={skill.skills} />
          ))}
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
            Acredito que a tecnologia é um meio para melhorar a vida das pessoas e que o desenvolvimento de software é uma ferramenta poderosa para criar soluções que fazem a diferença na vida das pessoas.
          </p>
        </div>
      </section>
      
      <section id='contact' className='contact max-w-5xl w-full mt-10 mb-24'>
        <SectionTitle title='contato'/>
        <div className="lg:w-1/2	">
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
