import { useState } from "react";
import Textarea from "../Components/Textarea";
import icon from "../assets/profile.png";
import WhatsAppUI from "../layouts/WhatsAppUI";
import SetTime from "../Components/SetTime";
import NetWork from "../Components/NetWork";
import Status from "../Components/Status";
import Setdate from "../Components/Setdate";

import settings from "../data/setting";

export const MainPage = () => {
  // Creating a Object using useState() Function and setting default values

  const { person, status, network, time, myMessage, friendMessage } = settings;
  const [Person, SetContent] = useState({
    person: person,
    status: status,
    network: network,
    time: time,
    myMessage: myMessage,
    friendMessage: friendMessage,
    img: icon
  });

  function changeFunc(e) {
    const name = e.target.name;
    let value;
  
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    } else if (e.target.type === "file") {
      value = e.target.files[0];
    } else {
      value = e.target.value;
    }
  
    SetContent({ ...Person, [name]: value });
  }

  return (
    <>
      <section className="bg-ctm ">
        <div className="container mx-auto py-20">
          <div className="grid xl:grid-cols-2  gap-x-2 p-3">
            <section className="">
              <div className="md:max-w-[500px] w-full mx-auto m-3 p-2 rounded bg-[#176B87]">
                <div>
                  <h2 className="font-semibold text-white text-center">
                    Person
                  </h2>
                  <div className="flex items-center gap-x-1 justify-center shadow-lg">
                    <div>
                      <div className="flex items-center justify-center bg-grey-lighter ">
                        <label className=" flex flex-col items-center p-3 py-2 py-  text-blue rounded-lg tracking-wide uppercase  cursor-pointer hover:bg-blue ">
                          <img src={icon} className="w-12" alt="" />
                          <input
                            type="file"
                            className="hidden"
                            name="img"
                            onChange={changeFunc}
                          />
                        </label>
                      </div>
                    </div>
                    <div className=" overflow-hidden inline-block">
                      <input
                        type="text"
                        name="person"
                        placeholder="Name of the Person"
                        onChange={changeFunc}
                        className="outline-none rounded px-2 py-1 inline-block"
                        maxLength="10"
                      />
                    </div>
                  </div>

                  <div className="mt-2">
                    <span className="font-semibold text-gray-200">
                      Network & Time
                    </span>

                    {/* Network & Time */}
                    <div>
                      <div className="grid grid-cols-3 gap-x-2 mt-1">
                        {/* NetWork Components */}
                        <NetWork handleFunction={changeFunc} />
                        {/* Time Components */}
                        <div className="">
                          <SetTime
                            PersonDetails={Person}
                            handleFunction={changeFunc}
                          />
                        </div>

                        {/* Date Components [❌ Stream] */}
                        <div className="">
                          <Setdate handleFunction={changeFunc} />
                        </div>
                      </div>
                    </div>
                    {/* NetworkSelect End */}

                    {/* radio Components */}
                    <div className="mt-2">
                      <h4 className="font-semibold text-gray-200">Status</h4>
                      <Status handleFunction={changeFunc} />
                    </div>

                    {/* textarea */}
                    <Textarea
                      handleFunction={changeFunc}
                      PersonDetails={Person}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section className="">
              <div className="m-2 ">
                <WhatsAppUI PersonDetails={Person} />
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
};
