import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import Link from "next/link";
// import {AcmeLogo} from "./AcmeLogo.jsx";

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Projects"];
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      isBordered
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            SS
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="/#experience">
            Experience
          </Link>
        </NavbarItem>
        <NavbarItem
        // isActive
        >
          <Link
            href="/projects"
            // aria-current="page"
            color="foreground"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/#contactMe">
            Contact Me
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        {/* <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem> */}
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="https://drive.google.com/file/d/1Na43tjZl0ue06M7MMbdyiyltJvkdvxHI/view"
            variant="flat"
          >
            Resume
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="h-fit">
        <NavbarMenuItem>
          <Link
            className="w-full"
            href="/#experience"
            onClick={() => setIsMenuOpen(false)}
            // size="lg"
          >
            Experience
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full"
            href="/projects"
            onClick={() => setIsMenuOpen(false)}
            // size="lg"
          >
            Projects
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            className="w-full"
            href="/#contactMe"
            onClick={() => setIsMenuOpen(false)}
            // size="lg"
          >
            Contact Me
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
