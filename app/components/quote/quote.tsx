'use client'
import React, { MouseEventHandler } from "react";

export default function Quote({text, author, onClick }: { text: string, author: string, onClick: MouseEventHandler} ) {
  return (
    <div className="my-8 max-w-5xl flex flex-col cursor-pointer" onClick={onClick}>
      <div className="max-w-2xl border border-gray-500 p-8">
        <h3 className='text-white'>{text}</h3>
      </div>
      <div className="max-w-xs border border-gray-500 p-8 mt-[-1px] self-end">
        <h3 className='text-white'>{author}</h3>
      </div>
    </div>
  )
}
