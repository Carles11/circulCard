function Loader() {
  return (
    <div className="w-full mb-8 md:mb-16 pl-8">
      <div className="mt-[20%] md:mt-[25%] m-2 md:m-16 flex justify-center">
        <div className=" p-11 animate-pulse border border-blue-300 shadow rounded-md p-4 w-full md:w-1/2 ">
          <div className=" flex space-x-4">
            <div className="rounded-full bg-slate-700 h-16 w-16"></div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-6 bg-slate-700 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-6 bg-slate-700 rounded col-span-2"></div>
                  <div className="h-6 bg-slate-700 rounded col-span-1"></div>
                </div>
                <div className="h-6 bg-slate-700 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader

// export default SpinLoader
// function SpinLoader() {
//   return (
//     <div className="ring">
//       Loading
//       <span></span>
//     </div>
//   )
// }

// export default Loader
