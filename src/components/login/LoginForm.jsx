import logo from "../../assets/logo finvachi.png"
import facebook from "../../assets/facebook.png"
import linkedIn from "../../assets/linkedin.png"
import twitter from "../../assets/twitter.png"
import google from "../../assets/google.png"
import { TfiLock } from "react-icons/tfi";
import { FaUserAlt } from "react-icons/fa";
import LoginInputField from "./LoginInputField";
import { Link } from "react-router-dom";


const LoginForm = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-5'>
      <h4 className="text-secondary text-4xl font-semibold">Welcome To</h4>
      <img src={logo} alt="logo" className='w-96' />
      <div>
        <div className="flex flex-col sm:w-[600px] w-full items-center justify-center gap-5  ">
          <LoginInputField icon={<FaUserAlt className="text-2xl text-secondary  " />} placeholder="username" type={"text"} />
          <LoginInputField icon={<TfiLock className="text-2xl text-secondary  " />} placeholder="password" type={"password"} />
        </div>
        <div className="flex justify-end mt-2" >
          <Link to="forgot-password" className="text-secondary text-lg font-medium">Forgot Password?</Link>
        </div>
      </div>
      <button className="bg-gradient-to-b from-[#0090e3d9] to-[#09324ad9] text-white py-2  rounded-3xl text-4xl font-semibold sm:w-[600px] w-full">Sign In</button>
      <div className="flex gap-2 items-center text-2xl">
        <p className="text-secondary font-normal ">{"Don't have an account?"}</p>
        <Link to="/register" className="text-primary font-semibold ">Sign Up Now</Link>
      </div>
      <div className="h-[19px] items-center gap-2 lg:inline-flex flex justify-center w-full sm:max-w-[400px]">
        <div className="w-full h-[0px]  border border-borderColor"></div>
        <div className="text-center text-secondary text-2xl font-normal ">OR</div>
        <div className="w-full h-[0px]  border border-borderColor"></div>
      </div>
      <p className="text-secondary text-xl">Continue with Social Media</p>
      <div className="flex justify-center items-center gap-5">
        <div className="border w-16 h-16 rounded-full flex justify-center items-center">
          <img src={google} alt="google" className="w-12 " />
        </div>
        <div className="border w-16 h-16  rounded-full flex justify-center items-center">
          <img src={facebook} alt="facebook" className="w-12 " />
        </div>
        <div className="border w-16 h-16 rounded-full flex justify-center items-center">
          <img src={linkedIn} alt="linkedIn" className="w-12 " />
        </div>
        <div className="border w-16 h-16 rounded-full flex justify-center items-center">
          <img src={twitter} alt="twitter" className="w-10 " />
        </div>
      </div>
    </div>
  )
}

export default LoginForm