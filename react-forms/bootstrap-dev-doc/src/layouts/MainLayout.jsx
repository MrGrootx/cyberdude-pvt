import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";
import Home from "../Pages/Home";
// import Home from "../Pages/Home";
const MainLayout = () => {
  return (
    <>
      <TheNavbar />

      <div>
        <Home />

        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
