import { NavLink } from "react-router-dom";
import './Navbar.css'
const urlPages = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Pizze',
        href: '/Posts'
    },
    {
        label: 'Contatti',
        href: '/contacts'
    },
]

const Navbar = () => {
     return (
     <header>
        <nav>
            <menu>
            {
                urlPages.map(({label, href}, i) => (
                    <li key={`urlPage${i}`}>
                        <NavLink to={href}>{label}</NavLink>
                    </li>
                ))
            }
            </menu>
        </nav>
     </header>
     )
}
export default Navbar;