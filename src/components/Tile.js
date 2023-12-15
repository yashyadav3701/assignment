import React, { useState } from 'react'
import './Tile.css'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";
import { RiEditLine } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { IoGlobeOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import Modal from './Modal';
import Form from './Form';


function Tile(props) {

  const [isLiked,setIsLiked]=useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleClick=()=>{
    // console.log("xlicked");
    setIsLiked((prev)=>!prev);
  }

  const handleSubmit = (formData) => {
    console.log(formData);
    props.updateItem(formData.id,formData);
    closeModal();
  };


  const handleEditClick=()=>{
    setModalOpen(true);

  }
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='tile'>
      <Modal data={props.element} isOpen={isModalOpen} onSave={handleSubmit} onClose={()=>closeModal()}>
        {/* <Form data={props.element} onSubmit={handleSubmit}/> */}
      </Modal>
      <div className='tile-image'></div>
        {/* <img className="tile-image" src='https://fastly.picsum.photos/id/881/200/300.jpg?hmac=OaIsS2cuxcnUpCVdxcFoc8JwfJgzWEv2Z9F_qEN9tHU'></img> */}
      <div className='tile-information'>
      <div className='text'>
        <p>{props.element.name}</p>
      </div>
        <div className='title-info-inner'>
          <div className='icon-text'>
            <div className='icon'><AiOutlineMail /></div>
            <div>{props.element.email}</div>
          </div>
          <div className='icon-text'>
            <div className='icon'><AiOutlinePhone /></div>
            <div>{props.element.phoneNo}</div>
          </div>
          <div className='icon-text'>
            <div className='icon'><IoGlobeOutline /></div>
            <div>http://{props.element.website}</div>
          </div>
        </div>
      </div>
      <div className='tile-bottom'>
        <div className="tile-bottom-inner">
          <div className='heart bottom-icon'>
            {!isLiked?<FaRegHeart className="icon heart"  color='red' onClick={()=>handleClick()}/>:<FaHeart className='icon' color='red' onClick={()=>handleClick()}/>}
          </div>
        </div>
        <div className="tile-bottom-inner">
          <div className='bottom-icon'><RiEditLine onClick={()=>handleEditClick()} className='icon' color="grey"/></div>
        </div>
        
        <div className="tile-bottom-inner">
          <div className="bottom-icon" onClick={() => props.deleteItem(props.element.id)}><AiFillDelete color="grey" className='icon'/></div>
        </div>
      </div>
    </div>
  )
}

export default Tile
