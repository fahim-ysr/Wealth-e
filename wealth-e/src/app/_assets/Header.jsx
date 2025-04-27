"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser, UserButton } from "@clerk/nextjs";

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
          <Button variant="outline" className="rounded-full">
            Dashboard
          </Button>
          <Button variant="secondary" className="rounded-full">
            Get Started
          </Button>
        </div>
      )}
    </div>
  );
}

export default Header;
