import React, { useEffect, useState, Fragment } from "react";
import {
  Navbar as MTNavbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";

// nav list menu
const navListMenuItems = [
  {
    title: "roorkee",
    description:
      "a very good place to visit and enjoy the beauty of nature and the culture of the city.",
  },
  {
    title: "haridwar",
    description:
      "a historical place where you can enjoy the beauty of the river ganga and the culture of the city.",
  },
  {
    title: "dehradun",
    description:
      "a very good place to visit and enjoy the beauty of nature and the culture of the city.",
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem className="hover:bg-black">
        <Typography variant="h6" color="white" className="mb-1">
          {title}
        </Typography>
        <Typography variant="small" color="white" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as="a" href="#" variant="small" className="font-normal">
            <MenuItem className="hidden items-center gap-2 font-medium text-white text-lg lg:flex lg:rounded-full">
              <Square3Stack3DIcon className="h-[18px] w-[18px] text-white text-2xl" />{" "}
              Venues{" "}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid bg-black">
          <ul className="col-span-4 flex w-full flex-col gap-1">
            {renderItems}
          </ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-white lg:hidden">
        <Square3Stack3DIcon className="h-[18px] w-[18px] text-white text-lg" />{" "}
        Venues{" "}
      </MenuItem>
      <ul className="ml-6 flex w-full flex-col gap-1 lg:hidden text-white">
        {renderItems}
      </ul>
    </Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: "Photos",
    icon: UserCircleIcon,
  },
  {
    label: "Real Weddings",
    icon: CubeTransparentIcon,
  },
  {
    label: "Shop",
    icon: CodeBracketSquareIcon,
  },
];

function NavList() {
  return (
    <ul className="mt-16 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center ">
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as="a"
          href="#"
          variant="large"
          color="white"
          className="font-medium text-white"
        >
          <MenuItem className="flex items-center gap-2 lg:rounded-full navli">
            {React.createElement(icon, {
              className: "h-[18px] w-[18px] .list_items",
            })}{" "}
            <span className="text-white text-[18px] list_items">
              {" "}
              {label}
            </span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

export default function Enavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <MTNavbar className="mx-auto navbar p-4 lg:px-6 rounded-none bg-[#FB2988]">
      <div className="relative mx-auto flex items-center justify-between text-white">
        <Typography
          as="a"
          href="#"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-semibold text-2xl"
        >
          Event Planner
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="md"
          color="white"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
      </div>
      <MobileNav open={isNavOpen} className="overflow-scroll">
        <NavList />
      </MobileNav>
    </MTNavbar>
  );
}
