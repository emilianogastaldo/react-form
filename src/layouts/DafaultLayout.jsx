// Outlet serve per poter inserire dell'altro html all'interno del Layout 
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
     return (
     <>
       <h1>NavBar</h1>
       <Outlet/>
       <footer>Footer</footer>
     </>
     )
}
export default DefaultLayout;