import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import'./SingleGun.css'

const SingleGun = (props) => {

    const [modalData, setModalData] = useState({});

    const{countIncrease,gun} =props;
     const {name,img,action,bullet} =gun
    
    return (
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
   <figure>
    <img className="w-96 h-48" src={img} alt="Shoes" />
</figure>
<div className="card-body">
<h2 className="card-title">
{name}
<div className="badge badge-primary">NEW</div>
</h2>
    {/* <p>Gun Price:{price}</p> */}
    <div className="card-actions ">
      <div className="badge badge-outline">Action: {action}</div> 
      <div className="badge badge-outline">Bullet: {bullet}</div>
    </div>
     <div className='mt-4'>
        <button onClick={()=> countIncrease()} 
        className="btn btn-sm btn-warning mr-2">
            Add to Cart
        </button>
        <label htmlFor="my-modal-3"
         onClick={() => setModalData(gun)}
                className="btn modal-button btn-sm btn-secondary">
        Details
     </label>
     </div>
  </div>
</div>
{modalData && (
        <Modal data={modalData} setModalData={setModalData}></Modal>
      )}
</div>
    );
};

export default SingleGun;