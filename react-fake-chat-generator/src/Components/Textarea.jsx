
import propTypes from 'prop-types'

const Textarea = (props) => {

  const {handleFunction} = props
  // console.log(PersonDetails);

  return (
    <div>
      <div className="mt-2">
        <div>
          <h3 className="font-semibold text-gray-200">Me</h3>
          <textarea
            name="myMessage"
            id=""
            cols="30"
            rows="3"
            placeholder="My Message"
            className=" p-1 rounded w-full outline-none font-semibold"
            onChange={handleFunction}
          ></textarea>
        </div>
      </div>

      <div className="mt-2">
        <div>
          <h3 className="font-semibold text-gray-200">Other</h3>
          <textarea
            name="friendMessage"
            id=""
            cols="30"
            rows="3"
            placeholder="Other's Message"
            className=" p-1 rounded w-full outline-none font-semibold"
            onChange={handleFunction}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Textarea;

Textarea.propTypes = {
  handleFunction: propTypes.func
}