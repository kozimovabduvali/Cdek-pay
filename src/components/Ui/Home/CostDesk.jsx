
export default function CostDesk() {
  return (
    <>
      <div className="lg:max-w-97.5 w-full ml-auto bg-[#333333] lg:bg-white text-[#232323] shadow-drob rounded-t-[15px] p-6">
        <h3 className="max-lg:hidden font-medium text-2xl mb-6">
          Ваш расчет
        </h3>
        <div className="text-black lg:hidden flex justify-between gap-5 mb-11 lg:mb-7">
          <p className="font-bold max-lg:text-[#999999]">
            Итого:
          </p>

          <p className="font-bold text-xl max-lg:text-white">
            101 024 ₽
          </p>
        </div>

        <div className="pb-6 border-b border-[#999999] lg:border-[#E0E0E0] mb-4">
          <div className="bg-[#666666] lg:bg-[#F6F7F9] max-lg:text-white rounded-[20px] space-y-3 p-3.5">
            <div className="flex items-center justify-between gap-5">
              <p>
                Товар
              </p>

              <span>
                100 000 ₽
              </span>
            </div>
            <div className="flex items-center justify-between gap-5">
              <p>
                Доставка
              </p>

              <span>
                1 024 ₽
              </span>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="text-black hidden lg:flex justify-between gap-5 mb-7">
            <p className="font-bold">
              Итого:
            </p>

            <p className="font-bold text-xl">
              101 024 ₽
            </p>
          </div>
          <button className="shrink-0 w-full h-12 bg-[#00A942] flex items-center justify-center rounded-lg transition duration-300 hover:bg-[#00A942]/75 md:px-12">
            <span className="font-bold text-white">
              Оплатить
            </span>
          </button>
        </div>

        <div className="flex items-center gap-3 max-lg:bg-[#FFFFFF]/80 lg:border border-[#E0E0E0] border-dashed rounded-lg py-1.5 px-3.5 max-lg:p-3.5">
          <div className="shrink-0 size-6 bg-[#FF6B00] rounded-full flex items-center justify-center">
            <svg width="3" height="12" viewBox="0 0 3 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.28 8.51001H0.72L0.5 0.51001H2.5L2.28 8.51001ZM2.5 10.51C2.5 10.7752 2.39464 11.0296 2.20711 11.2171C2.01957 11.4047 1.76522 11.51 1.5 11.51C1.23478 11.51 0.98043 11.4047 0.792893 11.2171C0.605357 11.0296 0.5 10.7752 0.5 10.51C0.5 10.2448 0.605357 9.99044 0.792893 9.8029C0.98043 9.61537 1.23478 9.51001 1.5 9.51001C1.76522 9.51001 2.01957 9.61537 2.20711 9.8029C2.39464 9.99044 2.5 10.2448 2.5 10.51Z" fill="white" />
            </svg>
          </div>

          <p className="text-xs text-black">
            Нажмите на кнопку «Оплатить», затем
            произведите оплату с банковской карты. Ваши
            средства будут зарезервированы сервисом
            CДЭK до того момента, пока Вы не получите
            товар, произведёте проверку и подпишите
            накладную у курьера. После проверки товара и
            подписи документов Ваши средства будут
            переведены на счёт отправителя.
            <br /><br />
            В случае, если товар не соответствует описанию,
            не устроил по каким-либо причинам, либо
            поврежден – производится полный возврат
            средств на Вашу банковскую карту в течении
            одного часа.
          </p>
        </div>
      </div>
    </>
  )
}
