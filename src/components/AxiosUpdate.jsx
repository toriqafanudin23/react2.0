import { useState, useEffect } from "react";
import axios from "axios";

const UpdateData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:2000/products/");
      setData(response.data.data); // sesuaikan dengan struktur respons backend
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (id, field, value) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const handleEditData = async (item) => {
    try {
      await axios.put(`http://localhost:2000/products/${item.id}`, {
        name: item.name,
        price: Number(item.price),
        description: item.description,
        image: item.image,
      });
      alert("Data berhasil diperbarui!");
      fetchData(); // refresh data
    } catch (err) {
      setError("Error: " + err.message);
    }
  };

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const handleAddData = async () => {
    // e.preventDefault();
    try {
      await axios.post("http://localhost:2000/products", {
        name: name,
        price: Number(price),
        description: description,
        image: "http://randomajjah",
      });

      setName("");
      setPrice(0);
      setDescription("");
      fetchData();
    } catch (err) {
      setError("Error: " + err.message);
    }
  };

  const handleDeleteData = async (id) => {
    const confirmDelete = window.confirm("Yakin ingin menghapus data ini?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:2000/products/${id}`);
      alert("Data berhasil dihapus!");
      fetchData();
    } catch (err) {
      setError("Error: " + err.message);
    }
  };

  if (loading) return <p>Loading data ...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="max-w-5xl mx-auto mt-6">
      <h1 className="text-xl font-bold mb-4">Edit Data Produk</h1>

      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">ID</th>
            <th className="border px-2 py-1">Nama</th>
            <th className="border px-2 py-1">Harga</th>
            <th className="border px-2 py-1">Deskripsi</th>
            <th className="border px-2 py-1">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border px-2 py-1 text-center">{item.id}</td>
              <td className="border px-2 py-1">
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) =>
                    handleInputChange(item.id, "name", e.target.value)
                  }
                  className="w-full border rounded px-1"
                />
              </td>
              <td className="border px-2 py-1">
                <input
                  type="number"
                  value={item.price}
                  onChange={(e) =>
                    handleInputChange(item.id, "price", e.target.value)
                  }
                  className="w-full border rounded px-1"
                />
              </td>
              <td className="border px-2 py-1">
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) =>
                    handleInputChange(item.id, "description", e.target.value)
                  }
                  className="w-full border rounded px-1"
                />
              </td>
              <td className="border px-2 py-1 text-center">
                <button
                  onClick={() => handleEditData(item)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
                >
                  Simpan
                </button>
                <button
                  onClick={() => handleDeleteData(item.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td className="border px-2 py-1"></td>
            <td className="border px-2 py-1">
              <input
                type="text"
                placeholder="Masukan nama barang ..."
                className="w-full border rounded px-1"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </td>
            <td className="border px-2 py-1">
              <input
                type="number"
                placeholder="Masukan harga ..."
                className="w-full border rounded px-1"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </td>
            <td className="border px-2 py-1">
              <input
                type="text"
                placeholder="Masukan deskripsi ..."
                className="w-full border rounded px-1"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </td>
            <td className="border px-2 py-1">
              <button
                onClick={handleAddData}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
              >
                Tambah
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UpdateData;
