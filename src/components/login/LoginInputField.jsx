import PropTypes from 'prop-types'
const LoginInputField = ({ icon, placeholder, type }) => {
  return (
    <div className="flex items-center rounded-full border border-gray-300 px-3 py-2 bg-white  w-full ">
      <div className="flex items-center justify-center w-10 h-10  rounded-full">
        {icon}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full h-full ml-3 text-secondary placeholder-gray-400 bg-transparent outline-none   rounded-full text-2xl p-2 "
      />
    </div>
  )
}

LoginInputField.propTypes = {
  icon: PropTypes.element.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
}

export default LoginInputField