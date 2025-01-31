function InputsSearch({ input, num, setNum ,setInput }) {
  return (
    <div className="flex gap-5 flex-col items-center">
      <input
        className="bg-gray-200 rounded-xl border border-slate-700 px-3 py-1"
        type="text"
        placeholder="Ism kiriting"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        className="bg-gray-200 rounded-xl border border-slate-700 px-3 py-1"
        type="number"
        placeholder="Harflar sonini kiriting!"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
    </div>
  );
}
export default InputsSearch;
