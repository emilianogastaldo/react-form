// Outlet serve per poter inserire dell'altro html all'interno del Layout 
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const DefaultLayout = () => {
     return (
     <>
       <Navbar/>
       <Outlet/>
       <footer>Footer</footer>
     </>
     )
}
export default DefaultLayout;