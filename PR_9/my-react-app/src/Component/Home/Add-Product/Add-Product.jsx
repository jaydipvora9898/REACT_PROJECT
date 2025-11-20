import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "Backpacks",
  "Briefs",
  "Co-Ords",
  "Casual Shoes",
  "Innerwear Vests",
  "Jeans",
  "Jackets",
  "Shirts",
  "Sweatshirts",
  "Shorts",
  "Sweaters",
  "Tshirts",
  "Trousers",
  "Track Pants",
  "Trunks",
  "Thermal Sets",
  "Other",
];
const AddProduct = ({ onAdd }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    price: "",
    audience: "Men",
    category: "Other",
    stock: "",
    rating: "",
    imageUrl1: "",
    imageUrl2: "",
    imageUrl3: "",
    imageUrl4: "",
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

  // Tailwind UI utility classes
  const inputClasses =
    "w-full rounded-lg bg-white text-slate-900 border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500";
  const labelClasses = "block text-sm font-medium text-slate-700 mb-1";


  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const product = {
      id: crypto.randomUUID(),
      title: form.title.trim(),
      price: parseFloat(form.price),
      audience: form.audience,
      category: form.category,
      stock: parseInt(form.stock, 10),
      rating: form.rating === "" ? null : parseFloat(form.rating),
      imageUrl1: form.imageUrl1.trim(),
      imageUrl2: form.imageUrl2.trim(),
      imageUrl3: form.imageUrl3.trim(),
      imageUrl4: form.imageUrl4.trim(),
      description: form.description.trim(),
      createdAt: new Date().toISOString(),
    };

    const existing = JSON.parse(localStorage.getItem("products") || "[]");
    localStorage.setItem("products", JSON.stringify([product, ...existing]));
    if (typeof onAdd === "function") onAdd(product);

    // Navigate to the audience-specific page after successful add
    const audiencePath = `/${(form.audience || "Men").toLowerCase()}`;
    setSuccess("Product added successfully");
    navigate(audiencePath);

    // Reset form to defaults
    setForm({
      title: "",
      price: "",
      audience: "Men",
      category: "Other",
      stock: "",
      rating: "",
      imageUrl1: "",
      imageUrl2: "",
      imageUrl3: "",
      imageUrl4: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-sky-100 px-4 py-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 bg-clip-text text-black bg-gradient-to-r">
          Add Product
        </h1>
        <div className="rounded-2xl border border-slate-200 bg-white shadow-xl">
          <form onSubmit={handleSubmit} className="p-6 space-y-6">
            {success && (
              <div className="rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-2">
                {success}
              </div>
            )}

            <div>
              <label className={labelClasses}>Title</label>
              <input
                name="title"
                value={form.title}
                onChange={handleChange}
                type="text"
                className={inputClasses}
                placeholder="Product title"
              />
              {errors.title && (
                <p className="text-sm text-red-400 mt-1">{errors.title}</p>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>
                  Price
                </label>
                <input
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  type="number"
                  step="0.01"
                  className={inputClasses}
                  placeholder="0.00"
                />
                {errors.price && (
                  <p className="text-sm text-red-400 mt-1">{errors.price}</p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
                  Category
                </label>
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* Audience (Men/Women/Kids) */}
            <div>
              <span className={labelClasses}>
                Audience
              </span>
              <div className="flex items-center gap-3">
                <label
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border transition ${
                    form.audience === "Men"
                      ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                      : "border-slate-300 text-slate-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="audience"
                    value="Men"
                    checked={form.audience === "Men"}
                    onChange={handleChange}
                  />
                  <span>Men</span>
                </label>
                <label
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border transition ${
                    form.audience === "Women"
                      ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                      : "border-slate-300 text-slate-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="audience"
                    value="Women"
                    checked={form.audience === "Women"}
                    onChange={handleChange}
                  />
                  <span>Women</span>
                </label>
                <label
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border transition ${
                    form.audience === "Kids"
                      ? "border-indigo-600 bg-indigo-50 text-indigo-700"
                      : "border-slate-300 text-slate-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="audience"
                    value="Kids"
                    checked={form.audience === "Kids"}
                    onChange={handleChange}
                  />
                  <span>Kids</span>
                </label>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClasses}>
                  Stock
                </label>
                <input
                  name="stock"
                  value={form.stock}
                  onChange={handleChange}
                  type="number"
                  className={inputClasses}
                  placeholder="0"
                />
                {errors.stock && (
                  <p className="text-sm text-red-400 mt-1">{errors.stock}</p>
                )}
              </div>

              <div>
                <label className={labelClasses}>
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
                  className={inputClasses}
                  placeholder="Optional"
                />
                {errors.rating && (
                  <p className="text-sm text-red-400 mt-1">{errors.rating}</p>
                )}
              </div>
            </div>

            <div>
              <label className={labelClasses}>
                Image 1 URL
              </label>
              <input
                name="imageUrl1"
                value={form.imageUrl1}
                onChange={handleChange}
                type="text"
                className={inputClasses}
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div>
              <label className={labelClasses}>
                Image 2 URL
              </label>
              <input
                name="imageUrl2"
                value={form.imageUrl2}
                onChange={handleChange}
                type="text"
                className={inputClasses}
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div>
              <label className={labelClasses}>
                Image 3 URL
              </label>
              <input
                name="imageUrl3"
                value={form.imageUrl3}
                onChange={handleChange}
                type="text"
                className={inputClasses}
                placeholder="https://example.com/image.jpg"
              />
            </div>
            <div>
              <label className={labelClasses}>
                Image 4 URL
              </label>
              <input
                name="imageUrl4"
                value={form.imageUrl4}
                onChange={handleChange}
                type="text"
                className={inputClasses}
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div>
              <label className={labelClasses}>
                Description
              </label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                rows={4}
                className={inputClasses}
                placeholder="Enter Product Description"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-sky-600 hover:from-indigo-700 hover:to-sky-700 px-5 py-2.5 text-white font-medium shadow-sm transition"
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
