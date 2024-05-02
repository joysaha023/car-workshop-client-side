import React, { useEffect, useState } from 'react';
import CardData from '../CardData/CardData';

const OurService = () => {
    const [data, setData] = useState([]);

    useEffect( ()=> {
        fetch('services.json')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
        })
    }, [])
  

    return (
        <div>
            <div className=''>
                <h2 className='text-5xl font-bold text-center'>Our Service Area</h2>
                <p className='text-center w-[600px] mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 mt-5 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    data.map(item => <CardData key={item._id} item={item}></CardData>)
                }
            </div>
        </div>
    );
};

export default OurService;