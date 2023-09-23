import React, { useState, useEffect, useRef } from "react";

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
        setIsOpen(false);
      }
    };

    // add the event listener
    document.addEventListener("mousedown", handleClickOutside);

    // cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex justify-center text-2xl text-white">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-[160px] cursor-pointer items-center justify-center rounded-xl bg-orange-700 px-3 py-2"
      >
        <h1>{header}</h1>
      </div>

      <div
        ref={dropdownRef}
        className={`${
          isOpen ? "absolute" : "hidden"
        } overflow-${overflow}  h-[350px] w-[350px] rounded-xl bg-white`}
      >
        {Child}
      </div>
    </div>
  );
};

export default DropDown;
