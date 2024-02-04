import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { BiListUl } from "react-icons/bi";
import { BsBookmarkFill } from "react-icons/bs";
import { FaMagnifyingGlass, FaRegEnvelope } from "react-icons/fa6";
import { GoHomeFill, GoBell } from "react-icons/go";
import { PiDotsThreeCircle } from "react-icons/pi";

const NavMenu = () => {
  return (
    <nav className="flex flex-col flex-grow">
      <Link href="/home" className="group self-start">
        <div className="text-white-color flex items-center justify-start gap-6 p-[13px] group-hover:bg-gray-rgba duration-200 ease-linear rounded-full">
          <GoHomeFill className="w-6 h-6" />
          <span className="text-[22px] mr-[22px]">Home</span>
        </div>
      </Link>
      <Link href="/explore" className="group self-start">
        <div className="text-white-color flex items-center justify-start gap-6 p-[13px] group-hover:bg-gray-rgba duration-200 ease-linear rounded-full">
          <FaMagnifyingGlass className="w-6 h-6" />
          <span className="text-[22px] mr-[22px]">Explore</span>
        </div>
      </Link>
      <Link href="/notifications" className="group self-start">
        <div className="text-white-color flex items-center justify-start gap-6 p-[13px] group-hover:bg-gray-rgba duration-200 ease-linear rounded-full">
          <GoBell className="w-6 h-6" />
          <span className="text-[22px] mr-[22px]">Notifications</span>
        </div>
      </Link>
      <Link href="/messages" className="group self-start">
        <div className="text-white-color flex items-center justify-start gap-6 p-[13px] group-hover:bg-gray-rgba duration-200 ease-linear rounded-full">
          <FaRegEnvelope className="w-6 h-6" />
          <span className="text-[22px] mr-[22px]">Messages</span>
        </div>
      </Link>
      <Link href="/bookmarks" className="group self-start">
        <div className="text-white-color flex items-center justify-start gap-6 p-[13px] group-hover:bg-gray-rgba duration-200 ease-linear rounded-full">
          <BsBookmarkFill className="w-6 h-6" />
          <span className="text-[22px] mr-[22px]">Bookmarks</span>
        </div>
      </Link>
      <Link href="/lists" className="group self-start">
        <div className="text-white-color flex items-center justify-start gap-6 p-[13px] group-hover:bg-gray-rgba duration-200 ease-linear rounded-full">
          <BiListUl className="w-6 h-6" />
          <span className="text-[22px] mr-[22px]">Lists</span>
        </div>
      </Link>
      <Link href="/profile" className="group self-start">
        <div className="text-white-color flex items-center justify-start gap-6 p-[13px] group-hover:bg-gray-rgba duration-200 ease-linear rounded-full">
          <AiOutlineUser className="w-6 h-6" />
          <span className="text-[22px] mr-[22px]">Profile</span>
        </div>
      </Link>
      <Link href="/more" className="group self-start">
        <div className="text-white-color flex items-center justify-start gap-6 p-[13px] group-hover:bg-gray-rgba duration-200 ease-linear rounded-full">
          <PiDotsThreeCircle className="w-6 h-6" />
          <span className="text-[22px] mr-[22px]">More</span>
        </div>
      </Link>
      <button className="bg-[rgb(29_161_242)] text-xl text-white-color rounded-full w-[200px] h-[50px] self-start mt-[20px]">
        Post
      </button>
    </nav>
  );
};

export default NavMenu;
