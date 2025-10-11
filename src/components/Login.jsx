const LoginForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Tambahkan logika login di sini
    console.log("Form submitted");
  };

  return (
    <div className="mt-20 mb-20 max-w-md mx-auto p-5 border rounded-lg shadow border-gray-700">
      <h1 className="text-2xl font-bold text-center mb-6">Masuk Dashboard</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col max-w-sm mx-auto w-full"
      >
        <label className="text-sm font-medium mt-2">Email</label>
        <input
          type="text"
          placeholder="Masukkan email"
          className="border mt-1 rounded-sm h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 border-gray-500"
        />

        <label className="text-sm font-medium mt-4">Password</label>
        <input
          type="password"
          placeholder="Masukkan password"
          className="mt-1 rounded-sm h-10 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-500"
        />

        <input
          type="text"
          placeholder="Masukan nama"
          onInvalid={true}
          className="invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 mt-5 p-2 rounded-md focus:invalid:border-pink-500 border border-sky-500 focus:bg-sky-50"
        />

        <div class="mt-2.5">
          <input
            id="first-name"
            type="text"
            name="first-name"
            placeholder="Masukan nama"
            autocomplete="given-name"
            class="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-gray-600 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-500 border border-sky-100 focus:placeholder:text-gray-500 font-semibold"
          />
        </div>

        <div className="mt-2.5">
          <input
            type="text"
            className="bg-gray-700 w-full py-2 px-3.5 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-sky-500 text-base font-semibold outline-1 outline-sky-500 focus:border-sky-500"
          />
        </div>

        <div className="mt-2.5 relative">
          <input
            type="text"
            className="peer bg-gray-800/60 backdrop-blur-sm w-full py-3 px-4 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 text-base font-medium border border-gray-600 focus:border-sky-500 transition-all duration-200"
          />
          <span className="absolute left-4 top-3 text-gray-400 text-base transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-3 peer-focus:text-sm peer-focus:text-sky-400 bg-gray-800/60 px-1">
            Username / Email
          </span>
        </div>

        <button
          type="submit"
          className="bg-sky-500 mt-7 h-12 rounded-md text-white font-bold hover:bg-sky-600 transition hover:cursor-pointer"
        >
          Masuk
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
