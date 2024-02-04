import { BiCog } from "react-icons/bi";

const HomeHead = () => {
  return (
    <div className="text-white-color grid grid-cols-[1fr_1fr_50px] border-b border-b-light-gray">
      <button className="relative px-[18px] w-full h-[58px] text-center hover:bg-gray-rgba duration-200 ease-in-out after:absolute after:w-12 after:h-1 after:rounded-full after:bg-primary-color after:bottom-0 after:left-1/2 after:-translate-x-1/2">
        For You
      </button>
      <button className="px-[18px] h-[58px] w-full text-center  hover:bg-gray-rgba duration-200 ease-in-out">
        Following
      </button>
      <button className="px-[9px] h-[58px] w-full flex items-center justify-center">
        <BiCog className="w-6 h-6" />
      </button>
    </div>
  );
};

export default HomeHead;
