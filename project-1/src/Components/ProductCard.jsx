import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const ProductCard = ({data}) => {
  return (
    
    <>
        <div className="card bg-white/10 rounded-4xl px-4 w-full max-w-sm overflow-hidden shadow-2xl relative">
           
            <div className='absolute z-10 top-6 left-5'>
                     <div className='flex justify-between items-center gap-56'>
                        <div className='bg-gray/80 rounded-full px-3 py-1 text-sm font-bold text-white'>Best Seller</div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ5gfgBW3dDxY8n0simyN7gPw9qxIfpozFHQ&s" alt="logo" className='rounded-full w-6'/>
                    </div>
            </div>
            <img src={data.productPhoto} alt=""  className="w-full h-auto rounded-4xl object-cover border border-gray-600"/>

            <div className="content px-4 py-3">
                <h1 className="font-extrabold text-2xl ">{data.productName}</h1>
                <p className="font-bold text-xl text-gray-400/60 mb-2">{data.tagline}</p>
                <p className="text-gray-400/60 font-medium mb-2 text-md">{data.details}</p>

                <div className="price flex items-center justify-between mt-2">
                    <h1 className="rounded-full bg-gray-200 px-3 py-1  font-bold">{data.price}</h1>
                    <div className='flex gap-2 items-center bg-black text-white rounded-full px-3 py-1'>
                        <button>Buy Now </button>
                        <ArrowUpRight className="inline-block w-5 h-5 bg-white text-black rounded-full p-0.5"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductCard