import { useState, useEffect } from "react";
import axios from "axios";

function DataFetcher() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:2000/products/");
        setData(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Loading data ...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Fetched Data:</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <table>
        <thead>
          <tr>
            <td className="border px-2 py-1 w-10">ID</td>
            <td className="border px-2 py-1 w-50">NAMA</td>
            <td className="border px-2 py-1 w-50">HARGA</td>
            <td className="border px-2 py-1 w-100">DESKRIPSI</td>
          </tr>
        </thead>
      </table>

      {data.map((item) => {
        return (
          <table>
            <tbody>
              <tr>
                <td className="border px-2 py-1 w-10">{item.id}</td>
                <td className="border px-2 py-1 w-50">{item.name}</td>
                <td className="border px-2 py-1 w-50">{item.price}</td>
                <td className="border px-2 py-1 w-100">{item.description}</td>
              </tr>
            </tbody>
          </table>
        );
      })}
    </div>
  );
}

export default DataFetcher;
