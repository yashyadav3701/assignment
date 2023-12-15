import React, { useEffect, useState } from 'react'
import './Home.css';
import Tile from './Tile';
import Modal from './Modal';
import {data} from './data'

function Home() { 
  
  const [items,setItems]=useState(data);

  const deleteItem = (index) => {
    const newItems = items.filter(ele=>{
      return ele.id!=index;
    });
    setItems(newItems);
  };

  const updateItem = (index, newData) => {
    console.log(index,newData);
    // const updatedItems = items.map((ele) => (ele.id === index ? { ...ele, ...newData } : ele));
    const updatedItems = [...items];

    // Create a copy of the item to update
    const updatedItem = { ...updatedItems[index-1], ...newData };
  
    // Update the item in the copied array
    updatedItems[index-1] = updatedItem;
  
    // Update the state with the new array
    setItems(updatedItems);

    // const item=items.filter(ele=>ele.id==index);
    // const updatedItem={...item[0],...newData}
    // setItems((prev)=>[...prev,updatedItem]);
    
  };

  useEffect(()=>{
    console.log(items);
  },[items]);

  return (
    <div className='container'>
     
      <div className="tile-container">
        {/* <div className='tiles'> */}
          {
            items.map(ele=>{
              return <Tile element={ele} updateItem={updateItem} deleteItem={deleteItem}/>
            })
          }
        {/* </div> */}
      </div>
    </div>
  )
}

export default Home
