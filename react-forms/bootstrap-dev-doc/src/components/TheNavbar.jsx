import { FaBootstrap } from "react-icons/fa";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "./Search";
const TheNavbar = () => {
  return (
    <>
      <section className="bg-[#702df6] ">
        <div className="container mx-auto">
          <div className="flex justify-between p-2 items-center">
            <div className="flex items-center ">
              <FaBootstrap className="text-4xl text-white" />

              <div className="hidden lg:block">
                <ul className="flex ml-3 gap-x-3">
                  <li className=" font-bold text-gray-300 hover:text-gray-300 cursor-pointer">
                    Docs
                  </li>
                  <li className=" text-gray-300 hover:text-gray-200 cursor-pointer">
                    Examples
                  </li>
                  <li className=" text-gray-300 hover:text-gray-200 cursor-pointer">
                    Icons
                  </li>
                  <li className=" text-gray-300 hover:text-gray-200 cursor-pointer">
                    Themes
                  </li>
                  <li className=" text-gray-300 hover:text-gray-200 cursor-pointer">
                    Blog
                  </li>
                </ul>
              </div>
            </div>

            <div className="block xl:hidden">
              <GiHamburgerMenu className=" text-2xl font-bold text-white" />
            </div>

            <div className="hidden xl:block">
              <Search />
            </div>

            <div className=" hidden xl:block">
              <div className="flex">
                <div className="flex items-center gap-x-2">
                  <a href="https://github.com/MrGrootx/bootstrap-doc" target="_blank" rel="noopener noreferrer"><FaGithub className="text-xl text-gray-300 hover:text-gray-100 cursor-pointer" /></a>
                  <FaTwitter className="text-xl text-gray-300 hover:text-gray-100 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TheNavbar;
