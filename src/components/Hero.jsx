import profilePic from "../assets/saurabhSingh.png";
import { motion } from "framer-motion";
import { HERO_CONTENT } from "../constants";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-6xl font-bold tracking-tight lg:mt-16 lg:text-8xl"
            >
              Saurabh Singh.
            </motion.h1>
            <motion.h2
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="text-4xl font-semibold text-gray-300"
            >
              I build things for the web.
            </motion.h2>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-4 max-w-xl text-lg font-light text-gray-300"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Saurabh Singh"
              className="w-85 h-81 rounded-full mt-[-70px] ml-20"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
