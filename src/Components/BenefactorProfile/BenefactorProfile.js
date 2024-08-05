import React from 'react'

export default function BenefactorProfile({onClose}) {
  return (
    <div className='fixed top-[50%] left-[50%]  flex items-center justify-center z-2 w-full h-full bg-black/50 -translate-x-2/4 -translate-y-2/4 '>
      <div className=' w-[70%] bg-white rounded-t-lg overflow-auto '>
      <div className='w-[100%] h-10 pr-4 py-2.5 bg-mainBlue rounded-t-lg font-DanaDemiBold text-sm text-white text-right '>مشاهده پروفایل  </div>
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
        <span className=' absolute mr-4 mt-4 px-1 text-sxs bg-white'>لیست واریزی ها </span>
        <div className='mt-6 border border-tableBorder rounded-lg p-3'>
        <div className='flex justify-between'>
  {/*pagination */}
  <div className='flex items-center justify-between w-[226px] mt-5'>
<div className='flex items-center'>
<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.6062 15.5031C7.46328 15.5031 7.32037 15.4506 7.20754 15.3381C6.98941 15.1206 6.98941 14.7606 7.20754 14.5431L12.1117 9.65313C12.4728 9.29313 12.4728 8.70813 12.1117 8.34812L7.20754 3.45813C6.98941 3.24063 6.98941 2.88063 7.20754 2.66313C7.42568 2.44563 7.78672 2.44563 8.00485 2.66313L12.9091 7.55312C13.2927 7.93562 13.5108 8.45313 13.5108 9.00063C13.5108 9.54813 13.3002 10.0656 12.9091 10.4481L8.00485 15.3381C7.89203 15.4431 7.74911 15.5031 7.6062 15.5031Z" fill="#4E6F88"/>
</svg>
  <span className='text-sxs'>قبل</span>
</div>
<div className='flex items-center'>
  <span className='text-xs pl-1'>صفحه </span>
  <select className='w-12 border border-mainBlue rounded'></select>
</div>
<div className='flex items-center'>
  <span className='text-xs pl-1'>از </span>
  <input type="text" className='w-7 border border-mainBlue rounded'/>
</div>
<div className='flex items-center'>
  <span className='text-sxs'>بعد</span>
  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5825 15.5031C11.4396 15.5031 11.2967 15.4506 11.1838 15.3381L6.27962 10.4481C5.48231 9.65313 5.48231 8.34812 6.27962 7.55312L11.1838 2.66313C11.402 2.44563 11.763 2.44563 11.9811 2.66313C12.1993 2.88063 12.1993 3.24063 11.9811 3.45813L7.07693 8.34812C6.71589 8.70813 6.71589 9.29313 7.07693 9.65313L11.9811 14.5431C12.1993 14.7606 12.1993 15.1206 11.9811 15.3381C11.8683 15.4431 11.7254 15.5031 11.5825 15.5031Z" fill="#4E6F88"/>
</svg>

</div>
  </div>
  <div className='flex gap-x-3 p-0 mb-2'>


  <button className='flex items-center gap-x-1 font-DanaDemiBold text-xs rounded-lg border border-mainBlue bg-white
   text-mainBlue p-2'>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6673 1.66602H5.00065C4.55862 1.66602 4.1347 1.84161 3.82214 2.15417C3.50958 2.46673 3.33398 2.89065 3.33398 3.33268V16.666C3.33398 17.108 3.50958 17.532 3.82214 17.8445C4.1347 18.1571 4.55862 18.3327 5.00065 18.3327H15.0007C15.4427 18.3327 15.8666 18.1571 16.1792 17.8445C16.4917 17.532 16.6673 17.108 16.6673 16.666V6.66602L11.6673 1.66602Z" stroke="#4E6F88" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.666 1.66602V6.66602H16.666" stroke="#4E6F88" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.3327 10.834H6.66602" stroke="#4E6F88" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13.3327 14.166H6.66602" stroke="#4E6F88" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.33268 7.5H7.49935H6.66602" stroke="#4E6F88" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
خروجی اکسل
  </button>
  </div>
</div>
<div className='text-center mt-2 '>
<table className=' w-full  '>
  <thead className='bg-tableBg font-DanaDemiBold text-xs h-9 border-b-4 border-b-mainBlue'>
  <tr>
    <td>ردیف</td>
    <td> تاریخ</td>
    <td>نوع حساب </td>
    <td>شماره حساب </td>
    <td>شماره فیش </td>
    <td>مبلغ</td>
    <td>اقلام </td>
    <td>  مشاهده</td>
   
  </tr>
  </thead>
  <tbody className='h-7 text-xs'>
    <tr>
    <td>1</td>
    <td>1403/12/01 </td>
    <td>جاری</td>
    <td>12365</td>
    <td>5  </td>
    <td>2000000</td>
    <td>5</td>
    <td> </td>
    </tr>
    
  </tbody>
</table>
</div>

        </div>
      <div className='flex justify-end mt-5 mb-2.5'>
      <button className='font-DanaDemiBold text-xs rounded-lg bg-mainBlue text-white py-2.5 px-[14px]' onClick={onClose}>تایید </button>
      </div>
      </div>
      </div>
    </div>
  )
}
