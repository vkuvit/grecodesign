"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FiMenu, FiArrowRight } from "react-icons/fi";

const Navbar = () => {
  return (
    <>
    <div className="bg-transparent fixed z-50 w-screen flex flex-row justify-between">
      <Logo/>
      <FlipNav />
    </div>
    </>
  );
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white w-full sm:px-20 px-5 py-2 md:py-6 flex items-center justify-end relative">
      <NavLeft setIsOpen={setIsOpen} />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

const Logo = () => {
  return (
  <Link href='/' className="w-full px-10 py-5">
    <Image src="/assets/img/logo.png" alt="GrecoDesign" width={150} height={150} />
  </Link>
  );
};

const NavLeft = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-gray-950 text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <NavLink text="Notre Carte" linksite="/carte" />
      <NavLink text="Histoire" linksite="/histoire" />
      <NavLink text="Franchise" linksite="/franchise" />
    </div>
  );
};

const NavLink = ({ text, linksite }) => {
  return (
    <a
      href={linksite}
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-black">{text}</span>
        <span className="flex items-center h-[30px] text-amber-600">
          {text}
        </span>
      </motion.div>
    </a>
  );
};


const NavMenu = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className="absolute py-3 bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-3"
    >
      <MenuLink text="Notre Carte" linksite="/carte" />
      <MenuLink text="Histoire" linksite="/histoire" />
      <MenuLink text="Franchise" linksite="/franchise" />
    </motion.div>
  );
};

const MenuLink = ({ text, linksite }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href={linksite}
      className="h-[40px] hover:bg-amber-600 pl-4 py-1 w-screen text-black hover:text-white overflow-hidden font-medium text-xl flex items-start gap-2"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px]">{text}</span>
      </motion.div>
    </motion.a>
  );
};

export default Navbar;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};