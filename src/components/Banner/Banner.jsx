import React from 'react';
import vector1 from '../../assets/vector1.png'

const Banner = () => {
    return (
        <div className='flex justify-center items-center gap-1 mt-10'>
            <div 
            style={{backgroundImage: `linear-gradient(to right in srgb, rgba(168, 85, 247, 0.7), rgba(45, 212, 191, 0.7)), 
            url(${vector1})`}}
            className='w-[708px] h-[250px] text-center pt-20 mx-5 font-bold text-2xl bg-blend-overlay z-10'>
                <h2>In Progress</h2>
                <p>0</p>
            </div>
            <div 
            style={{backgroundImage: `linear-gradient(to right in srgb, rgba(34, 197, 94, 0.6), rgba(45, 212, 191, 0.6)), 
            url('${vector1}')`}}
            className='w-[708px] h-[250px] text-center pt-20 mx-5 font-bold text-2xl'>
                <h2>Resolved</h2>
                <p>0</p>
            </div>
        </div>
    );
};

export default Banner;