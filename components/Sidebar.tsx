import LoggedInUserCard from "./LoggedInUserCard";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

const Sidebar = () => {
  return (
    <aside className="w-[275px] h-screen px-[9px] pb-6 flex flex-col">
      <div className="w-full h-[60px] flex items-center justify-start ">
        <Logo />
      </div>
      <NavMenu />
      <LoggedInUserCard />
    </aside>
  );
};

export default Sidebar;
