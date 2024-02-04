import HomeHead from "@/components/HomeHead";
import NewTweetInput from "@/components/NewTweetInput";
import Sidebar from "@/components/Sidebar";

const Home = () => {
  return (
    <div className="w-full bg-[rgb(21_32_43)] h-screen">
      <div className="max-w-[1320px] mx-auto min-h-screen flex">
        <Sidebar />
        <main className="w-full max-w-[600px] border-x border-x-light-gray">
          <HomeHead />
          <NewTweetInput />
        </main>
        <div className="right-side-bar">Right Side Bar</div>
      </div>
    </div>
  );
};

export default Home;
