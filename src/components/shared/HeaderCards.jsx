import PropTypes from 'prop-types'

const HeaderCards = ({ text }) => {
  return (
    <div className='bg-gradient-to-l from-[#1E63A7] to-[#0F2335] px-4 py-2 text-3xl rounded-2xl text-white font-semibold ' >{text}</div>
  )
}
HeaderCards.propTypes = {
  text: PropTypes.string
}

export default HeaderCards