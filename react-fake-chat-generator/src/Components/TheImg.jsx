import PropTypes from "prop-types";
const TheImg = (props) => {
  const { PersonDetails } = props;
  const { img } = PersonDetails;
  return (
    <div>
      <img
        src={typeof img === "object" ? URL.createObjectURL(img) : img}
        className="w-10 h-10 rounded-full"
        alt=""
      />
    </div>
  );
};

export default TheImg;
TheImg.propTypes = {
   PersonDetails: PropTypes.object,
 };
 