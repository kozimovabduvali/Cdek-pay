import React from "react";

export default function Search() {
  const orderId = "56944744";

  return (
    <div className="bg-white md:px-15.25 md:py-13 md:shadow-drob md:rounded-[10px] mb-7.5 md:mb-6">
      <div className="flex items-center gap-1.5 w-full sm:max-w-86 md:max-w-145 lg:max-w-172.5 max-lg:mx-auto">
        <div className="relative w-full mx-auto flex items-center justify-between border border-[#E0E0E0] rounded-lg px-1 h-12">
          <button className="size-8 flex items-center justify-center">
            <svg
              width={23}
              height={23}
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.4089 20.5548L16.507 15.654C17.8219 14.1426 18.618 12.1707 18.618 10.0154C18.618 5.27113 14.7582 1.41666 10.0173 1.41666C5.27195 1.41666 1.41663 5.2756 1.41663 10.0154C1.41663 14.7553 5.27643 18.6142 10.0173 18.6142C12.1731 18.6142 14.1455 17.8183 15.6572 16.5036L20.5591 21.4045C20.6753 21.5207 20.8319 21.5833 20.984 21.5833C21.1361 21.5833 21.2926 21.5252 21.4089 21.4045C21.6414 21.1719 21.6414 20.7874 21.4089 20.5548ZM2.61974 10.0154C2.61974 5.93739 5.93836 2.62397 10.0129 2.62397C14.0918 2.62397 17.406 5.94186 17.406 10.0154C17.406 14.089 14.0918 17.4114 10.0129 17.4114C5.93836 17.4114 2.61974 14.0935 2.61974 10.0154Z"
                fill="#00A942"
                stroke="#00A942"
                strokeWidth={0.366667}
              />
            </svg>
          </button>
          <label htmlFor="#" className="absolute z-10 top-0 -translate-y-1/2 left-5 text-[#ADAFB4] text-xs bg-white px-1">
            Номер заказа
          </label>
          {/* Input (readonly) */}
          <input
            type="text"
            value={orderId}
            readOnly
            className="w-full flex-1 px-1 py-3 outline-none text-sm  text-black"
          />

          <button className="size-8 flex items-center justify-center">
            <svg
              width={11}
              height={11}
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.86157 5.50153L0.435317 9.95887C0.312349 10.0827 0.312349 10.2833 0.435317 10.4071C0.496724 10.4691 0.577348 10.5 0.657818 10.5C0.738442 10.5 0.818911 10.4691 0.880318 10.4071L5.33985 5.9163L9.79937 10.4071C9.86097 10.4691 9.94143 10.5 10.0219 10.5C10.1024 10.5 10.183 10.4691 10.2444 10.4071C10.3674 10.2833 10.3674 10.0827 10.2444 9.95887L5.81829 5.50153L10.2474 1.04104C10.3703 0.917207 10.3703 0.716589 10.2474 0.592757C10.1244 0.469081 9.92517 0.469081 9.80237 0.592757L5.34001 5.08677L0.877192 0.592914C0.754224 0.469239 0.555161 0.469239 0.432192 0.592914C0.309224 0.716747 0.309224 0.917365 0.432192 1.0412L4.86157 5.50153Z"
                fill="#B0B0B0"
              />
            </svg>
          </button>
        </div>

        <button className="shrink-0 max-md:w-12 h-12 bg-[#00A942] flex items-center justify-center rounded-lg transition duration-300 hover:bg-[#00A942]/75 md:px-12">
          <svg
            className="md:hidden"
            width={14}
            height={12}
            viewBox="0 0 14 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.7208 6.5904C14.0332 6.27801 14.0332 5.77148 13.7208 5.45906L8.62961 0.367891C8.31721 0.0554707 7.81068 0.05547 7.49828 0.367891C7.18588 0.680311 7.18588 1.18684 7.49828 1.49926L12.0237 6.02474L7.49828 10.5502C7.18588 10.8627 7.18588 11.3692 7.49828 11.6816C7.81068 11.994 8.31721 11.994 8.62961 11.6816L13.7208 6.5904ZM0.549072 6.82474H13.1551V5.22474H0.549072L0.549072 6.82474Z"
              fill="white"
            />
          </svg>

          <span className="max-md:hidden font-bold text-white">
            Отследить
          </span>
        </button>
      </div>
    </div>
  );
}
