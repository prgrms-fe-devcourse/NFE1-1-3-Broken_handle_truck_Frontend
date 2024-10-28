import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import UserIcon from "../assets/images/user.svg?react";
import StarIcon from "../assets/images/star.svg?react";
import MapIcon from "../assets/images/map.svg?react";
import CategoryIcon from "../assets/images/category.svg?react";

interface BottomNavBarProps {
  isOpenCategory: boolean;
  setOpenCategory: (isOpen: boolean | ((prev: boolean) => boolean)) => void;
}

const BottomNavBar = ({
  isOpenCategory,
  setOpenCategory,
}: BottomNavBarProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isOwner] = useState(true); // 사장님인지 아닌지

  // 라우팅 경로를 처리하는 함수입니다
  const handleClick = (path: string) => {
    setOpenCategory(false);
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(path);
      });
    } else {
      navigate(path);
    }
  };

  const isFocused = (path: string) => !isOpenCategory && pathname === path;

  return (
    <div className="flex bg-black text-xs sticky bottom-0 z-[999999999]">
      <div
        className={[
          "flex flex-col flex-1 py-4 gap-1 items-center justify-center cursor-pointer",
          isFocused("/map")
            ? "text-primary stroke-primary"
            : "text-white stroke-white",
        ].join(" ")}
        onClick={() => handleClick("/map")}
      >
        <MapIcon width={24} height={24} />
        <p>지도</p>
      </div>
      <div
        className={[
          "flex flex-col flex-1 py-4 gap-1 items-center justify-center cursor-pointer",
          isOpenCategory
            ? "text-primary stroke-primary"
            : "text-white stroke-white",
        ].join(" ")}
        onClick={() => setOpenCategory((prev) => !prev)}
      >
        <CategoryIcon width={24} height={24} />
        <p>카테고리</p>
      </div>
      {isOwner ? (
        <div
          className={[
            "flex flex-col flex-1 py-4 gap-1 items-center justify-center cursor-pointer",
            isFocused("/my-truck")
              ? "text-primary stroke-primary"
              : "text-white stroke-white",
          ].join(" ")}
          onClick={() => handleClick("/my-truck")}
        >
          <UserIcon width={24} height={24} />
          <p>내 가게</p>
        </div>
      ) : (
        <div
          className={[
            "flex flex-col flex-1 py-4 gap-1 items-center justify-center cursor-pointer",
            isFocused("/bookmark")
              ? "text-primary stroke-primary"
              : "text-white stroke-white",
          ].join(" ")}
          onClick={() => handleClick("/bookmark")}
        >
          <StarIcon width={24} height={24} />
          <p>북마크</p>
        </div>
      )}
    </div>
  );
};

export default BottomNavBar;
