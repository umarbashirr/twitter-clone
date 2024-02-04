import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";

const Logo = () => {
  return (
    <Link
      href="/"
      className="w-[54px] h-[54px] hover:bg-gray-rgba flex items-center justify-center rounded-full duration-200 ease-linear"
    >
      <BsTwitterX className="text-white w-[30px] h-[27px]" />
    </Link>
  );
};

export default Logo;
