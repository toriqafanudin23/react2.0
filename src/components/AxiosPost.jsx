import { useState } from "react";
import axios from "axios";

function PostData() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:2000/products", {
        name: name,
        price: Number(price),
        description: description,
        image: image,
      });

      setName("");
      setPrice(0);
      setDescription("");
      setImage("");
      setError("Produk berhasil ditambahkan!");
    } catch (err) {
      setError("Error: " + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Tambah Produk
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-gray-700 mb-1">Nama Produk</label>
          <input
            type="text"
            placeholder="Masukkan nama produk"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Harga</label>
          <input
            type="number"
            placeholder="Masukkan harga"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Deskripsi</label>
          <textarea
            placeholder="Masukkan deskripsi produk"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="3"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 mb-1">URL Gambar</label>
          <input
            type="text"
            placeholder="https://example.com/gambar.jpg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Preview gambar otomatis */}
        {/* {image && (
          <div className="mt-2">
            <img
              src={image}
              alt="Preview"
              className="w-full h-48 object-cover rounded-lg border"
            />
          </div>
        )} */}

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Simpan Produk
        </button>
      </form>

      {error && <p>{error}</p>}
    </div>
  );
}

export default PostData;
