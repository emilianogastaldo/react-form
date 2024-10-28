// Outlet serve per poter inserire dell'altro html all'interno del Layout 
import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";

const DefaultLayout = () => {
     return (
     <>
       <NavBar/>
       <Outlet/>
       <footer>Footer</footer>
     </>
     )
}
export default DefaultLayout;