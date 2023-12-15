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
    const updatedItems = [...items];

    const updatedItem = { ...updatedItems[index-1], ...newData };
  
    updatedItems[index-1] = updatedItem;
  
    setItems(updatedItems);    
  };

  

  return (
    <div className='container'>
     
      <div className="tile-container">
          {
            items.map(ele=>{
              return <Tile key={ele.id} element={ele} updateItem={updateItem} deleteItem={deleteItem}/>
            })
          }
      </div>
    </div>
  )
}

export default Home
