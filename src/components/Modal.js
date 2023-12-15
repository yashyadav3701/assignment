import React,{useEffect, useState} from 'react';
import './Modal.css';
import './Form.css';

const Modal = ({ data,isOpen, onClose, onSave, children }) => {
  const[errorState,setErrorState]=useState({
    nameError: {
      isError:false,
      message:"This field is required"
    },
    emailError:{
      isError:false,
      message:"This field is required"
    },
    phoneNoError:{
      isError:false,
      message:"This field is required"
    },
    websiteError:{
      isError:false,
      message:"This field is required"
    },
  });

  const [formData, setFormData] = useState({
    id:data.id,
    name: data.name,
    email: data.email,
    phoneNo: data.phoneNo,
    website: data.website,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    const key=`${name}Error`;
    
    if(value.trim().length==0){
      setErrorState((prev) => ({ ...prev, [key]: {...prev[key],isError:true} }));
    }
    else{
      setErrorState((prev) => ({ ...prev, [key]: {...prev[key],isError:false} }));
      if(name=="email"){
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          setErrorState((prev) => ({ ...prev, [key]: {...prev[key],isError:true,message:"Invalid Email"} }));
        }
        else{
          setErrorState((prev) => ({ ...prev, [key]: {...prev[key],isError:false,message:"This field is required"} }));
        }
      }
    }
  };

  useEffect(()=>{
  },[errorState])
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <p>Basic Modal</p>
              <button className="cross-button" onClick={onClose}>&times;</button>
            </div>
            <div className="modal-content">

            <form>
              <div className='form-field'>
                <div>
                  <label htmlFor="name"><span className='star'>*</span>Name:</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}  required/>
                </div>
                <p className='error' style={{visibility:errorState.nameError.isError?"visible":"hidden"}}>{errorState.nameError.message}</p>
              </div>
              <div className='form-field'>
                <div>
                  <label htmlFor="email"><span className='star'>*</span>Email:</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                 <p className='error' style={{visibility:errorState.emailError.isError?"visible":"hidden"}}>{errorState.emailError.message}</p>
              </div>
              <div className='form-field'>
                <div>
                  <label htmlFor="phone"><span className='star'>*</span>Phone:</label>
                  <input type="text" id="phone" name="phoneNo" value={formData.phoneNo} minLength={5} maxLength={10} onChange={handleChange} required />
                </div>
                <p className='error' style={{visibility:errorState.phoneNoError.isError?"visible":"hidden"}}>{errorState.phoneNoError.message}</p>
              </div>
              <div className='form-field'>
                <div>
                  <label htmlFor="website"><span className='star'>*</span>Website:</label>
                  <input type="text" id="website" name="website" value={formData.website} onChange={handleChange} required/>
                </div>
                <p className='error' style={{visibility:errorState.websiteError.isError?"visible":"hidden"}}>{errorState.websiteError.message}</p>
              </div>
            </form>
            </div>

            <div className="modal-footer">
              <div className='modal-footer-inner'>
                <button className='cancel-button' onClick={onClose}>Cancel</button>
                <button className='ok-button' type="submit" onClick={()=>onSave(formData)}>Ok</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
