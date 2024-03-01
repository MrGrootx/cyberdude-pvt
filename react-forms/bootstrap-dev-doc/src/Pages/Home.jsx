import { useState } from "react";
import Accordion from "../components/Accordion";
import Alerts from "../components/Alerts";
import GetStarted from "../components/GetStarted";
import Buttons from "../components/Buttons";

const Home = () => {
  const [Components, SetComponents] = useState();

  function viewCompontent(componets) {
    // console.log(componets);
    switch (componets) {
      case "getstarted":
        return <GetStarted />;
      case "accordion":
        return <Accordion />;
      case "alerts":
        return <Alerts />;
      case "buttons":
        return <Buttons />;
    }
  }

  return (
    <>
      <section className="">
        
        <div className="container mx-auto h-screen">
          <div className="md:p-9">
            <div className="md:flex ">
              <div className=" w-[300px] p-3">
                <div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      Getting started
                    </h3>
                  </div>
                  <ul className="ml-3 inline-block mt-2">
                    <li
                      className="font-semibold text-gray-300 hover:bg-[#3a2372] px-2 py-1 rounded cursor-pointer"
                      onClick={() => SetComponents("getstarted")}
                    >
                      Introduction
                    </li>
                  </ul>
                </div>

                <div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Components</h3>
                  </div>
                  <ul className="ml-3 inline-block mt-2">
                    <li
                      className="font-semibold text-gray-300 hover:bg-[#3a2372] px-2 py-1 rounded cursor-pointer"
                      onClick={() => SetComponents("accordion")}
                    >
                      Accordion
                    </li>
                    <li
                      className="font-semibold text-gray-300 hover:bg-[#3a2372] px-2 py-1 rounded cursor-pointer"
                      onClick={() => SetComponents("alerts")}
                    >
                      Alerts
                    </li>
                    <li
                      className="font-semibold text-gray-300 hover:bg-[#3a2372] px-2 py-1 rounded cursor-pointer"
                      onClick={() => SetComponents("buttons")}
                    >
                      Buttons
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full p-3">
                {Components ? viewCompontent(Components) : <GetStarted />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
