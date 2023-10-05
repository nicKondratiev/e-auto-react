import React, { useState, useEffect, useRef } from "react";

import "./styles.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type DropDownProps = {
  header: string;
  Child: React.ReactNode;
  overflow: "hidden" | "scroll";
};

const DropDown = ({ header, Child, overflow }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // add event listener to detect clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as HTMLElement)
      ) {
        closeDropdown();
      }
    };

    // add the event listener
    window.addEventListener("mousedown", handleClickOutside);

    // cleanup the event listener on unmount
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      className="relative flex justify-center text-2xl text-white"
    >
      <div onClick={toggleDropdown} className="dropdown-outter flex w-[180px]">
        <h1>{header}</h1>
        <div className="rounded-full p-1.5 duration-100 ease-in hover:bg-gray-100">
          <KeyboardArrowDownIcon
            className={`${
              isOpen ? "rotate-180" : "rotate-0 duration-150 ease-in"
            }`}
            fontSize="small"
          />
        </div>
      </div>

      <div
        // eslint-disable-next-line tailwindcss/no-custom-classname
        className={`${
          isOpen ? "absolute" : "hidden"
        } overflow-${overflow} left-0 top-20 z-10  h-[350px] w-[350px] rounded-xl bg-white`}
      >
        {Child}
      </div>
    </div>
  );
};

export default DropDown;
