import React, { Children } from 'react'

export default function Header({children,title}) {
  return (
    <div className='h-[60px] flex justify-between items-center'>
      <div className='flex items-center gap-x-3'>
     
             
{children}
             
             <span className='font-DanaDemiBold text-base'>{title}  </span>
      </div>
      <div className='flex items-center gap-x-[10px]'>
        <img src="./img/moh.jpeg" alt="profile pic" className='w-8 h-8 rounded-full' />
        <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.6203 6L10.4005 0H0.840087L5.6203 6Z" fill="#4E6F88"/>
</svg>
      </div>
    </div>
  )
}
