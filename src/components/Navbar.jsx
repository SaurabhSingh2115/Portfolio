import logo from "../assets/saurabhSinghLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiCodeforces } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a
          href="https://drive.google.com/file/d/1az2PqPwXptdQCGIAAo3GaaVaBiiuPA6e/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            className="mx-2 w-10"
            src={logo}
            alt="logo"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://github.com/SaurabhSingh2115"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub />
          </motion.div>
        </a>
        <a
          href="https://www.linkedin.com/in/saurabhsingh2115/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin />
          </motion.div>
        </a>
        <a
          href="https://leetcode.com/u/cursed_archer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <SiLeetcode />
          </motion.div>
        </a>
        <a
          href="https://codeforces.com/profile/Rightlyso"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <SiCodeforces />
          </motion.div>
        </a>
        <a
          href="https://twitter.com/Zanies07"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaSquareXTwitter />
          </motion.div>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
