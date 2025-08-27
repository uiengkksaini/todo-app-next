"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FcHighPriority, FcSearch, FcUndo, FcHome } from "react-icons/fc";

export default function NotFound() {
  const path = usePathname();

  return (
    <main className="grid min-h-[calc(100vh-100px)] place-items-center px-6">
      <div className="text-center">
        <div className="mx-auto mb-2 flex items-center justify-center gap-2">
          <FcHighPriority aria-hidden className="h-10 w-10" />
          <p className="text-7xl font-extrabold tracking-tight text-red-600">404</p>
        </div>

        <h1 className="mt-2 text-2xl font-semibold">This page doesn’t exist</h1>

        <p className="mt-2 text-sm text-neutral-600">
          <FcSearch aria-hidden className="inline -mt-1 mr-1 align-middle" />
          We couldn’t find{" "}
          <code className="rounded bg-neutral-100 px-1 py-0.5">{path}</code>. <br />
          Check the URL, or use one of the options below.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-md border px-4 py-2 cursor-pointer hover:bg-neutral-50"
            aria-label="Go back to previous page"
          >
            <FcUndo aria-hidden className="h-5 w-5" />
            Go back
          </button>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-black px-4 py-2 text-white hover:opacity-90"
            aria-label="Go to homepage"
          >
            <FcHome aria-hidden className="h-5 w-5" />
            Go home
          </Link>
        </div>

        <p className="mt-4 text-xs text-neutral-500">
          <FcHighPriority aria-hidden className="mr-1 inline h-4 w-4 align-[-2px]" />
          Error code: <span className="font-mono">404</span>
        </p>
      </div>
    </main>
  );
}
