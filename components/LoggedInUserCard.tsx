import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";

const LoggedInUserCard = () => {
  return (
    <div className="cursor-pointer flex items-center justify-start gap-4 hover:bg-gray-rgba duration-200 ease-in-out p-[13px] rounded-full">
      <div className="w-[44px] h-[44px] shrink-0 ">
        <Image
          src="/images/user.jpg"
          alt="Profile Image"
          width={44}
          height={44}
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex-grow">
        <h2 className="text-white-color text-[17px] leading-normal font-bold whitespace-nowrap max-w-[130px] overflow-hidden">
          Umar Bashir Rather
        </h2>
        <span className="text-gray-rgba text-[17px] leading-normal">
          @umarbashirr
        </span>
      </div>
      <div>
        <BsThreeDots className="w-6 h-6 text-white-color" />
      </div>
    </div>
  );
};

export default LoggedInUserCard;
