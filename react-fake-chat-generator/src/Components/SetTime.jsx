import propTypes from 'prop-types'

const SetTime = (props) => {
   const {PersonDetails, handleFunction} = props
   const {time} = PersonDetails
  return (
    <div>
      <div className="">
        <input
          type="text"
          name="time"
          onChange={handleFunction}
          value={time}
          className="outline-none text-sm rounded block w-full p-2.5 bg-gray-700 dark:placeholder-gray-400 dark:text-white uppercase"
          maxLength="8"
        />
      </div>
    </div>
  );
};

export default SetTime;

SetTime.propTypes = {
   PersonDetails: propTypes.object,
   handleFunction: propTypes.func
}