import { RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";
import { FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-start justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiExpress className="text-7xl text-gray-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandCpp className="text-7xl text-blue-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaJava className="text-7xl text-red-400" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
