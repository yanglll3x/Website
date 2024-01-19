import React from 'react'

const Footer = () => {
return (
    <footer className='flexCenter'>
        <div className='max-w-5xl mx-auto sm:p-16 pb-2 !pt-[12px] px-2 min-h-[calc(20vh-80px)] flex w-ful flex-col gap-14'>
          <hr className='border-slate-200' />
          <p className='regular-14 text-sm w-full font-light text-gray-500'>
          © 2024 Emili Yang | All Rights Reserved.
          </p>
        </div>
    </footer>
  )
}

export default Footer