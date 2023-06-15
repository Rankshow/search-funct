import { useState } from "react";
import { data } from "./data";
import HatPic   from './image/chef.jpg'

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
    <div className="bg-slate-500 text-red max-w-2xl mx-auto py-4 flex justify-between items-center px-2">
      <div>
        <img className="w-40 h-40 rounded-full" src={HatPic} alt="polaris" />
        <h1 className="text-red font-bold">Search Functionality</h1>
      </div>
     
    <div>
      <input type="text" onChange={(e)=> setSearch(e.target.value)} placeholder="Search list" className="pl-6 py-2 ml-[5em] max-w-3xl focus:text-red-900  border-solid-red" />
    </div>
    </div>
      <div className="mx-auto">
        <table className="mx-auto">
          <thead className="bg-blue-900 text-white sm:cols-2">
            <tr >
              <th className="py-4 px-5 border borer-solid-red">firstName</th>
              <th className="py-4 px-5 border borer-solid-red">lastName</th>
              <th className="py-4 px-5 border borer-solid-red">email</th>
              <th className="py-4 px-5 border borer-solid-red">phone</th>
              <th className="py-4 px-5 border borer-solid-red">userName</th>
              <th className="py-4 px-5 border borer-solid-red">company</th>
            </tr>
          </thead>
          <tbody>
            {/* search fuctionality */}
             {data.filter((item) => {
              return search.toLocaleLowerCase() === '' ? item : item.firstName.toLocaleLowerCase().includes(search)
             }).map((item) => {
              return(
               <tr key={item.id} className="text-center">
               <td>{item.firstName}</td>
               <td>{item.lastName}</td>
               <td>{item.email}</td>
               <td>{item.phone}</td>
               <td>{item.userName}</td>
               <td>{item.company}</td>
              </tr>
              )
             })
             }
          </tbody>
        </table>

      </div>
   </>
  );
}

export default App;
