/* eslint-disable tailwindcss/no-custom-classname */
import React, { useState, useEffect, useRef } from "react";

import "./styles.css";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import CloseIcon from "@mui/icons-material/Close";

type DropDownProps = {
  header: string;
  Child: React.ReactNode;
  item: string | number;
  canOpen: boolean;
};

const DropDown = ({ header, Child, item, canOpen }: DropDownProps) => {
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
      className="relative flex w-full justify-center lg:w-auto"
    >
      {isOpen && (
        <div className="overlay md:hidden" onClick={closeDropdown}></div>
      )}
      <div
        onClick={canOpen ? toggleDropdown : () => null} // we have to check data truthiness because we don't want to open models dropdown before we have manu selected
        className={`${
          !canOpen ? "border-none bg-gray-100 text-gray-300" : ""
        } ${
          item ? "border-[0.5px] border-black" : ""
        } dropdown-outter flex w-full overflow-hidden lg:w-[180px]`}
      >
        <div className="relative flex h-auto flex-col justify-center">
          <span
            className={`${
              isOpen || item
                ? "absolute -translate-y-4 py-1 text-xs text-gray-400"
                : ""
            } duration-200 ease-in`}
          >
            {header}
          </span>
          {item && <span className="translate-y-1">{item}</span>}
        </div>
        <div className="rounded-full p-1.5 hover:bg-gray-100">
          <KeyboardArrowDownIcon
            className={`${
              isOpen ? "open-animation rotate-180" : "close-animation rotate-0"
            }`}
            fontSize="small"
          />
        </div>
      </div>

      <div
        className={`${
          isOpen
            ? "fixed bottom-[0px] lg:absolute"
            : "fixed bottom-[-500px] lg:hidden"
        } z-50 flex h-2/3 w-full flex-col overflow-hidden rounded-t-xl border bg-white duration-200 ease-in lg:left-0 lg:top-16 lg:h-[350px] lg:w-[350px] lg:rounded-xl lg:duration-0`}
      >
        <div className={`grow overflow-y-auto`}>{Child}</div>
        <div className="bottom-0 flex w-full items-center justify-center bg-white py-2">
          <span
            onClick={() => setIsOpen(false)}
            className="w-10/12 cursor-pointer rounded-lg bg-[#272A37] p-2 text-center text-sm text-white"
          >
            Select
          </span>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
