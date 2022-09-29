import { useSideBarContext } from "../context";

export const Shadow = ({ children }) => {
  const { handleSideBar, isSideBarOpen } = useSideBarContext();
  return (
    <div
      onClick={() => handleSideBar()}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: `100%`,
        height: `100%`,
        display: isSideBarOpen === true ? "block" : "none",
        background: "rgba(255, 255, 255, 0.4)",
      }}
    >
      {children}
    </div>
  );
};