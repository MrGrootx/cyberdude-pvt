import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { RiBatteryChargeFill } from "react-icons/ri";

import { FaArrowLeft } from "react-icons/fa6";
import { GoDeviceCameraVideo } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";

import { HiOutlinePlusSm } from "react-icons/hi";
import { TiMessage } from "react-icons/ti";

import { CiCamera } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";
import { FaWifi } from "react-icons/fa";
// import icon from "../assets/profile.png";

import PropTypes from "prop-types";
import TheImg from "../Components/TheImg";

const WhatsAppUI = (props) => {
  // console.log(props.Person);
  const { PersonDetails } = props;
  const { person, status, network, time, myMessage, friendMessage } =
    PersonDetails;

  return (
    <>
      <div className="md:mx-36 lg:mx-48 xl:mx-36 2xl:mx-48">
        <div className="bg-[#128c7e] rounded">
          <div className="m-1">
            <div className="flex justify-between">


              <div>
                <span className="font-bold uppercase text-gray-50">{time}</span>
              </div>
              <div className="flex items-center gap-x-1 text-gray-50">
                <MdOutlineSignalCellularAlt className="text-xl" />
                <span className="font-bold text-xs">{network === 'wifi' ? <FaWifi /> : network }</span>
                <RiBatteryChargeFill className="text-xl" />
              </div>
            </div>

            <div className="flex justify-between mt-2 mx-1">
              <div className="flex items-center gap-x-2">
                <FaArrowLeft className="text-gray-50" />
                {/* <img src={typeof img === 'object' ? URL.createObjectURL(img) : img} className="w-10 h-10 rounded-full" alt="" /> */}
                <TheImg PersonDetails={PersonDetails}/>
                <div className="">
                  <h4 className="font-bold capitalize text-gray-50">
                    {person}
                  </h4>
                  <h4 className="font-semibold text-gray-200 text-smn">
                    {status}
                  </h4>
                </div>
              </div>

              <div className="flex gap-x-3 items-center text-gray-50">
                <GoDeviceCameraVideo className="text-xl" />
                <BsTelephone className=" text-xl " />
              </div>
            </div>
          </div>
          {/* main */}
          <div className="bg-wts ">
            <div className="pt-3">
              <h4 className="font-semibold text-xs text-center uppercase">{time}</h4>
            </div>

            <div className="mt-4 pb-3 w-full">
              <div>
                <div className="bg-gray-100 inline-block p-2 ml-2 rounded-r-lg rounded-tl-lg font-semibold text-gray-600 text-xs md:max-w-36 lg:max-w-44 shadow">
                  <h3>{friendMessage}</h3>
                </div>
              </div>

              {/* Other */}
            </div>

            <div className="pb-3 w-full flex justify-end pr-2">
              <div>
                <div className="bg-gray-100 inline-block p-2 ml-2 rounded-l-lg rounded-tl-lg font-semibold text-gray-600 text-xs  max-w-44 shadow rounded-tr-lg">
                  <h3 className="">{myMessage}</h3>
                </div>
              </div>

              {/* Other */}
            </div>

            <div className="pb-2 py-60">
              <div>
                <div className="flex items-center">
                  <div className="relative flex items-center w-full">
                    <HiOutlinePlusSm className="text-2xl " />

                    <div className="w-full relative ml-1">
                      <input
                        type="text"
                        className="w-full outline-none rounded px-1 py-1 text-xs pl-2"
                      />
                      <TiMessage className="absolute right-2 top-1/2 transform -translate-y-1/2" />
                    </div>

                    {/* Footer  */}
                    <div className="flex gap-x-2 ml-2 font-bold text-xl">
                      <CiCamera />
                      <CiMicrophoneOn />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsAppUI;

WhatsAppUI.propTypes = {
  PersonDetails: PropTypes.object,
};
