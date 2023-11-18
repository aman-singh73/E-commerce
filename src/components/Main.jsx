import React,{useState} from "react";
import dress from '../assets/dress.jpeg';
import eyewear from '../assets/eyewear.jpeg';
import laptop from '../assets/laptop.webp';
import mobile from '../assets/mobile.jpg';
import pant from '../assets/pant.jpeg';
import shirt from '../assets/shirt.webp';
import {CiSearch,CiShoppingCart} from 'react-icons/ci';

const Main = () => {
    let Products =[
      {
        img:dress,
        title:'dress',
        description:'lorem ipsum',
        price:30
      },
      {
        img:eyewear,
        title:'Sun Glasses',
        description:'lorem ipsum dolar',
        price:40
      },
      {
        img:shirt,
        title:'Shirt',
        description:'lorem ipsum dolar',
        price:70
      },
      {
        img:pant,
        title:'Pant',
        description:'lorem ipsum dolar',
        price:990
      },
      {
        img:laptop,
        title:'Laptop',
        description:'lorem ipsum dolar',
        price:30
      },
      {
        img:mobile,
        title:'Mobile',
        description:'lorem ipsum dolar',
        price:999
      },
      {
        img:mobile,
        title:'Mobile',
        description:'lorem ipsum dolar',
        price:880
      },
      {
        img:laptop,
        title:'Laptop',
        description:'lorem ipsum dolar',
        price:40
      },
      {
        img:eyewear,
        title:'Sun Glasses',
        description:'lorem ipsum dolar',
        price:40
      },
      {
        img:laptop,
        title:'Laptop',
        description:'lorem ipsum dolar',
        price:40
      },
      {
        img:mobile,
        title:'Mobile',
        description:'lorem ipsum dolar',
        price:40
      }, 
    ]
    const [filteredProducts,setFilteredProducts]=useState(Products)
    const searchHandler = (e)=>{
      const filteredArray= Products.filter((product)=> product.title.toLocaleLowerCase().includes(e.target.value))
      if(filteredArray.length !=0){
        setFilteredProducts(filteredArray);
      }
    }
    return (
      <div className='w-full relative'>
        <div className='sticky top-0 z-10'>
          <div className='header flex justify-between items-center p-4 bg-white'>
            <h1 className='text-5xl font-bold'>Style Fix</h1>
            <div className="search flex justify-between items-center px-5 py-2 bg-gray-100 rounded">
              <input type="text" placeholder='Search product'  className='bg-transparent outline-0'
              onChange={searchHandler}/>
              <button onClick={()=> searchHandler()}><CiSearch/></button>
            </div>
          </div>
          <div className="categories bg-white w-full flex justify-between space-x-8 px-2 py-10">
            <div className='bg-black text-white px-5 py-2 rounded-full drop-shadow-xl'>
              <p>eyewear</p>
            </div>
            <div className='bg-white border px-5 py-2 rounded-full drop-shadow-xl'>
              <p>laptop</p>
            </div>
            <div className='bg-white border px-5 py-2 rounded-full drop-shadow-xl'>
              <p>pant</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
              <p>shirt</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
              <p>eyewear</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
              <p>mobile</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
              <p>laptop</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
              <p>laptop</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
              <p>laptop</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
              <p>laptop</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
              <p>shirt</p>
            </div>
            <div className='bg-white px-5 py-2 rounded-full drop-shadow-xl'>
              <p>laptop</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
              <p>laptop</p>
            </div>
            <div className='bg-white border px-4 py-2 rounded-full drop-shadow-xl'>
              <p>eyewear</p>
            </div>
          </div>
        </div>
        <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20">
          {filteredProducts && filteredProducts?.map((product,idx)=>{
            return(
              <div key={idx} className="product h-[350px] bg-white drop-shadow-2xl p-2 border">
              <img src={product.img} alt="" className='w-full h-[70%] object-cover p-2' />
              <div className='m-2 bg-gray-100 p-2'>
                <h1 className='text-xl font-semibold'>{product.title}</h1>
                <p className='text-sm'>{product.description}</p>
                <div className='flex justify-between items-center'>
                  <p className='text-xl font-bold'>${product.price}.00</p>
                  <CiShoppingCart size={'2rem'}/>
                </div>
              </div>
            </div>
            )
          })}
          
        </div>
      </div>
    )
  }
  
  export default Main


