import Link from "next/link";
import {
  FcTodoList,
  FcPlus,
  FcInspection,
  FcAlarmClock,
  FcOk,
  FcSupport,
} from "react-icons/fc";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 shadow-sm">
              <FcTodoList className="h-4 w-4" aria-hidden />
              Simple. Fast. Local.
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Organize your day with <span className="text-green-600">Todo App</span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:text-lg">
              Add tasks, jot details, and review them later — all in a tidy, responsive UI.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/add-todo"
                className="inline-flex items-center gap-2 rounded-md bg-gray-900 px-4 py-2 text-white shadow hover:bg-gray-800"
                aria-label="Add a new todo"
              >
                <FcPlus className="h-5 w-5" aria-hidden />
                Add Todo
              </Link>
              <Link
                href="/todos"
                className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 shadow-sm hover:bg-gray-50"
                aria-label="View all todos"
              >
                <FcInspection className="h-5 w-5" aria-hidden />
                View Todos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick actions (cards) */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="mb-4 text-xl font-semibold">Quick actions</h2>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li className="rounded-lg border border-gray-200 bg-white p-4 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <FcPlus className="h-6 w-6" aria-hidden />
              <div className="font-medium">Create a task</div>
            </div>
            <p className="mt-2 text-sm text-gray-600">Start with a title and optional details.</p>
            <div className="mt-4">
              <Link href="/add-todo" className="text-sm font-medium text-blue-600 hover:underline">
                Go to Add Todo
              </Link>
            </div>
          </li>

          <li className="rounded-lg border border-gray-200 bg-white p-4 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <FcInspection className="h-6 w-6" aria-hidden />
              <div className="font-medium">Review list</div>
            </div>
            <p className="mt-2 text-sm text-gray-600">Scan your tasks at a glance in cards.</p>
            <div className="mt-4">
              <Link href="/todos" className="text-sm font-medium text-blue-600 hover:underline">
                Go to Todos
              </Link>
            </div>
          </li>

          <li className="rounded-lg border border-gray-200 bg-white p-4 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <FcAlarmClock className="h-6 w-6" aria-hidden />
              <div className="font-medium">Stay timely</div>
            </div>
            <p className="mt-2 text-sm text-gray-600">Keep short, actionable titles to move fast.</p>
          </li>

          <li className="rounded-lg border border-gray-200 bg-white p-4 shadow hover:shadow-md transition">
            <div className="flex items-center gap-3">
              <FcOk className="h-6 w-6" aria-hidden />
              <div className="font-medium">Lightweight & responsive</div>
            </div>
            <p className="mt-2 text-sm text-gray-600">Works great on mobile and desktop.</p>
          </li>
        </ul>
      </section>

      {/* Feature highlights */}
      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="mb-6 text-xl font-semibold">Why you’ll like it</h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <FcSupport className="h-6 w-6" aria-hidden />
                <div className="font-medium">Simple UI</div>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Clean layout with clear buttons and readable text.
              </p>
            </li>
            <li className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <FcOk className="h-6 w-6" aria-hidden />
                <div className="font-medium">Zero setup</div>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Just open and start adding tasks.
              </p>
            </li>
            <li className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <FcAlarmClock className="h-6 w-6" aria-hidden />
                <div className="font-medium">Fast</div>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Lightweight components that render instantly.
              </p>
            </li>
            <li className="rounded-lg border border-gray-200 bg-white p-4">
              <div className="flex items-center gap-3">
                <FcInspection className="h-6 w-6" aria-hidden />
                <div className="font-medium">Clear overview</div>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Card grid shows up to four todos per row.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 text-center">
          <h2 className="text-2xl font-semibold">Ready to get things done?</h2>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Link
              href="/add-todo"
              className="inline-flex items-center gap-2 rounded-md bg-green-600 px-4 py-2 text-white shadow hover:bg-green-700"
            >
              <FcPlus className="h-5 w-5" aria-hidden />
              Add your first todo
            </Link>
            <Link
              href="/todos"
              className="inline-flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900 shadow-sm hover:bg-gray-50"
            >
              <FcInspection className="h-5 w-5" aria-hidden />
              View todos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
