import React, { useMemo } from "react";
import { useSelector } from 'react-redux';

const AudienceProducts = ({ audience }) => {
  const products = useSelector((state) => state.products.items);

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
                    <a href={item.productUrl || "#"} target="_blank" rel="noopener noreferrer">
                      <img
                        src={item.imageUrl1}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </a>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200" />
                  )}
                </div>
                <div className="p-4 relative">
                  <div className="bg-white/90 text-[#030b59] px-3 py-1 rounded-[2px] text-sm font-medium inline-block absolute top-[-32px] left-2">
                    {item.rating || "0"} ⭐
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-semibold">
                      {item.title}
                    </h3>
                    {typeof item.price === "number" &&
                      !Number.isNaN(item.price) && (
                        <span className="font-bold text-2xl text-[#050d66] py-1.5 inline-block rounded-md">
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
