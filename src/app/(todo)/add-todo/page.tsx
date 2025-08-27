export default function AddTodo() {
  return (
    <div className="sm:mx-auto mx-3 mt-10 max-w-xl rounded-xl border border-gray-200 bg-white p-6 shadow">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold">Add New Todo</h1>
        <p className="mt-1 text-sm text-gray-500">This page renders UI only.</p>
      </header>

      <div className="grid gap-4">
        {/* Title */}
        <div>
          <label htmlFor="title" className="mb-1 block text-sm font-medium text-gray-700">
            Title <span className="text-red-600" aria-hidden>*</span>
          </label>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="e.g., Buy groceries"
            className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="mt-1 text-xs text-gray-500">Keep it short and clear.</p>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="mb-1 block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Optional details…"
            rows={4}
            className="block w-full resize-y rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="mt-1 text-xs text-gray-500">Add notes, links, or steps.</p>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          disabled
          aria-disabled="true"
          className="inline-flex items-center rounded-md bg-gray-400 px-4 py-2 text-white cursor-not-allowed"
          title="UI only — no action wired"
        >
          Add Todo
        </button>
      </div>
    </div>
  );
}
