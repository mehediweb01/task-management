/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import ItemsCard from "./components/ItemsCard";
import { getFromLocalStorage, saveToLocalStorage } from "./localStorageUtils";
interface IFace {
  Id: number;
  text: string;
  completed: boolean;
  total: number;
}
// local storage save data
const getData = () => {
  const storedValue = getFromLocalStorage<[]>("list");
  if (storedValue) {
    return JSON.parse(JSON.stringify(storedValue));
  } else {
    return [];
  }
};
const getTotal = () => {
  const storedValue = getFromLocalStorage<number>("total");
  return storedValue ?? 0;
};

function App() {
  const [arr, setArr] = useState<IFace[]>(getData());
  const [Text, setText] = useState<string>("");
  const [EditText, setEditText] = useState<string>("");
  const [EditId, setEditId] = useState<number | null>(null);
  const [totals, setTotal] = useState<number>(getTotal());
  const totalItem = () => {
    setTotal(totals + 1);
  };
  // Update local storage whenever the value changes
  useEffect(() => {
    saveToLocalStorage("list", arr);
  }, [arr]);

  useEffect(() => {
    localStorage.setItem("total", JSON.stringify(totals));
  }, [totals]);

  const AddTasks = (e: React.FormEvent) => {
    e.preventDefault();
    const TrimText = Text.trim();
    if (TrimText === "") {
      return;
    } else {
      setArr([
        ...arr,
        {
          Id: Date.now(),
          text: TrimText,
          completed: false,
          total: totals,
        },
      ]);
      totalItem();
      setText("");
    }
  };

  const handleEdit = (types: IFace) => {
    setEditId(types.Id);
    setEditText(types.text);
  };

  const handleUpdate = (id: number, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimValue: string = EditText.trim();
    if (!trimValue) return;
    setArr(
      arr.map((item) => (item.Id === id ? { ...item, text: trimValue } : item))
    );
    setEditId(null);
    setEditText("");
  };

  const handleCancel = () => {
    setEditId(null);
    setText("");
  };

  const Delete = (id: number) => {
    setArr(arr.filter((item) => item.Id !== id));
    setTotal(totals - 1);
  };

  const toggleComplete = (id: number) => {
    setArr((arr) =>
      arr.map((Item) => {
        if (Item.Id === id) {
          return {
            ...Item,
            completed: !Item.completed,
          };
        }
        return Item;
      })
    );
  };
  return (
    <>
      <div className="bg-gunmetal flex justify-center items-start pt-6 min-h-screen">
        <div className="bg-sky shadow-md shadow-yellow-200  md:w-3/5 w-full rounded-xl py-4 px-2 mx-4 my-8">
          <div className="border-b border-slate-300 rounded-full">
            <h1 className="text-center sm:text-4xl text-xl text-primary font-semibold font-robotoSlab my-2 tracking-wIde">
              Task Management Apps
            </h1>
          </div>
          <div className="py-4">
            <div>
              <form className="flex sm:flex-row flex-col items-center gap-3 justify-center mb-6">
                <input
                  type="text"
                  value={Text}
                  placeholder="Enter your Task"
                  onChange={(e) => setText(e.target.value)}
                  className="px-2 py-2 rounded-md focus:outline-teal-300 focus:shadow-inner focus:shadow-indigo-700 outline outline-slate-500 font-robotoSlab text-xl tracking-wide text-blackGreen"
                />

                <div className="flex gap-2">
                  <button
                    disabled={Text === ""}
                    onClick={AddTasks}
                    className="bg-blackGreen text-primary px-4 py-2 rounded-lg font-redHadDisplay tracking-wide text-xl disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    Add Task
                  </button>
                </div>
              </form>
            </div>
            <div className="border-b border-green-300 rounded-full">
              <p className="text-center font-robotoSlab font-bold tracking-wider text-2xl text-blackGreen">
                Total: {totals}
              </p>
            </div>
          </div>
          <div className="shadow-sm shadow-blackGreen py-2 rounded-md">
            {arr.length <= 0 ? (
              <h2 className="text-center text-xl font-semibold text-blackGreen font-robotoSlab">
                No Tasks Found
              </h2>
            ) : (
              arr.map((item: any) => (
                <ItemsCard
                  key={item.Id}
                  Delete={() => Delete(item.Id)}
                  handleEdit={() => handleEdit(item)}
                  editId={EditId}
                  listId={item.Id}
                  title={item.text}
                  editText={EditText}
                  handleCancel={handleCancel}
                  handleUpdate={(e: any) => handleUpdate(item.Id, e)}
                  EditOnChange={(e: any) => setEditText(e.target.value)}
                  toggleComplete={() => toggleComplete(item.Id)}
                  toggle={item.completed}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
