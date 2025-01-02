import InputField from "./components/InputField";

function App() {
  return (
    <>
      <div className="h-screen bg-gunmetal flex justify-center items-start pt-6">
        <div className="bg-sky shadow-md shadow-yellow-200  md:w-3/5 w-full rounded-xl py-4 px-2 mx-4">
          <div className="border-b border-slate-300 rounded-full">
            <h1 className="text-center sm:text-4xl text-xl text-primary font-semibold font-robotoSlab my-2 tracking-wide">
              Task Management Apps
            </h1>
          </div>
          <div className="py-4">
            <InputField edit={false} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
