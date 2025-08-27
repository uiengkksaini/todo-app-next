export default function Todos() {
  // static example data — replace with your data later
  const todos = [
    { id: "1", title: "Buy groceries", description: "Milk, bread, eggs, veggies." },
    { id: "2", title: "Practice coding", description: "Solve two array problems." },
    { id: "3", title: "Workout", description: "30 min run + stretch." },
    { id: "4", title: "Read", description: "2 chapters of a book." },
    { id: "5", title: "Plan weekend", description: "Make itinerary and budget." },
  ];

  return (
    <section className="mx-auto my-6 max-w-6xl px-4">
      <h1 className="mb-4 text-xl font-semibold">Todos</h1>

      {todos.length === 0 ? (
        <p className="text-gray-600">No todos available.</p>
      ) : (
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {todos.map((t) => (
            <li
              key={t.id}
              className="rounded-lg border border-gray-200 bg-white p-4 shadow transition hover:shadow-md"
            >
              <h2 className="text-base font-semibold">{t.title}</h2>
              <p className="mt-1 text-sm text-gray-600">{t.description}</p>

              <div className="mt-4 flex items-center justify-end gap-2">
                <button
                  type="button"
                  className="rounded border border-gray-300 px-3 py-1.5 text-sm hover:bg-gray-50"
                  aria-label={`Edit ${t.title}`}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="rounded bg-red-600 px-3 py-1.5 text-sm text-white hover:bg-red-700"
                  aria-label={`Delete ${t.title}`}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
