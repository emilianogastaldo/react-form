import { NavLink } from "react-router-dom";
import './NavBar.css'
const urlPages = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Pizze',
        href: '/pizzas'
    },
    {
        label: 'Contatti',
        href: '/contacts'
    },
]

const NavBar = () => {
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
export default NavBar;