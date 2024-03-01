import { TheNavbar } from "../Components/TheNavbar"

import { Outlet} from 'react-router-dom'
import '../index.css'
import TheFooter from "../Components/TheFooter"
export const MainLayout = () => {
  return (
    <>
    <Outlet/>
      <TheNavbar/>
      <TheFooter/>
    </>
  )
}
