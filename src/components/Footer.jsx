import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#212121] text-white text-sm'>
      <div className='flex flex-wrap items-center justify-between gap-5 w-full max-w-310 mx-auto px-5 pb-3 lg:pb-5.5 pt-7 lg:pt-9.5'>
        <p className='text-xs'>
          ©2000 — 2025, Курьерская компания CДЭK
        </p>

        <a href="#" className='underline underline-offset-2'>
          Адрес раскрытия информации
        </a>

        <div className='flex items-center gap-1'>
          <p>
            Дизайн сайта
          </p>
          <a href="#" className='font-medium underline underline-offset-2'>UPROCK</a>
        </div>
      </div>
    </div>
  )
}
