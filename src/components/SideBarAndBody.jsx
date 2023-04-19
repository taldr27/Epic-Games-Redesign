import SideBar from "./SideBar";
import TopBar from "./TopBar";

const SideBarAndBody = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-64">
        <SideBar />
      </div>
      <div className="w-[83%]">
        <TopBar />
        {children}
      </div>
    </div>
  );
};

export default SideBarAndBody;