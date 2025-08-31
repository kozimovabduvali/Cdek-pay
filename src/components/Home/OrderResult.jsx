import ClockImg from '../../assets/clock.png'
import Delivery from '../Ui/Home/Delivery'
import OrderInfo from '../Ui/Home/OrderInfo'
export default function OrderResult() {
  return (
    <div className='md:p-8 md:rounded-[10px] md:bg-white md:shadow-drob'>
      <div className='md:p-6.5 md:bg-[#F6F7F9] rounded-[10px]'>
        <div className='flex flex-col md:flex-row-reverse md:items-center justify-between md:border-b-2 border-[#CCCCCC] border-dashed md:pb-7 md:mb-7'>
          <div className='flex items-center gap-1'>
            <img src={ClockImg} alt="Img" />
            <p className='text-[#434C5D] text-sm'>
              Ожидает оплаты
            </p>
          </div>

          <p className='text-xl text-[#333333] max-md:hidden'>
            Санкт-Петербург
          </p>

          <p className='text-2xl text-[#222222]'>
            № 56944744
          </p>
        </div>

        <div className='flex items-center justify-between gap-5 mb-2'>
          <h4 className='font-bold text-xl text-[#232323]'>
            Санкт-Петербург
          </h4>
          <h4 className='font-bold text-xl text-[#232323]'>
            Химки
          </h4>
        </div>

        <Delivery />

        <OrderInfo />
      </div>
    </div>
  )
}
