const InputField = ({ edit }) => {
  return (
    <div>
      <form className="flex sm:flex-row flex-col items-center gap-3 justify-center mb-6">
        <input
          type="text"
          className="px-2 py-2 rounded-md focus:outline-teal-300 focus:shadow-inner focus:shadow-indigo-700 outline outline-slate-500 font-robotoSlab text-xl tracking-wide text-blackGreen"
        />
        <div className="flex gap-2">
          <button className="bg-blackGreen text-primary px-4 py-2 rounded-lg font-redHadDisplay tracking-wide text-xl">
            {edit ? "Update" : "Add Task"}
          </button>
          {edit && (
            <button className="bg-red-600 text-white px-2 py-1 rounded-lg font-redHadDisplay text-xl">
              cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default InputField;
