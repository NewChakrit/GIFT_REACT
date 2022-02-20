import "./Loader.css";
import { motion } from "framer-motion";

const item = {
  hidden: {
    opacity: 0,
    scale: 4,
    y: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, -0.5, 0.95],
      duration: 2,
    },
  },
  exit: {
    opacity: 0,
    scale: 3,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

function Loader({ setLoginLoading }) {
  return (
    <div className="loader">
      <motion.div
        className="loader-com"
        variants={item}
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoginLoading(false)}
      >
        <motion.div
          className="transition-image"
          variants={item}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <img
            className="loader-img"
            src="https://media.giphy.com/media/5bsOIT6O4igIc1EnUZ/giphy.gif"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Loader;
