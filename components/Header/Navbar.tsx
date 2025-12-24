"use client";
import { Menu, Search, ShoppingCart, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SignedIn, UserButton } from "@clerk/nextjs";

interface Props {}

export const Navbar = (props: Props) => {
  const cart = [1, 2, 3];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link href={"/"} className="font-bold text-lg">
            Gourmet
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link href={"/menu"} className="text-sm font-medium">
              Menu
            </Link>
            <Link href={"/about"} className="text-sm font-medium">
              About
            </Link>
            <Link href={"/admin"} className="text-sm font-medium">
              Admin
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/3 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search Menu..."
              className="pl-10 w-[160px] md:w-[250px] "
            />
          </div>
          <Link href={"/cart"} className="relative">
            <Button variant={"ghost"}>
              <ShoppingCart className="h-5 w-5" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {cart.length}
                </span>
              )}
            </Button>
          </Link>

          <SignedIn>
            <UserButton />
          </SignedIn>

          <Button
            size={"icon"}
            variant={"ghost"}
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      
      {menuOpen && (
        <div className="md:hidden px-4 py-2 border-t bg-background space-y-2">
          <Link href={"/menu"} className="block text-sm font-medium">
            Menu
          </Link>
          <Link href={"/about"} className="block text-sm font-medium">
            About
          </Link>
          <Link href={"/admin"} className="block text-sm font-medium">
            Admin
          </Link>
          <div className="relative mt-2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search menu..." className="pl-10 w-full" />
          </div>
        </div>
      )}
    </header>
  );
};
