import ImageWrapper from "../components/login/ImageWrapper"
import LoginForm from "../components/login/LoginForm"


const Login = () => {
  return (
    <div className="grid grid-cols-2 w-full h-screen" >
      <LoginForm />
      <ImageWrapper />
    </div>
  )
}

export default Login