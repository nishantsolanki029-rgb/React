import { useState } from 'react'

const AddUser = () => {

    const [Data, setData] = useState([
        { name: "Aarav Patel", email: "aaravpatel@gmail.com", color: "bg-red-400" },
        { name: "Riya Sharma", email: "riyasharma@gmail.com", color: "bg-purple-400" },
        { name: "Vivaan Mehta", email: "vivaanmehta@gmail.com", color: "bg-teal-400" }
    ])

    function add() {
        let arr = [...Data]; // copy array
        arr.push({ name: "Ananya Gupta", email: "ananyagipta@gmail.com", color: "bg-green-400" });

        if (Data[3]?.name === "Ananya Gupta") return alert("You Can Only Use Btn at a one time");

        setData(arr)
    }

    function addTwoUser(){
        let arr = [...Data]; // copy array
        arr.push({ name: "Haresh Parmar", email: "hareshparmar@gmail.com", color: "bg-blue-400" },{ name: "Arun Sharma", email: "arunsharma@gmail.com", color: "bg-orange-400" });
    
       if (Data[3]?.name === "Ananya Gupta" || Data[4]?.name === "Haresh Parmar" || Data[5]?.name === "Arun Sharma") return alert("You Can Only Use Btn at a one time");
       

        setData(arr);
    }

    // Array ni andar data (USE MAP)

    // Task :
    // 1. Create a Btn That add Two User
    return (
        <>
            <section className='flex flex-wrap justify-center items-center gap-6 py-10'>
                {Data.map((user) => {
                    return (
                        <div className={`w-full h-auto max-w-sm rounded-xl p-2 text-center font-bold text-2xl ${user.color} flex justify-center items-center
    flex-col gap-2`}>
                            <h1 className='bg-[#222] w-full rounded-xl px-4 py-2'>{user.name}</h1>
                            <h1 className='bg-[#222] w-full rounded-xl px-4 py-2'>{user.email}</h1>
                        </div>
                    )
                })}
            </section>

            <div className='flex justify-center items-center gap-6 m-5'>
                <button className='bg-orange-600 text-center px-6 py-4 active:bg-orange-100 active:scale-95 active:text-orange-600 text-xl font-semibold rounded-lg cursor-pointer transition-all ease-[cubic-bezier(0.3, 0.8, 0.3, 2.3)]' onClick={add}>Add One More User</button>
            </div>

            <div className='flex justify-center items-center'>
                <button className='bg-orange-600 text-center px-6 py-4 active:bg-orange-100 active:scale-95 active:text-orange-600 text-xl font-semibold rounded-lg cursor-pointer transition-all ease-[cubic-bezier(0.3, 0.8, 0.3, 2.3)]' onClick={addTwoUser}>Add Two More User</button>
            </div>

        </>
    )
}

export default AddUser