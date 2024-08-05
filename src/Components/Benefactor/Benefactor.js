import React, { useState } from 'react'
import NewBenefactor from '../NewBenefactor/NewBenefactor'
import BenefactorProfile from '../BenefactorProfile/BenefactorProfile'
import Header from '../Header/Header'


export default function Benefactor() {
  const [isShowNewBenefactorModal,setIsShowNewBenefactorModal]=useState(false)
  const [isShowBenefactorProfileModal,setIsShowBenefactorProfileModal]=useState(false)
  const closeNewBenefactorModal=()=>{
    setIsShowNewBenefactorModal(false)
  }
  const closeBenefactorProfileModal=()=>{
    setIsShowBenefactorProfileModal(false)
  }
  return (
    <>
    <Header title={"خیرین"}> 
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
     
    >
      <g
        clipPath="url(#clip0_2824_14718)"
        stroke="#4E6F88"
        strokeWidth={1.57143}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21.215 3.928h-11v7.857h11V3.928zM15.715 3.928v7.857M13.357.785l2.358 3.143L18.072.785M.786 17.285l3.84 3.2c.565.471 1.277.729 2.012.729h10.124a1.31 1.31 0 001.31-1.31 2.62 2.62 0 00-2.62-2.619H8.415" />
        <path d="M5.5 15.714l1.179 1.178a1.667 1.667 0 002.357-2.357l-1.83-1.83a3.143 3.143 0 00-2.222-.92H.786" />
      </g>
      <defs>
        <clipPath id="clip0_2824_14718">
          <path fill="#fff" d="M0 0H22V22H0z" />
        </clipPath>
      </defs>
    </svg>
    </Header> 
       <div className='h-[102px] py-3 font-DanaMedium border-y-2'>
     <div className='flex items-center gap-x-1'>
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12L5 4" stroke="#4E6F88" strokeWidth="2" strokeLinecap="round"/>
<path d="M19 20L19 18" stroke="#4E6F88" strokeWidth="2" strokeLinecap="round"/>
<path d="M5 20L5 16" stroke="#4E6F88" strokeWidth="2" strokeLinecap="round"/>
<path d="M19 12L19 4" stroke="#4E6F88" strokeWidth="2" strokeLinecap="round"/>
<path d="M12 7L12 4" stroke="#4E6F88" strokeWidth="2" strokeLinecap="round"/>
<path d="M12 20L12 12" stroke="#4E6F88" strokeWidth="2" strokeLinecap="round"/>
<circle cx="5" cy="14" r="2" stroke="#4E6F88" strokeWidth="2" strokeLinecap="round"/>
<circle cx="12" cy="9" r="2" stroke="#4E6F88" strokeWidth="2" strokeLinecap="round"/>
<circle cx="19" cy="15" r="2" stroke="#4E6F88" strokeWidth="2" strokeLinecap="round"/>
</svg>
<span className='text-sm'>در صورت نیاز به فیلتر اطلاعات در جدول, از فیلتر های زیر استفاده کنید.</span>
     </div>
     {/* filters */}
    
     <div className='flex items-center justify-between mt-4'>
      <div className='flex gap-x-3 justify-start child:w-[163px] child:h-8 child:border child:border-mainBlue/25 child:px-2.5 child:py-2 child:rounded-lg child:text-xs'>
        <input type="text" placeholder='نام خیر' />
        <input type="text" placeholder='کد خیر '/>
       
      </div>
      <button className='font-DanaDemiBold text-xs rounded-lg bg-mainBlue text-white p-2.5'>مشاهده نتایج</button>
     </div>
     </div>
     <div className='mt-[17px]'>
  <div>
    <h1 className='font-DanaDemiBold font-semibold'>لیست خیرین </h1>
    <span> لیست حامیان و خیرین موسسه</span>
  </div>
<div className='flex justify-between mt-9'>
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

  <button onClick={()=>setIsShowNewBenefactorModal(true)} className='flex items-center gap-x-1 font-DanaDemiBold text-xs rounded-lg bg-mainBlue text-white p-2'>
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.87565 18.1048C14.4205 18.1048 18.1048 14.4205 18.1048 9.87565C18.1048 5.33081 14.4205 1.64648 9.87565 1.64648C5.33081 1.64648 1.64648 5.33081 1.64648 9.87565C1.64648 14.4205 5.33081 18.1048 9.87565 18.1048Z" stroke="white" strokeWidth="1.64583" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.875 6.58398V13.1673" stroke="white" strokeWidth="1.64583" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.58398 9.875H13.1673" stroke="white" strokeWidth="1.64583" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
  ثبت خیر جدید
  </button>
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
<div className='text-center mt-[18px] border border-tableBorder rounded-lg'>
<table className=' w-full  '>
  <thead className='bg-tableBg font-DanaDemiBold text-xs h-9 border-b-4 border-b-mainBlue'>
  <tr>
    <td>ردیف</td>
    <td>کد خیر</td>
    <td>نام و نام خانوادگی خیر</td>
    <td>شماره تلفن همراه </td>
    
    <td>شغل  </td>
    <td>معرف </td>
    <td>بانک</td>
    <td>شماره کارت بانکی</td>
    <td>مشاهده پروفایل</td>
  </tr>
  </thead>
  <tbody className='h-7 text-xs'>
    <tr>
    <td>1</td>
    <td>123456789</td>
    <td>محمد محمدی</td>
    <td>09122222222  </td>
    <td>ازاد</td>
    
    <td>اقای معرف</td>
    <td>ملت</td>
    <td>12366</td>
    <td className='pr-10'>
      <button className='flex items-center gap-x-1 font-DanaDemiBold text-xs rounded-lg bg-mainBlue text-white p-2' onClick={()=>setIsShowBenefactorProfileModal(true)}>
        مشاهده پروفایل
      </button>
       </td>
    </tr>
  </tbody>
</table>
</div>

  </div>
  {isShowNewBenefactorModal && <NewBenefactor onClose={closeNewBenefactorModal}/>}
  {isShowBenefactorProfileModal && <BenefactorProfile onClose={closeBenefactorProfileModal}/>}
  
    </>
  )
}
