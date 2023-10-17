import { useState } from 'react';

function Counter(){

    function increase(){
      setvalue(value+1)
    }
    function decrease(){
      setvalue(value-1)
    }
  
    const [value,setvalue]=useState(0)
    return (
      <div className='w-full min-h-screen flex flex-col gap-4 justify-center  bg-gradient-to-r from-slate-50 to-slate-400 mx-auto items-center '>
          <h2 className='text-5xl text-slate-900 font-bold mb-5 uppercase'>counter :- <span className='text-red-700'>{value}</span> </h2>
          <div className='flex gap-4 justify-center items-center'>
          <button onClick={increase} className='bg-blue-500 py-2 px-5 mx-5 rounded-md text-lg capitalize text-slate-100 font-semibold '>increase ++</button>
          <button onClick={decrease} className='bg-blue-500 py-2 px-5 mx-5 rounded-md text-lg capitalize text-slate-100 font-semibold '>decrease --</button>
          </div>
        </div>
    )
  }
  export default Counter 