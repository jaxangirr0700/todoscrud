function AddForm({ todoInput, setTodoInput, addTodo }) {
  return (
    <div className="flex gap-5 items-center justify-center mb-5">
      <input
        className="bg-gray-200 rounded-xl border border-slate-700 px-3 py-1"
        type="text"
        placeholder="Yangi todo kiriting"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
      />
      <button
        className="border border-gray-400 rounded-3xl px-2 py-1 bg-green-500 font-bold text-white active:scale-105"
        onClick={addTodo}
      >
        Qo'shish +
      </button>
    </div>
  );
}
export default AddForm;
