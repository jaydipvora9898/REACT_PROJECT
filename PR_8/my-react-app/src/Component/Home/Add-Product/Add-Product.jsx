import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const AddProduct = ({ onAdd }) => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "Other",
    stock: "",
    rating: "",
    imageUrl: "",
    description: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setSuccess("");
  };

  const validate = () => {
    const next = {};
    if (!form.title.trim()) next.title = "Title is required";
    const price = parseFloat(form.price);
    if (Number.isNaN(price) || price <= 0) next.price = "Enter a valid price";
    const stock = parseInt(form.stock, 10);
    if (Number.isNaN(stock) || stock < 0) next.stock = "Enter a valid stock";
    if (form.rating !== "") {
      const rating = parseFloat(form.rating);
      if (Number.isNaN(rating) || rating < 0 || rating > 5)
        next.rating = "Rating must be 0–5";
    }
    return next;
  };

  const product = {
    id: crypto.randomUUID(),
    title: form.title.trim(),
    price: parseFloat(form.price),
    category: form.category,
    stock: parseInt(form.stock, 10),
    rating: form.rating === "" ? null : parseFloat(form.rating),
    imageUrl: form.imageUrl.trim(),
    description: form.description.trim(),
    createdAt: new Date().toISOString(),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    
    const product = {
      id: crypto.randomUUID(),
      title: form.title.trim(),
      price: parseFloat(form.price),
      category: form.category,
      stock: parseInt(form.stock, 10),
      rating: form.rating === "" ? null : parseFloat(form.rating),
      imageUrl: form.imageUrl.trim(),
      description: form.description.trim(),
      createdAt: new Date().toISOString(),
    };


    const existing = JSON.parse(localStorage.getItem("products") || "[]");
    localStorage.setItem("products", JSON.stringify([product, ...existing]));
    if (typeof onAdd === "function") onAdd(product);

    setSuccess("Product added successfully");
    setForm({
      title: "",
      price: "",
      category: "",
      stock: "",
      rating: "",
      imageUrl: "",
      description: "",
    });
  };

  return (
    <div className="min-h-[70vh] px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-black text-center mb-4">
          Add Product
        </h1>
        <div className="rounded-xl border border-slate-800 bg-[#4875b2] shadow-lg backdrop-blur-sm">
          <form onSubmit={handleSubmit} className="p-6 space-y-5">
            {success && (
              <div className="rounded-md bg-emerald-900/30 text-emerald-200 border border-emerald-700 px-3 py-2">
                {success}
              </div>
            )}

            <div>
              <label className="block text-sm text-slate-300 mb-1">Title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                type="text"
                className="w-full rounded-md bg-white/90 text-black border border-slate-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600"
                placeholder="Product title"
              />
              {errors.title && (
                <p className="text-sm text-red-400 mt-1">{errors.title}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">
                  Price
                </label>
                <input
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  type="number"
                  step="0.01"
                  className="w-full rounded-md bg-white/90 text-black border border-slate-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600"
                  placeholder="0.00"
                />
                {errors.price && (
                  <p className="text-sm text-red-400 mt-1">{errors.price}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">
                  Category
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full rounded-md bg-white/90 text-black border border-slate-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600"
                >
                  <option>Men</option>
                  <option>Women</option>
                  <option>Kids</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">
                  Stock
                </label>
                <input
                  name="stock"
                  value={form.stock}
                  onChange={handleChange}
                  type="number"
                  className="w-full rounded-md bg-white/90 text-black border border-slate-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600"
                  placeholder="0"
                />
                {errors.stock && (
                  <p className="text-sm text-red-400 mt-1">{errors.stock}</p>
                )}
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">
                  Rating (0–5)
                </label>
                <input
                  name="rating"
                  value={form.rating}
                  onChange={handleChange}
                  type="number"
                  step="0.1"
                  min="0"
                  max="5"
                  className="w-full rounded-md bg-white/90 text-black border border-slate-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600"
                  placeholder="Optional"
                />
                {errors.rating && (
                  <p className="text-sm text-red-400 mt-1">{errors.rating}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-1">
                Image URL
              </label>
              <input
                name="imageUrl"
                value={form.imageUrl}
                onChange={handleChange}
                type="text"
                className="w-full rounded-md bg-white/90 text-black border border-slate-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div>
              <label className="block text-sm text-slate-300 mb-1">
                Description
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-md bg-white/80 text-black border border-slate-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-600"
                placeholder="Enter Product Description"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-md bg-[#0e2064] hover:bg-[#F139B1]/90 active:bg-[#F139B1]/80 px-4 py-2 text-white font-medium transition"
                onClick={() => {
                  if (form.category === "Men") {
                    console.log("Men");
                    onAdd(product);
                  }
                  else if(form.category === "Women"){
                    console.log("Women");
                    onAdd(product);
                  }
                  else if(form.category === "Kids"){
                    console.log("Kids");
                    onAdd(product);
                  }
                }}
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
