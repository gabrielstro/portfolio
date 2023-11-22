'use client'
import React from "react";


export default function SkillCard({ category, skillsList }: { category: string, skillsList: string[]} ) {
  return (
    <div className='min-h-[80px] w-[178px] border border-gray-500'>
      <div className='border-b border-gray-500 p-2'>
        <p className='font-bold'>{category}</p>
      </div>
      <p className='p-2 text-gray-400 flex flex-wrap gap-x-6 gap-y-2'>
        {skillsList.map((skill, index) => (
          <span key={index}>{skill}</span>
        ))}
      </p>
    </div>
  )
}
