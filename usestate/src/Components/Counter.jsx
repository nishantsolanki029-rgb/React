import { useState } from 'react'



const Counter = () => {


  const [Number, setNumber] = useState(0);
  // Number (first variable) ==> Read Only value (you can't this variable value)
  // setNumber (second variable) ==> write only value (if you want to change Number variable's value use setNumber)

  // Always Refresh Tab Because Vite Saved Last Consols

  // self task:
  // create btn jump5 => increase number with 5
  //                 decrease5 ==> decrease number with 5
  // Reset ntn;


  function IncreaseNum(){
    setNumber(Number + 1);
  }

  function DecreaseNum(){
    if (Number > 0) return setNumber(Number - 1)
  }

  function IncreaseByFive(){
    setNumber (Number + 5);
  }

  function DecreaseByFive(){
    if(Number  > 5) return setNumber(Number - 5)
    else if(Number <= 5) return setNumber(0);

  }

  function Reset(){
    setNumber(0);
  }

  return (
    <>
      <section>
        <h1 className='text-center text-5xl font-extrabold mt-10'>Usestate :- Change Data (Variable ne Difine kara mate and value change karva mate)</h1>
        <p className='text-center mt-5 font-bold'>Increase And Decrease Number</p>
      </section>

      <div className='w-72 h-72 text-9xl px-4 py-2 bg-[#222] rounded-xl text-[#555] font-bold flex items-center justify-center mx-auto m'>{Number}</div>

      <div className='flex justify-center items-center mt-10 gap-6'>
          <button className='bg-[#555] px-8 py-4  rounded-xl font-bold cursor-pointer active:scale-95 active:bg-orange-600' onClick={IncreaseNum}>Increase</button>
          <button className='bg-[#555] px-8 py-4  rounded-xl font-bold cursor-pointer active:scale-95 active:bg-orange-600' onClick={DecreaseNum}>Decrease</button>

          <button className='bg-[#555] px-8 py-4  rounded-xl font-bold cursor-pointer active:scale-95 active:bg-orange-600' onClick={IncreaseByFive}>Increase 5</button>
          <button className='bg-[#555] px-8 py-4  rounded-xl font-bold cursor-pointer active:scale-95 active:bg-orange-600' onClick={DecreaseByFive}>Decrease 5</button>
          <button className='bg-[#555] px-8 py-4  rounded-xl font-bold cursor-pointer active:scale-95 active:bg-orange-600' onClick={Reset}>Reset </button>

      </div>
    </>
  )
}

export default Counter