import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

import propsTypes from "prop-types";

const AccordionDetails = ({ title, description }) => {
  const [accordionState, setAccordionState] = useState(false);
  const toggleAccordion = () => {
    // console.log(accordion);
    setAccordionState(!accordionState);
  };
  return (
    <>
      <div
        className="p-5 rounded-t font-semibold  text-gray-200 active:bg-[#031633] flex items-center justify-between  cursor-pointer "
        onClick={toggleAccordion}
      >
        <h3>{title}</h3>
        <IoIosArrowForward className={accordionState ? "rotate-90" : ""} />
      </div>
      <div className={"p-5 " + (accordionState ? "block" : "hidden ")}>
        <p className="text-gray-200">{description}</p>
      </div>
    </>
  );
};

export default AccordionDetails;

AccordionDetails.propTypes = {
  title: propsTypes.string,
  description: propsTypes.string,
};
