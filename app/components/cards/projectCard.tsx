'use client'
import React from "react";
import Image from 'next/image'

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  link?: string;
}

export default function ProjectCard({image, title, description, link }: ProjectCardProps ) {

  const onClickLinkButton = (link: string) => {
    window.open(link, '_blank')
  }

  return (
    <div className='project-card min-w-[330px] max-w-[330px] min-h-96 border border-gray-500'>
      <div className='project-card-image'>
        <Image src={image} width={330} height={200} alt='' />
      </div>
      <div className='project-card-content border-t border-gray-500 p-4 flex flex-col justify-between'>
        <div>
          <h3 className='text-white'>{title}</h3>
          <p className='text-gray-400 mt-2'>{description}</p>
        </div>
        {link && <div className='project-links'>
          <button className='btn btn-primary border py-2 px-4 mt-6'  onClick={() => onClickLinkButton(link)}>see +</button>
        </div>}
      </div>
    </div>
  )
}
