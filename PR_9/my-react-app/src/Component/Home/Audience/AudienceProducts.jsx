import React, { useEffect, useMemo, useState } from "react";

const AudienceProducts = ({ audience }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("products") || "[]";
      const parsed = JSON.parse(raw);
      setProducts(Array.isArray(parsed) ? parsed : []);
    } catch (e) {
      setProducts([]);
    }
  }, []);

  const filtered = useMemo(
    () =>
      products.filter(
        (p) => (p?.audience || "").toLowerCase() === audience.toLowerCase()
      ),
    [products, audience]
  );

  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          {audience} Products
        </h2>

        {filtered.length === 0 ? (
          <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-slate-700">
            No products found for {audience}. Add one from "Add Product".
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="rounded-md border border-slate-200 bg-white shadow-sm overflow-hidden"
              >
                <div className="aspect-[2/2.5] bg-slate-100">
                  {item.imageUrl1 ? (
                    <img
                      src={item.imageUrl1}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200" />
                  )}
                </div>
                <div className="p-4">
                  <div>
                    <h3 className="text-slate-900 font-semibold">
                      {item.title}
                    </h3>
                    {typeof item.price === "number" &&
                      !Number.isNaN(item.price) && (
                        <span className="font-bold uppercase text-indigo-700 py-1 inline-block rounded-md">
                          ₹{item.price.toFixed(2)}
                        </span>
                      )}
                  </div>
                  <p className="text-slate-600 text-sm mt-1 truncate">
                    {item.category || "Uncategorized"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AudienceProducts;
