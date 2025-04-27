// Forces the component to be a client component and avoid errors
"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-center items-center border shadow-sm">
      {/* Navbar */}
      <div>
        {/* {Logo Here} */}
        <span>Wealth-E</span>
      </div>
      <div>
        <button>Button 1</button>
      </div>
      <div>Button 2</div>
    </div>
  );
}

export default Header;
