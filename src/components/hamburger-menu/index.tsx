import { useState } from "react";
import DrawerComponent from "../drawer";
import { CloseIcon, HamburgerMenu, LogoBlack } from "@/assets/svg";

const HamburgerMenuComponent = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="block lg:hidden">
      <button onClick={showDrawer}>
        <img src={HamburgerMenu} alt="Hamburger menu" />
      </button>

      <DrawerComponent open={open} width={"100%"} onClose={onClose} rootClassName="hamburger-menu">
        <div>
          <div className="flex items-center justify-between">
            <a href="#">
              <img src={LogoBlack} alt="Oriz logo" />
            </a>

            <button onClick={onClose}>
              <img src={CloseIcon} alt="cancel icon" />
            </button>
          </div>

          <ul className="flex flex-col gap-y-[18px] py-12 font-jakarta text-lg">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
            <li>
              <a href="#">Partners</a>
            </li>
            <li>
              <a href="#">Stories</a>
            </li>
          </ul>

          <div className="flex flex-col gap-x-6 gap-y-4 md:flex-row">
            <button className="rounded-xl bg-green-100 px-9 py-5 text-base text-white">
              <span className="font-medium">Get Started</span> — For Free!{" "}
            </button>

            <button className="h-[70px] rounded-xl bg-black px-9 text-base text-white">Sign in</button>
          </div>
        </div>
      </DrawerComponent>
    </div>
  );
};

export default HamburgerMenuComponent;
