import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';
import './Allgun.css'

const Allgun = ({countIncrease}) => {

    const [guns,setGuns] =useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res=>res.json())
        .then( data=>setGuns(data))
    },[])

    return (
        <div className='mt-5 my-5'>
            <div className='my-5'>
            <h2 className='text-3xl font-semibold my-2'>Welcome to Buds Gun Shop</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid ex 
            deserunt eius incidunt similique quasi <br /> Lorem ipsum dolor sit amet consectetur 
             adipisicing elit. Quibus.
            </p>
           
            </div>
           <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'> 
           {
                guns.map(gun => <SingleGun
                     gun ={gun} 
                     key ={gun.id}

                    countIncrease ={countIncrease}
                
                ></SingleGun>)
            }
           </div>
        </div>
    );
};

export default Allgun;