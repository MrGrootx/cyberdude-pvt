
import propTypes from 'prop-types'

const Setdate = (props) => {
   const {handleFunction} = props
  return (
    <div><div className="">
    <input
      type="date"
      onChange={handleFunction}
      className="outline-none text-sm rounded block w-full p-2.5 bg-gray-700 dark:placeholder-gray-400 dark:text-white"
    />
  </div></div>
  )
}

export default Setdate

Setdate.propTypes = {
   handleFunction: propTypes.func
 }