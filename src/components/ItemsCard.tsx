import { MdDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
const ItemsCard = ({
  toggle,
  title,
  Delete,
  edit,
  editId,
  listId,
  editText,
  date,
}) => {
  return (
    <li className="flex items-center justify-between gap-2 mx-4 border-b border-slate-400 my-2">
      <div className="flex items-center gap-3 my-1">
        <input
          type="checkbox"
          className="size-7 accent-sky-600 focus:accent-sky-700"
        />
        {editId !== listId ? (
          <form className="flex gap-2 items-center">
            <input
              type="text"
              value={editText}
              className="rounded-md focus:outline-lime-300 focus:border-none px-2 w-full font-redHadDisplay"
            />
          </form>
        ) : (
          <h2 className="font-redHadDisplay text-base font-semibold text-blackGreen w-full flex flex-col">
            <span className={toggle && "line-through"}> {title} </span>
            <span className="font-robotoSlab font-light text-sm">{date}</span>
          </h2>
        )}
      </div>
      <div className="flex sm:flex-row flex-col items-center gap-1 sm:gap-6">
        <p className="bg-yellow-300 px-2 rounded-md font-semibold font-robotoSlab tracking-widest">
          {toggle ? "complete" : "inprogress"}
        </p>
        <div className="flex items-center gap-1">
          <button type="button" onClick={edit}>
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
