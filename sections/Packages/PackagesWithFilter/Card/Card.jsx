import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { useMediaQuery } from 'react-responsive';

import {
    AiOutlineAppstore,
    AiOutlineBank,
    AiOutlineAudit,
    AiOutlineBgColors,
    AiOutlineHistory,
    AiOutlineGlobal
} from 'react-icons/ai';

function Card({ imageUrl, name, price }) {

    const [mount, setMount] = useState(false);
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    useEffect(() => {
        setMount(true);
    }, []);

    return (
        <div className='bg-white shadow-lg p-4 hover:scale-105 duration-500 mb-2'>
            <div className='flex'>
                {
                    mount && !isMobile ? (
                        <div className='mr-4 w-1/4'>
                            <Image src={imageUrl} alt="Package" className='cursor-pointer' />
                        </div>
                    ) : null
                }
                <div className='w-2/4'>
                    <h3 className='text-red-500 text-3xl font-bold my-2 cursor-pointer'>{name}</h3>
                    <p className='text-gray-500 text-sm'>
                        Home to numerous lakes,
                        villages and high peaks of the Alps,
                        Switzerland is a dreamy mountainous Central
                        European country that lures tourists from all over the world.
                    </p>
                </div>
                <div className={`${mount && isMobile ? 'w-2/4' : 'w-1/4'} text-center`}>
                    <span className='text-gray-500 text-sm block my-2'>Prices Starting</span>
                    <h1 className='text-red-500 text-3xl font-bold my-2'>${price}</h1>
                    <button className='bg-yellow-500 py-1 px-8 rounded-md border border-yellow-700 font-bold'>Book Now</button>
                </div>
            </div>
            <hr className='my-2' />
            <div>
                <h3 className='my-2 px-2 font-semibold'>Detail and Includes</h3>
                <div className={`${mount && isMobile ? 'block' : 'flex'}`}>
                    <div className={`${mount && isMobile ? 'my-2 text-center' : null} mx-2 border border-slate-200 p-2`}>
                        <AiOutlineAppstore className='mx-auto' />
                        <p className='text-xs text-gray-500'>Sightseeing</p>
                    </div>
                    <div className={`${mount && isMobile ? 'my-2 text-center' : null} mx-2 border border-slate-200 p-2`}>
                        <AiOutlineBank className='mx-auto' />
                        <p className='text-xs text-gray-500'>Hotel</p>
                    </div>
                    <div className={`${mount && isMobile ? 'my-2 text-center' : null} mx-2 border border-slate-200 p-2`}>
                        <AiOutlineAudit className='mx-auto' />
                        <p className='text-xs text-gray-500'>Transfer</p>
                    </div>
                    <div className={`${mount && isMobile ? 'my-2 text-center' : null} mx-2 border border-slate-200 p-2`}>
                        <AiOutlineBgColors className='mx-auto' />
                        <p className='text-xs text-gray-500'>Luggage</p>
                    </div>
                    <div className={`${mount && isMobile ? 'my-2 text-center' : null} mx-2 border border-slate-200 p-2`}>
                        <AiOutlineHistory className='mx-auto' />
                        <p className='text-xs text-gray-500'>Duration 8N/9D</p>
                    </div>
                    <div className={`${mount && isMobile ? 'my-2 text-center' : null} mx-2 border border-slate-200 p-2`}>
                        <AiOutlineGlobal className='mx-auto' />
                        <p className='text-xs text-gray-500'>Location : Rio,Brazil</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card