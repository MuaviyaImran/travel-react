import Image from 'next/image';
import { useEffect, useState } from 'react';

import { useMediaQuery } from 'react-responsive';

import {
    AiOutlineConsoleSql,
    AiOutlineComment,
    AiOutlineDeliveredProcedure,
    AiOutlineDribbble,
    AiOutlineFileSync,
    AiOutlineFire,
    AiOutlineUser,
    AiOutlineFieldTime
} from 'react-icons/ai';

// Images
import ThumbImage from '../../../assets/images/cities/1.jpg';
import InnerImage from '../../../assets/images/cities/2.jpg';

function Single() {

    const [mount, setMount] = useState(false);
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    useEffect(() => {
        setMount(true);
    }, [])

    return (
        <section className='py-20'>
            <div className="container mx-auto px-10">
                <div className="grid grid-cols-3 gap-8">
                    <div className={`${mount && isTabletOrMobile ? 'col-span-3' : 'col-span-2'}`}>
                        <Image src={ThumbImage} alt="Thumb" />
                        <div className="flex justify-between py-2">
                            <div className='flex items-center'>
                                <AiOutlineUser className='mr-2 text-gray-500 text-sm' />
                                <span className='text-gray-500 text-sm'>John Doe</span>
                            </div>
                            <div className='flex items-center'>
                                <AiOutlineFieldTime className='mr-2 text-gray-500 text-sm' />
                                <span className='text-gray-500 text-sm'>09 Juanuary 2020</span>
                            </div>
                        </div>
                        <h3 className='text-3xl font-bold text-gray-700 my-5'>
                            Find the Right Learning Path for your Group Course online
                        </h3>
                        <p className='my-5 text-gray-500'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco, Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                        </p>
                        <p className='my-5 text-gray-500'>
                            Deserunt ullamco Amet minim mollitAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                        </p>
                        <div className='p-8 my-5 bg-slate-100 text-gray-800 font-semibold text-lg rounded-lg'>
                            <q>
                                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                                Velit officia consequat duis enim velit mollit.
                            </q>
                        </div>
                        <p className='my-5 text-gray-500'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco, Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                        </p>
                        <h3 className='text-lg font-bold text-gray-700 my-5'>
                            You Will Never Thought That Knowing Technology Could Be So Beneficial!
                        </h3>
                        <p className='my-5 text-gray-500'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco,
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                        </p>
                        <h3 className='text-lg font-bold text-gray-700 my-5'>
                            How the 10 Worst Ux Research Fails of All Time Could Have Been Prevented
                        </h3>
                        <p className='my-5 text-gray-500'>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco,
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                        </p>
                        <p className='my-5 text-gray-500'>
                            Deserunt ullamco Amet minim mollitAmet minim mollit non deserunt
                            ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.
                        </p>
                        <Image src={InnerImage} alt="Inner" />
                        <p className='my-5 text-gray-500'>
                            Amet minim mollit non deserunt ullamco est sit aliqua
                            dolor do amet sint. Velit officia consequat duis enim velit mollit.
                            Amet minim mollit non deserunt ullamco,
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                            Velit officia consequat duis enim velit mollit.

                        </p>
                        <p className='my-5 text-gray-500'>
                            Deserunt ullamco Amet minim mollitAmet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                        </p>
                    </div>
                    <div className={`${mount && isTabletOrMobile ? 'col-span-3' : null}`}>
                        <div className='search'>
                            <input type="text" placeholder='Search' className='outline-none border border-slate-200 w-full py-2 px-2 text-sm text-gray-500 rounded-md' />
                        </div>
                        <div className='p-5 shadow-lg my-5 border border-slate-200'>
                            <h3 className='text-lg font-bold text-gray-700 mb-2'>Categories</h3>
                            <div className="flex items-center cursor-pointer my-4">
                                <div className='mr-2'>
                                    <AiOutlineConsoleSql className='text-green-500' />
                                </div>
                                <p className='text-gray-500 text-sm'>Web Development (22)</p>
                            </div>
                            <div className="flex items-center cursor-pointer my-4">
                                <div className='mr-2'>
                                    <AiOutlineComment className='text-blue-500' />
                                </div>
                                <p className='text-gray-500 text-sm'>Applied Physice (09)</p>
                            </div>
                            <div className="flex items-center cursor-pointer my-4">
                                <div className='mr-2'>
                                    <AiOutlineDeliveredProcedure className='text-red-500' />
                                </div>
                                <p className='text-gray-500 text-sm'>Backend Development (25)</p>
                            </div>
                            <div className="flex items-center cursor-pointer my-4">
                                <div className='mr-2'>
                                    <AiOutlineDribbble className='text-yellow-500' />
                                </div>
                                <p className='text-gray-500 text-sm'>Space Science (18)</p>
                            </div>
                            <div className="flex items-center cursor-pointer my-4">
                                <div className='mr-2'>
                                    <AiOutlineFileSync className='text-green-500' />
                                </div>
                                <p className='text-gray-500 text-sm'>Natarul Photography (12)</p>
                            </div>
                            <div className="flex items-center cursor-pointer my-4">
                                <div className='mr-2'>
                                    <AiOutlineFire className='text-red-500' />
                                </div>
                                <p className='text-gray-500 text-sm'>Modern Technology (15)</p>
                            </div>
                        </div>
                        <div className='p-5 shadow-lg my-5 border border-slate-200'>
                            <h3 className='text-lg font-bold text-gray-700 mb-2'>Tags</h3>
                            <div className="flex items-center cursor-pointer my-4">
                                <div className='mr-2'>
                                    <AiOutlineFire className='text-red-500' />
                                </div>
                                <p className='text-gray-500 text-sm'>Culture (15)</p>
                            </div>
                            <div className="flex items-center cursor-pointer my-4">
                                <div className='mr-2'>
                                    <AiOutlineFileSync className='text-blue-500' />
                                </div>
                                <p className='text-gray-500 text-sm'>Design (09)</p>
                            </div>
                            <div className="flex items-center cursor-pointer my-4">
                                <div className='mr-2'>
                                    <AiOutlineDribbble className='text-yellow-500' />
                                </div>
                                <p className='text-gray-500 text-sm'>Popular (12)</p>
                            </div>
                            <div className="flex items-center cursor-pointer my-4">
                                <div className='mr-2'>
                                    <AiOutlineConsoleSql className='text-green-500' />
                                </div>
                                <p className='text-gray-500 text-sm'>Slider (10)</p>
                            </div>
                            <div className="flex items-center cursor-pointer my-4">
                                <div className='mr-2'>
                                    <AiOutlineDribbble className='text-yellow-500' />
                                </div>
                                <p className='text-gray-500 text-sm'>Beach (25)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Single