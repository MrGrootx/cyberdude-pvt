import PropTypes from "prop-types";

const NetWork = (props) => {
  const { handleFunction } = props;

  return (
    <div>
      <div className="">
        <select
          name="network"
          id="networknwt"
          onChange={handleFunction}
          className=" outline-none text-sm rounded  block w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white "
        >
          
          <option value="4G">4G</option>
          <option value="3G">3G</option>
          <option value="2G">2G</option>
        </select>
      </div>
    </div>
  );
};

NetWork.propTypes = {
  handleFunction: PropTypes.func,
};

export default NetWork;
