"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { FcMenu, FcPlus,FcTodoList  } from "react-icons/fc";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/90 text-white backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between p-3 md:flex-nowrap flex-wrap">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link
            href="/"
            className="text-lg font-semibold text-green-400 hover:text-green-300"
          >
            Todo App
          </Link>

          <button
            className="inline-flex items-center cursor-pointer justify-center rounded md:hidden p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <FcMenu />
          </button>
        </div>

        {!open && (
          <ul className="flex md:items-center md:flex-row flex-col items-start gap-4 md:flex mt-2 md:mt-0">
            <li>
              <NavLink href="/add-todo"> <FcPlus /> Add Todo</NavLink>
            </li>
            <li>
              <NavLink href="/todos">
              <FcTodoList /> View Todos
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
