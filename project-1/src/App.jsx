import React from 'react'
import Card from './components/Card'
import ProductCard from './Components/ProductCard';
import IceCreamCard from './Components/Card1';
import Card2 from './Components/card2';


const App = () => {
//   const data = [
//   {
//     photo: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3JhbmdlJTIwSnVpY2V8ZW58MHx8MHx8fDA%3D",
//     juice_name: "Orange Juice",
//     ingredients: ["Fresh Oranges", "Sugar", "Ice", "Mint"],
//     price: 80
//   },
//   {
//     photo: "https://images.unsplash.com/photo-1546173159-315724a31696?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     juice_name: "Mango Juice",
//     ingredients: ["Ripe Mangoes", "Milk", "Sugar", "Ice"],
//     price: 100
//   },
//   {
//     photo: "https://media.istockphoto.com/id/483748240/photo/cold-watermelon-smoothie.webp?a=1&b=1&s=612x612&w=0&k=20&c=_f3Xr2HojNeIzo3EAR5Kuu_z-5vIwKHDqXAskuI__L8=",
//     juice_name: "Watermelon Juice",
//     ingredients: ["Watermelon", "Black Salt", "Mint", "Ice"],
//     price: 70
//   },
//   {
//     photo: "https://images.unsplash.com/photo-1639059700210-501d8d907939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGluZWFwcGxlJTIwSnVpY2V8ZW58MHx8MHx8fDA%3D",
//     juice_name: "Pineapple Juice",
//     ingredients: ["Pineapple", "Sugar Syrup", "Lemon Juice", "Ice"],
//     price: 90
//   },
//   {
//     photo: "https://images.unsplash.com/photo-1605199910378-edb0c0709ab4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXBwbGUlMjBKdWljZXxlbnwwfHwwfHx8MA%3D%3D",
//     juice_name: "Apple Juice",
//     ingredients: ["Fresh Apples", "Honey", "Water", "Ice"],
//     price: 85
//   },
//   {
//     photo: "https://images.unsplash.com/photo-1663955706695-de874fa93c4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UG9tZWdyYW5hdGUlMjBKdWljZXxlbnwwfHwwfHx8MA%3D%3D",
//     juice_name: "Pomegranate Juice",
//     ingredients: ["Pomegranate Seeds", "Black Salt", "Lemon Juice"],
//     price: 110
//   },
//   {
//     photo: "https://images.unsplash.com/photo-1649034472219-4c22f0ebbd89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWl4ZWQlMjBGcnVpdCUyMEp1aWNlfGVufDB8fDB8fHww",
//     juice_name: "Mixed Fruit Juice",
//     ingredients: ["Apple", "Banana", "Mango", "Orange", "Honey"],
//     price: 120
//   },
//   {
//     photo: "https://images.unsplash.com/photo-1628961915002-cd58e3cd8d34?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2Fycm90JTIwSnVpY2V8ZW58MHx8MHx8fDA%3D",
//     juice_name: "Carrot Juice",
//     ingredients: ["Carrots", "Ginger", "Lemon Juice", "Honey"],
//     price: 75
//   },
//   {
//     photo: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3RyYXdiZXJyeSUyMEp1aWNlfGVufDB8fDB8fHww",
//     juice_name: "Strawberry Juice",
//     ingredients: ["Fresh Strawberries", "Sugar", "Milk", "Ice"],
//     price: 110
//   },
//   {
//     photo: "https://media.istockphoto.com/id/175417808/photo/banana-smoothie.webp?a=1&b=1&s=612x612&w=0&k=20&c=TZTt6SIxxfHIszgTaJyW706E9YAxMzBscoChcxrktck=",
//     juice_name: "Banana Smoothie",
//     ingredients: ["Banana", "Milk", "Honey", "Ice Cream"],
//     price: 95
//   }
// ]



// const product = [
//   {
//     "productPhoto": "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&h=600&q=80",
//     "productName": "Nike Air Running Shoes",
//     "price": 129.99,
//     "tagline": "Run with legendary comfort",
//     "details": "Nike running shoes designed with lightweight cushioning and breathable mesh for maximum performance."
//   },
//   {
//     "productPhoto": "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?auto=format&fit=crop&w=600&h=600&q=80",
//     "productName": "Nike Sports Hoodie",
//     "price": 79.99,
//     "tagline": "Comfort meets performance",
//     "details": "Nike hoodie made with soft fleece fabric to keep you warm during workouts or casual wear."
//   },
//   {
//     "productPhoto": "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&h=600&q=80",
//     "productName": "Nike Air Max Sneakers",
//     "price": 149.99,
//     "tagline": "Iconic style with air cushioning",
//     "details": "Nike Air Max sneakers featuring visible Air cushioning for superior comfort and bold street style."
//   },
//   {
//     "productPhoto": "https://images.unsplash.com/photo-1526406915894-7bcd65f60845?auto=format&fit=crop&w=600&h=600&q=80",
//     "productName": "Nike Training Water Bottle",
//     "price": 24.99,
//     "tagline": "Hydration for champions",
//     "details": "Nike branded insulated water bottle designed for athletes to keep drinks cool during workouts."
//   },
//   {
//     "productPhoto": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&h=600&q=80",
//     "productName": "Nike Gym Backpack",
//     "price": 69.99,
//     "tagline": "Carry your gear in style",
//     "details": "Nike durable gym backpack with spacious compartments for shoes, clothes, and daily essentials."
//   },
//   {
//     "productPhoto": "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&h=600&q=80",
//     "productName": "Nike Dri-FIT T-Shirt",
//     "price": 39.99,
//     "tagline": "Stay dry. Stay fast",
//     "details": "Nike Dri-FIT performance t-shirt designed to wick sweat away and keep athletes comfortable."
//   },
//   {
//     "productPhoto": "https://images.unsplash.com/photo-1593081891731-fda0877988da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE5pa2UlMjBTcG9ydHMlMjBDYXB8ZW58MHx8MHx8fDA%3D",
//     "productName": "Nike Sports Cap",
//     "price": 29.99,
//     "tagline": "Classic athletic look",
//     "details": "Nike lightweight sports cap offering breathable comfort and signature athletic style."
//   },
//   {
//     "productPhoto": "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&h=600&q=80",
//     "productName": "Nike Training Shorts",
//     "price": 44.99,
//     "tagline": "Move without limits",
//     "details": "Nike training shorts made with stretch fabric and sweat-wicking technology for intense workouts."
//   },
//   {
//     "productPhoto": "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=600&h=600&q=80",
//     "productName": "Nike Running Socks",
//     "price": 19.99,
//     "tagline": "Support every step",
//     "details": "Nike cushioned running socks designed for comfort, breathability, and long-distance performance."
//   },
//   {
//     "productPhoto": "https://images.unsplash.com/photo-1674023797361-e95512cf8069?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fE5pa2UlMjBHeW0lMjBUcmFpbmluZyUyMEdsb3Zlc3xlbnwwfHwwfHx8MA%3D%3D",
//     "productName": "Nike Gym Training Gloves",
//     "price": 34.99,
//     "tagline": "Grip your strength",
//     "details": "Nike training gloves designed to provide better grip, comfort, and hand protection during workouts."
//   }
// ]

  return (
    <>
      {/* <section className="flex flex-wrap gap-6 px-8 py-4 justify-center items-center">
       
       {data.map(function(data){
          return <Card data={data}/>;
       })}
      </section> */}


      {/* <section className='flex items-center justify-center flex-wrap py-4 px-6 gap-6'>  
          {product.map(function(data){
            return <ProductCard data={data}/>;
          })}
      </section> */}

        {/* <IceCreamCard /> */}

        
    </>
    
  );
}

export default App                                                                                                                                                                                                                 