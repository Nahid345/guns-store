import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';
import './Allgun.css'

const Allgun = () => {

    const [guns,setGuns] =useState([])
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res=>res.json())
        .then( data=>setGuns(data))
    },[])

    return (
        <div className='mt-5'>
            <h2 className='text-3xl font-semibold'>Welcome to Buds Gun Shop</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit aliquid ex 
            deserunt eius incidunt similique quasi <br /> Lorem ipsum dolor sit amet consectetur 
             adipisicing elit. Quibus.
            </p>
            <p> ALl Gun: {guns.length}</p>
            {
                guns.map(gun => <SingleGun gun ={gun}></SingleGun>)
            }
        </div>
    );
};

export default Allgun;