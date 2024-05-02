import React, { useEffect, useState } from 'react';

const OurService = () => {
    const [data, setData] = useState();

    useEffect( ()=> {
        fetch('services.json')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
        })
    }, [])
    console.log(data)

    return (
        <div>
            <div>
                <h2 className='text-5xl font-bold text-center'>Our Service Area</h2>
                <p className='text-center w-[600px] mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div>
                {

                }
            </div>
        </div>
    );
};

export default OurService;