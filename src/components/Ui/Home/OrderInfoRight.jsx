import OrderInfoLeft from './OrderInfoLeft'

export default function OrderInfoRight() {
  const info = [
    { label: 'Отправитель', value: 'Анохин Анатолий Павлович' },
    { label: 'Получатель', value: 'Пешеньков Артур Александрович' },
    { label: 'Адрес доставки', value: 'ул. Совхозная, 16, корп. 2' },
    { label: 'Номер получателя', value: '+79165834033' },
    { label: 'Товар', value: 'Саундбар Devialet Dione' },
    { label: 'Дата доставки по адресу', value: '28.08.2025' },
  ]

  return (
    <div className='w-full'>
      {/* top */}
      <div className='bg-white shadow-drob rounded-[10px] p-5 space-y-3.75'>
        {info.map((item, i) => (
          <div key={i}>
            <span className='text-[#999999] text-sm'>
              {item.label}
            </span>
            <p className='text-[#282828]'>
              {item.value}
            </p>
          </div>
        ))}
      </div>

      <div className='md:hidden mt-10'>
        <OrderInfoLeft />
      </div>

      {/* bottom */}
      <div className='bg-white shadow-drob rounded-[10px] p-5 space-y-3.75 mt-11 md:mt-4 max-md:mb-8'>
        <div>
          <p className='text-[#282828] mb-1'>
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
