import { motion } from 'framer-motion'
interface NavItemProps {
    name: string;
    key: string;
};

const item = {
  hidden: { y: -100, opacity: 0 },
  show: { y: 0, opacity: 1 }
}
const NavItem: React.FC<NavItemProps> = ({key, name}): JSX.Element => {
  return (
    <motion.li variants={item} className="menu__item" key={key}>
        <a>{name}</a>
    </motion.li>
  )
}

export default NavItem;