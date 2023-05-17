import SideBar from "./SideBar";
import TopBar from "./TopBar";

const SideBarAndBody = ({ children }) => {
  return (
    <div className="">
      <div className="flex">
        <div className="w-64 hidden sm:block">
          <SideBar />
        </div>
        <div className="w-[83%] flex flex-col">
          <div className="fixed w-inherit z-50">
            <TopBar />
          </div>
          <div className="mt-[131px]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarAndBody;