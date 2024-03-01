import PropTypes from "prop-types";
const Status = (props) => {
  const { handleFunction } = props;
  return (
    <div>
      <div className="status flex gap-x-2 items-center">
        <label htmlFor="online" className="font-semibold text-gray-200">
          <input
            type="radio"
            name="status"
            className="mr-2"
            id="online"
            value="online"
            onChange={handleFunction}
          />
          online
        </label>
        <label htmlFor="offline" className="font-semibold text-gray-200">
          <input
            type="radio"
            name="status"
            className="mr-2"
            id="offline"
            value="offline"
            onChange={handleFunction}
          />
          offline
        </label>
      </div>
    </div>
  );
};

export default Status;

Status.propTypes = {
  handleFunction: PropTypes.func,
};
