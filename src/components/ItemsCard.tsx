/* eslint-disable @typescript-eslint/no-explicit-any */
import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
const ItemsCard = ({
  title,
  Delete,
  handleEdit,
  editText,
  editId,
  listId,
  handleCancel,
  handleUpdate,
  EditOnChange,
  toggleComplete,
  toggle,
}: any) => {
  const date = new Date();
  const finalDate: string = date.toLocaleDateString();
  return (
    <li className="flex items-center justify-between gap-2 mx-4 border-b border-slate-400 my-2">
      <div className="flex items-center gap-3 my-1">
        <input
          type="checkbox"
          checked={toggle}
          className="size-7 accent-sky-600 focus:accent-sky-700"
          onChange={toggleComplete}
        />
        {editId === listId ? (
          <form className="flex flex-col gap-2 items-start">
            <input
              type="text"
              value={editText}
              onChange={EditOnChange}
              autoFocus
              className="rounded-md focus:outline-lime-300 focus:border-none px-2 w-full font-redHadDisplay"
            />
            <div className="flex justify-center items-center gap-3">
              <button
                disabled={editText === ""}
                className="bg-blackGreen text-primary px-2 py-1 rounded-lg font-redHadDisplay tracking-wide text-xl disabled:cursor-not-allowed disabled:opacity-50"
                onClick={handleUpdate}
              >
                Save
              </button>
              <button
                className="bg-red-600 text-white px-2 py-1 rounded-lg font-redHadDisplay text-xl"
                onClick={handleCancel}
              >
                cancel
              </button>
            </div>
            <span className="font-robotoSlab font-light text-sm">
              {finalDate}
            </span>
          </form>
        ) : (
          <h2 className="font-redHadDisplay text-xl font-semibold text-blackGreen w-full flex flex-col">
            <span
              className={toggle ? "line-through text-secondary" : undefined}
            >
              {title}
            </span>
            <span className="font-robotoSlab font-light text-sm">
              {finalDate}
            </span>
          </h2>
        )}
      </div>
      <div className="flex sm:flex-row flex-col items-center gap-2 sm:gap-6">
        <p className="bg-yellow-300 px-2 rounded-md font-semibold font-robotoSlab tracking-widest">
          {toggle ? "completed" : "inprogress"}
        </p>
        <div className="flex items-center sm:gap-5 gap-2">
          <button type="button" onClick={handleEdit}>
            <FaRegEdit className="size-5 text-blackGreen hover:text-green-300 transition-colors duration-300" />
          </button>
          <button type="button" onClick={Delete}>
            <MdDeleteOutline className="size-5 hover:text-red-600 transition-colors duration-300" />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ItemsCard;
