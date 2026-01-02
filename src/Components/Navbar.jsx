import React from "react";
import logo from "./Images/logo.png";

export default function Navbar() {
  return (
    <div className="fixed top-6 left-0 w-full flex justify-center z-50">
      <div className="w-[95%] max-w-[1450px] h-[100px] bg-[#d9f4ff] rounded-full shadow-xl flex items-center">

      
        <div className="h-full flex items-center px-14 ml-0 bg-[#0b2e4f] rounded-full">
          <img src={logo} alt="SmileExpert" className="h-12" />
        </div>

        
        <ul className="flex items-center gap-8 ml-10 text-[15px] font-medium text-[#0f172a]">

          <NavItem title="About">
            <DropdownItem text="Meet The Team" />
            <DropdownItem text="Our Values" />
          </NavItem>

          <NavItem title="Dental Problems">
            <DropdownItem text="Teeth&Gums" />
            <DropdownItem text="Gum Disease" />
            <DropdownItem text="Yellow Teeth" />
          </NavItem>

          <NavItem title="Treatments">
            <DropdownItem text="Braces" />
            <DropdownItem text="Implants" />
            <DropdownItem text="Whitening" />
          </NavItem>

          <NavItem title="Before & After">
            <DropdownItem text="Gallery" />
            <DropdownItem text="Cases" />
          </NavItem>

          <NavItem title="Patient Safety">
            <DropdownItem text="Sterilization" />
            <DropdownItem text="Protocols" />
          </NavItem>

          <li className="cursor-pointer hover:text-sky-600">Contact</li>
          <li className="cursor-pointer hover:text-sky-600">Blog</li>
        </ul>

        
        <div className="ml-auto flex items-center gap-4 pr-6">
          <button className="px-6 py-2 rounded-full bg-[#0b3b6f] text-white font-semibold hover:bg-[#082c52] transition">
            Call Now
          </button>
          <button className="px-6 py-2 rounded-full bg-[#38bdf8] text-white font-semibold hover:bg-[#0ea5e9] transition">
            Book Appointment
          </button>
        </div>

      </div>
    </div>
  );
}


function NavItem({ title, children }) {
  return (
    <li className="relative group cursor-pointer">
      {/* MENU TEXT */}
      <div className="flex items-center gap-1 hover:text-sky-600">
        {title}
        <svg
          className="w-4 h-4 mt-[1px]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    
      <div
        className="
          absolute left-1/2 -translate-x-1/2 top-full mt-4
          w-52 bg-white rounded-xl shadow-lg
          hidden group-hover:block
        "
      >
        <div className="py-2">{children}</div>
      </div>
    </li>
  );
}


function DropdownItem({ children, heading = false }) {
  return (
    <li
      className={`px-4 py-2 ${
        heading
          ? "text-xs font-semibold text-gray-500 uppercase tracking-wide cursor-default"
          : "text-sm text-gray-700 hover:bg-sky-100 cursor-pointer"
      }`}
    >
      {children}
    </li>
  );
}


