import React from "react";

const IceCreamCard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-50">
      
      <div className="bg-white rounded-3xl shadow-lg w-80 overflow-hidden">
        <img
          src="https://media.istockphoto.com/id/185319677/photo/ice-cream.webp?a=1&b=1&s=612x612&w=0&k=20&c=Z0i4VHeCMJP7YZWtk9Ge_ipge9QV2-Y8tlR9o-xrIUU="
          alt="ice cream"
          className="w-full h-55 object-cover"
        />

        
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-800"> Vanilla ice cream</h2>

          <div className="flex gap-3 text-sm text-gray-600 mt-2">
            <span className="px-3 py-1 text-xs bg-gray-200 rounded-full">Vegan</span>
            <span className="px-3 py-1 text-xs bg-gray-200 rounded-full">Gluten free</span>
            <span className="px-3 py-1 text-xs bg-gray-200 rounded-full">Organic</span>
          </div>

          
          <p className="text-gray-500 text-sm mt-3">Lorem ipsum dolor sit amet consectetur.</p>

          
          <div className="flex gap-2  text-gray-600 mt-3">
            <span className="px-3 py-1 text-xs bg-gray-200 rounded-full">Toppings</span>
            <span className="px-3 py-1 text-xs bg-gray-200 rounded-full">Choco chips</span>
            <span className="px-3 py-1 text-xs bg-gray-200 rounded-full">Nuts</span>
          </div>


          <div className="flex items-center justify-between mt-6">
            <div>
              <p className="text-xl font-bold text-yellow-500">$10.00</p>
              <p className="text-xs text-gray-400">+$2 delivery</p>
            </div>

            <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-400 font-semibold px-5 py-2 rounded-full shadow-md"> 
                Add to cart
            </button>
          </div>

        </div>
      </div>

    </div>
  );
};

export default IceCreamCard;