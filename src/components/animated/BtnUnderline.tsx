import { motion } from 'framer-motion'

interface BtnUnderlineProps {
    classes?: string;
}
const BtnUnderline = ({ classes }:BtnUnderlineProps): JSX.Element => {
  return (
    <motion.div 
    variants={{
      hidden: { width: 0 },
      visible: { width: '100%' }
    }}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.8, delay: 0.2 }}
    className={classes}
    >
    </motion.div>
)
}

export default BtnUnderline