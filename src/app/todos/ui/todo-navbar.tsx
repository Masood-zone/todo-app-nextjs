import Image from "next/image";
import React from "react";
import MenuIcon from "../../../../public/assets/svgs/menu-icon.svg";

function Navbar() {
  return (
    <header className="w-full flex justify-between items-center p-4 border-b border-gray-800">
      <button>
        <Image src={MenuIcon} alt="Menu" width={24} height={24} />
      </button>
      <h1 className="text-xl font-bold">Index</h1>
      <button>
        <Image
          src="/placeholder.svg?height=32&width=32"
          alt="Profile"
          width={32}
          height={32}
          className="rounded-full border-2 "
        />
      </button>
    </header>
  );
}

export default Navbar;
