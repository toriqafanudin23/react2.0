import { useRef, useState } from "react";

const Wishlist = () => {
  const inputRef = useRef();
  const [wishlistItems, setWishlistItems] = useState([
    "Laptop",
    "Mouse",
    "Keyboard",
  ]);

  const addWishlist = () => {
    const value = inputRef.current.value.trim();
    if (value !== "") {
      setWishlistItems([...wishlistItems, value]);
      inputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-80">
        <h1 className="text-xl font-semibold text-center mb-4">
          Wishlist Sederhana
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            ref={inputRef}
            placeholder="Tambah item..."
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            onClick={addWishlist}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {wishlistItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Wishlist;
