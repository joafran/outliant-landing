import Navbar from "../../components/navbar";
import videoPlayback from '../../assets/videoplayback.mp4'
import './Home.css'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

const Home = () => {
  return (
    <div className="home">
      <div className="overlay"></div>
        <Navbar />
        <video className="home-video" src={videoPlayback} autoPlay muted loop></video>
        <div className="home-content">
          <motion.div variants={container} initial="hidden" animate="show" className="home-content__header">
            <motion.h2 variants={item}>We bring</motion.h2>
            <motion.div variants={item} className="header-whiteline">
              <div className="white-line"></div>
              <h2>visionary</h2>
            </motion.div>
            <motion.h2 variants={item}>ideas to <span>life.</span></motion.h2>
            <motion.p variants={item}>
              A modern, one-stop decentralized agency focused
              on creating the future.
            </motion.p>
          </motion.div>
        </div>
    </div>
  )
}

export default Home;