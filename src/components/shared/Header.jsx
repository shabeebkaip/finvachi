import logo from "../../assets/logo finvachi.png"
import profile from "../../assets/profile.png"
import { CiSearch } from "react-icons/ci";

import HeaderCards from "./HeaderCards"
const Header = () => {
  return (
    <div className="bg-gradient-to-b from-[#6EABDF] to-[#D4EBFF] p-2">
      <div className="container  grid grid-cols-5 gap-5">
        <div className="flex items-center gap-5 col-span-3 justify-around ">
          <img src={logo} alt="logo" className='w-48' />
          <div className="flex items-center gap-2">
            <HeaderCards text="Nifty50" />
            <HeaderCards text="BankNifty" />
            <HeaderCards text="Sensex" />

          </div>
        </div>
        <div className="flex justify-between items-center w-full col-span-2 gap-5">
          <div className="flex items-center rounded-lg border border-gray-300 px-3 py-1 bg-white  w-full ">
            <div className="flex items-center justify-center w-10 h-10  rounded-full">
              <CiSearch className="text-secondary text-2xl font-bold" />
            </div>
            <input
              type="text"
              placeholder="Search Stocks, Equity, F& O and more"
              className="w-full h-full ml-3 text-secondary placeholder-gray-400 bg-transparent outline-none    rounded-full text-base p-2 "
            />
          </div>
          {/* <input type="text" placeholder="Search" className="border border-gray-300 rounded-lg p-2 w-full" /> */}
          <img src={profile} alt="profile" className="w-10 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export default Header