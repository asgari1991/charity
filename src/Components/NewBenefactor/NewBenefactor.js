import React from 'react'
import  ReactDOM  from 'react-dom'
export default function NewBenefactor({onClose}) {
  return ReactDOM.createPortal (
    <div className='fixed top-[50%] left-[50%]  flex items-center justify-center z-2 w-full h-full bg-black/50 -translate-x-2/4 -translate-y-2/4 '>
    <div className=' w-[70%] bg-white rounded-t-lg overflow-auto '>
    <div className='w-[100%] h-10 pr-4 py-2.5 bg-mainBlue rounded-t-lg font-DanaDemiBold text-sm text-white text-right '>ثبت خیر جدید</div>
    <div className='px-[17px] '>
    <div className='flex items-center gap-x-1.5 pt-2.5 pr-1.5'>
        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5723 3.21484H2.85798C2.14791 3.21484 1.57227 3.79048 1.57227 4.50056V16.072C1.57227 16.7821 2.14791 17.3577 2.85798 17.3577H10.5723C11.2823 17.3577 11.858 16.7821 11.858 16.072V4.50056C11.858 3.79048 11.2823 3.21484 10.5723 3.21484Z" stroke="#4E6F88" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.14453 6.42773H9.28739" stroke="#4E6F88" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.14453 9.64258H9.28739" stroke="#4E6F88" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.14453 12.8574H6.71596" stroke="#4E6F88" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.78711 0.642578H13.1443C13.4852 0.642578 13.8123 0.778037 14.0534 1.01915C14.2945 1.26027 14.43 1.5873 14.43 1.92829V14.1426" stroke="#4E6F88" strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
<span className='font-DanaDemiBold text-xs'>اطلاعات خیر</span>
        </div>
        <span className=' absolute mr-4 mt-1 px-1 text-sxs bg-white'>مشخصات خیر  </span>
        <div className=' mt-3 border border-tableBorder rounded-lg grid grid-cols-4 gap-3 p-3  child:h-8 child:border child:border-mainBlue/25 child:px-2.5 child:py-2 child:rounded-lg child:text-sxs child:font-DanaMedium'>
        <input type="text" placeholder='نام و نام خانوادگی ' />
        <input type="text" placeholder='جنسیت ' />
        <input type="text" placeholder='شماره حساب  ' className=' col-span-2' />
        <input type="text" placeholder='بانک  ' />
        <input type="text" placeholder='شغل  ' />
        
        </div>
        <div className='flex justify-end mt-5 mb-2.5'>
      <button className='font-DanaDemiBold text-xs rounded-lg bg-mainBlue text-white py-2.5 px-[14px]' onClick={onClose}>تایید </button>
      </div>
    </div>
    </div>
    </div>
  ,document.getElementById("modals-parent"))
}
