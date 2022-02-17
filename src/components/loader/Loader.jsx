import "./Loader.css";
import { motion } from "framer-motion";

const item = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  show: {
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.5, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
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
        initial="hidden"
        animate="show"
        exit="exit"
        onAnimationComplete={() => setLoginLoading(false)}
      >
        <motion.div className="transition-image" variants={item}>
          <img
            className="loader-img"
            src="https://media.giphy.com/media/xT0GqFhyNd0Wmfo6sM/giphy.gif"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Loader;
