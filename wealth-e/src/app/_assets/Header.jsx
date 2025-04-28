// This page is for header (top) section
"use client";

import React from "react";
import Image from "next/image";
// import { Button } from "@/components/ui/button";   // Not working for some reason
import { useUser, UserButton } from "@clerk/nextjs";
import { Button } from "@heroui/button";

function Header() {
  const { user, isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <div className="flex flex-row item-center">
        {/* Logo */}
        <Image src={"/logot.png"} alt="logo" width={100} height={100}></Image>
      </div>
      {/* Checks if user is signed in */}
      {isSignedIn ? (
        <UserButton />
      ) : (
        <div className="flex gap-4 item-center">
          <Button color="secondary" variant="flat">
            Dashboard
          </Button>
          <Button Button color="secondary" variant="ghost">
            Get Started
          </Button>
        </div>
      )}
    </div>
  );
}

export default Header;
