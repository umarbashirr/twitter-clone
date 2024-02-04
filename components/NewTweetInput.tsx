import Image from "next/image";
import React from "react";
import { BiGlobe } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";
import { FaListUl } from "react-icons/fa6";
import { GoSmiley } from "react-icons/go";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuCalendarClock } from "react-icons/lu";
import { MdOutlineGifBox } from "react-icons/md";

const NewTweetInput = () => {
  return (
    <div className="px-[18px] flex gap-4 pt-4 pb-2 w-full border-b border-b-light-gray">
      <div className="w-[44px] h-[44px] shrink-0 pt-2">
        <Image
          src="/images/user.jpg"
          alt="Profile Image"
          width={44}
          height={44}
          className="rounded-full object-cover"
        />
      </div>
      <div className="w-full">
        <div className="border-b border-b-light-gray pb-[13px]">
          <div className="py-[13px]">
            <label htmlFor="tweetInput" hidden></label>
            <input
              type="text"
              id="tweetInput"
              className="bg-transparent text-[22px] focus:outline-none text-white-color"
              placeholder="What's happening?"
            />
          </div>
          <div className="hover:bg-primary-color-10 duration-200 ease-in-out rounded-full flex items-center justify-start py-px pl-1 pr-3 max-w-max">
            <p className="text-primary-color flex items-center justify-start gap-2 cursor-pointer ">
              <BiGlobe className="w-4 h-4" />
              <span>Everyone can replay</span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between h-[53px]">
          <div className="flex items-center justify-start">
            <button className="w-[38px] h-[38px] flex items-center justify-center text-primary-color hover:bg-primary-color-10 duration-200 ease-in-out rounded-full">
              <CiImageOn className="h-[22px] w-[22px]" />
            </button>
            <button className="w-[38px] h-[38px] flex items-center justify-center text-primary-color hover:bg-primary-color-10 duration-200 ease-in-out rounded-full">
              <MdOutlineGifBox className="h-[22px] w-[22px]" />
            </button>
            <button className="w-[38px] h-[38px] flex items-center justify-center text-primary-color hover:bg-primary-color-10 duration-200 ease-in-out rounded-full">
              <FaListUl className="h-[22px] w-[22px]" />
            </button>
            <button className="w-[38px] h-[38px] flex items-center justify-center text-primary-color hover:bg-primary-color-10 duration-200 ease-in-out rounded-full">
              <GoSmiley className="h-[22px] w-[22px]" />
            </button>
            <button className="w-[38px] h-[38px] flex items-center justify-center text-primary-color hover:bg-primary-color-10 duration-200 ease-in-out rounded-full">
              <LuCalendarClock className="h-[22px] w-[22px]" />
            </button>
            <button className="w-[38px] h-[38px] flex items-center justify-center text-primary-color hover:bg-primary-color-10 duration-200 ease-in-out rounded-full">
              <HiOutlineLocationMarker className="h-[22px] w-[22px]" />
            </button>
          </div>
          <button className="text-[17px] px-[18px] py-2 bg-primary-color text-white-color rounded-full mt-2 opacity-50">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewTweetInput;
