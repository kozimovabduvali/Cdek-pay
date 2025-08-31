import React from 'react'
import OrderInfoLeft from './OrderInfoLeft'

export default function OrderInfoRight() {
  return (
    <div className='w-full'>
      {/* top */}
      <div className='bg-white shadow-drob rounded-[10px] p-5 space-y-3.75'>
        <div>
          <span className='text-[#999999] text-sm'>
            Отправитель
          </span>

          <p className='text-[#282828] font-medium'>
            Анохин Анатолий Павлович
          </p>
        </div>

        <div>
          <span className='text-[#999999] text-sm'>
            Получатель
          </span>

          <p className='text-[#282828] font-medium'>
            Пешеньков Артур Александрович
          </p>
        </div>


        <div>
          <span className='text-[#999999] text-sm'>
            Адрес доставки
          </span>

          <p className='text-[#282828] font-medium'>
            ул. Совхозная, 16, корп. 2
          </p>
        </div>

        <div>
          <span className='text-[#999999] text-sm'>
            Номер получателя
          </span>

          <p className='text-[#282828] font-medium'>
            +79165834033
          </p>
        </div>
        <div>
          <span className='text-[#999999] text-sm'>
            Товар
          </span>

          <p className='text-[#282828] font-medium'>
            Саундбар Devialet Dione
          </p>
        </div>

        <div>
          <span className='text-[#999999] text-sm'>
            Дата доставки по адресу
          </span>

          <p className='text-[#282828] font-medium'>
            28.08.2025
          </p>
        </div>
      </div>

      <div className='md:hidden mt-10'>
        <OrderInfoLeft />
      </div>

      {/* bottom */}
      <div className='bg-white shadow-drob rounded-[10px] p-5 space-y-3.75 mt-11 md:mt-4'>
        <div>
          <p className='text-[#282828] font-medium mb-1'>
            Вручение по паспорту
          </p>
          <span className='text-[#999999] text-xs leading-4'>
            При получении предъявите оригинал паспорта (для
            организаций дополнительно доверенность)
          </span>
        </div>
      </div>
    </div>
  )
}
