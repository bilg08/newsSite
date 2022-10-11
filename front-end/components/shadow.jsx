import { useLoadingContext, useSideBarContext } from "../context";

export const Shadow = ({ children }) => {
  const { handleSideBar, isSideBarOpen } = useSideBarContext();
  const { isLoading, setIsLoading } = useLoadingContext();
  return (
    <div
      onClick={() => handleSideBar()}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: `100%`,
        height: `100%`,
        background:'red',
        display: isSideBarOpen === true ? "block" : "none",
      }}
    >
    </div>
  );
};