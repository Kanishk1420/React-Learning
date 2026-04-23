import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [num, setnum] = useState(0);

    function increment() {
        setnum(num + 1);
    }
    
    function decrement() {
        setnum(num - 1);
        if(num <= 0){
            setnum(0);
        }
    }
    
    function reset() {
        setnum(0);
    }

  return (
    <div className='flex items-center justify-center min-h-[60vh] bg-linear-to-br from-gray-100 to-gray-200 py-12 px-6'>
        <div className='max-w-sm w-full bg-white rounded-4xl shadow-2xl p-10 text-center transform transition-all duration-300 hover:shadow-cyan-100/50 hover:-translate-y-1'>
            <h2 className='text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest'>React Hook</h2>
            
            <div className='flex items-center justify-center w-36 h-36 mx-auto bg-cyan-50 rounded-full mb-8 shadow-inner border-8 border-cyan-100/50'>
                <h1 className='text-6xl font-black text-cyan-600 font-mono'>{num}</h1>
            </div>
            
            <div className='flex gap-4 justify-between w-full'>
                <button 
                    className='flex-1 bg-rose-500 hover:bg-rose-600 text-white font-bold py-3 px-4 rounded-2xl shadow-lg shadow-rose-200 transition-all active:scale-95 active:shadow-sm' 
                    onClick={decrement}
                >
                    <span className='text-2xl leading-none block -mt-1'>-</span>
                </button>

                <button 
                    className='flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-4 rounded-2xl shadow-lg shadow-cyan-200 transition-all active:scale-95 active:shadow-sm' 
                    onClick={increment}
                >
                    <span className='text-2xl leading-none block -mt-1'>+</span>
                </button>
            </div>
            
            <button 
                className='mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-600 font-bold py-3 px-6 rounded-2xl transition-all active:scale-95 border-2 border-transparent hover:border-gray-300' 
                onClick={reset}
            >
                Reset
            </button>
        </div>
    </div>
  )
}

export default Counter;