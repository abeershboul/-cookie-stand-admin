import React from "react";
import { useState } from "react";

export function Form(){
    const [locations, setlocations] = useState("");
    const [minmum, setminmum] = useState(0);
    const [max, setmax] = useState(0);
    const [Avarages, setAvarages] = useState(0);



    const [fullReplyState, setFullReplyState] = useState([]);

    const changehandeler = (e) => {
        setlocations(e.target.value);
        console.log(e.target.value)
    }


    const maxhandeler = (e) => {
        setmax(e.target.value);
        console.log(e.target.value)
    }

    const minhandeler = (e) => {
        setminmum(e.target.value);
        console.log(e.target.value)
    }
    const avaragehandeler = (e) => {
        setAvarages(e.target.value);
        console.log(e.target.value)
    }


    const onSubmitHandler = (e) => {
        e.preventDefault();
        const fullReply = {
            location : locations,
            Minimum: minmum,
            Max: max,
            Avarages: Avarage

            
        }
        setFullReplyState([...fullReplyState,fullReply])




    }

return(
<>
<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-lg font-medium leading-6 text-gray-900">Cookies Stand</h3>
       
      </div>
    </div>
    <div class="mt-5 md:mt-0 md:col-span-2">
      <form onSubmit={onSubmitHandler} action="#" method="POST">
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label for="Location" class="block text-sm font-medium text-gray-700">Location</label>
                <input type="text"
                onChange={changehandeler}
                 name="Location"
                  id="Location" 
                  autocomplete="off" 
                  class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label for="Minimum" class="block text-sm font-medium text-gray-700">Minimum custumer par Hour</label>
                <input type="number"
                onChange={minhandeler}
                 name="Minimum" 
                 id="last_name" 
                 autocomplete="off" 
                 class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="Maximum" class="block text-sm font-medium text-gray-700">Maximum custumer par Hour</label>
                <input type="number"
                onChange={maxhandeler}
                 name="Maximum" id="Maximum" 
                 autocomplete="off" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              

              <div class="col-span-6">
                <label for="Avarage" class="block text-sm font-medium text-gray-700">Avarage number par sale</label>
                <input type="number" 
                onChange={avaragehandeler}

                name="Avarage" id="Avarage" 
                autocomplete="street-address" 
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"/>
              </div>

              

              

              
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Create 
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

{/* result section */}
<section className="w-full pt-10 text-center shadow-lg shadow-black-50">
                {fullReplyState.length > 0 && fullReplyState.map((item,index)=>{
                    return(
                        <div>
                            <p>'location' : {item.location}  ,'Minimum custumer par Hour': {item.Minimum} , 'Maximum custumer par Hour' : {item.Max} , 'Avaragar' : {Avarages}</p>
                        </div>
                    )
                })}
            </section>

</>


);



}