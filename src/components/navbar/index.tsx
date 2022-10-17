import { menu } from "../../constraints/links";
import NavItem from "./NavItem";
import './Navbar.css'
import { motion } from 'framer-motion'

const container = {
  hidden: { y: -100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      duration: 1
    }
  }
}

const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar">
      <a className="navbar-main-link">Outliant</a>
      <motion.ul variants={container} initial={container.hidden} animate={container.show} className="navbar-menu">
        {menu.map((item) => {
          return (
            <NavItem key={item.name} name={item.name} />
          )
        })}
      </motion.ul>
    </nav>
  )
}

export default Navbar;