import { useEffect, useState } from "react";

export default function MovieForm({
  initialData,
  onSubmit,
  submitLabel = "Save",
}) {
  const [form, setForm] = useState({
    title: "",
    genre: "",
    year: "",
    rating: "",
    price: "",
    posterUrl: "",
    description: "",
  });

  useEffect(() => {
    if (initialData) {
      setForm({
        title: initialData.title || "",
        genre: initialData.genre || "",
        year: initialData.year || "",
        rating: initialData.rating ?? "",
        price: initialData.price ?? "",
        posterUrl: initialData.posterUrl || "",
        description: initialData.description || "",
      });
    }
  }, [initialData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.title.trim()) return;
    const payload = {
      title: form.title.trim(),
      genre: form.genre.trim(),
      year: form.year ? Number(form.year) : undefined,
      rating: form.rating !== "" ? Number(form.rating) : undefined,
      price: form.price !== "" ? Number(form.price) : undefined,
      posterUrl: form.posterUrl.trim(),
      description: form.description.trim(),
    };
    onSubmit(payload);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 space-y-5 animate-slideUp"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm mb-1">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            placeholder="E.g., Inception"
            className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-indigo-500 transition"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Genre</label>
          <input
            name="genre"
            value={form.genre}
            onChange={handleChange}
            placeholder="Sci-Fi"
            className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-indigo-500 transition"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Year</label>
          <input
            name="year"
            value={form.year}
            onChange={handleChange}
            type="number"
            min="1880"
            placeholder="2010"
            className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-indigo-500 transition"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Rating (0-10)</label>
          <input
            name="rating"
            value={form.rating}
            onChange={handleChange}
            type="number"
            step="0.1"
            min="0"
            max="10"
            placeholder="8.8"
            className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-indigo-500 transition"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Price (₹)</label>
          <input
            name="price"
            value={form.price}
            onChange={handleChange}
            type="number"
            step="0.01"
            min="0"
            placeholder="e.g., 199.00"
            className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-indigo-500 transition"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Poster URL</label>
          <input
            name="posterUrl"
            value={form.posterUrl}
            onChange={handleChange}
            placeholder="https://..."
            className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-indigo-500 transition"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="w-full rounded-md bg-slate-900 border border-slate-700 px-3 py-2 outline-none focus:border-indigo-500 transition"
            placeholder="Short synopsis..."
          />
        </div>
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          {submitLabel}
        </button>
      </div>
    </form>
  );
}
