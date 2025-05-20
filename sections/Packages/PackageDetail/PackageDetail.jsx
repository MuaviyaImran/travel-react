import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { AiFillStar } from 'react-icons/ai';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import { useMediaQuery } from 'react-responsive';

// Packages
import PackageImg1 from '../../../assets/images/packages/1.jpg';
import PackageImg2 from '../../../assets/images/packages/2.jpg';
import PackageImg3 from '../../../assets/images/packages/3.jpg';

// Avatars
import AvatarImg1 from '../../../assets/images/avatars/1.jpg';
import AvatarImg2 from '../../../assets/images/avatars/2.jpg';
import AvatarImg3 from '../../../assets/images/avatars/3.jpg';

function PackageDetail() {

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
                        <h3 className='uppercase text-4xl font-bold text-gray-700'>The Experince The Natural Beauty Of Island</h3>
                        <Image src={PackageImg1} alt="Package" className='my-5' />
                        <div>
                            <Tabs>
                                <TabList>
                                    <Tab>Description</Tab>
                                    <Tab>Program</Tab>
                                    <Tab>Review</Tab>
                                </TabList>
                                <TabPanel>
                                    <p className='text-sm text-gray-500 my-5'>
                                        Occaecat pariatur! Quaerat ligula, ab, consequuntur orci mus ultricies
                                        praesent aute blandit beatae nisl aut, totam mauris rhoncus? Tellus netus fringilla class
                                        auctor dui. Dolores excepteur, doloribus, blanditiis aliquip nisl. Occaecat iusto? Provident sociis
                                        rerum. Amet, asperiores molestie varius eos! Libero, fermentum fermentum totam! Sunt praesentium, totam.
                                        Excepteur platea nisl. Convallis aliquam? Iaculis erat ipsa molestie, quod,
                                        vestibulum reiciendis, maxime nostra, integer unde officiis quo integer unde officiis quo.
                                    </p>
                                    <p className='text-sm text-gray-500 my-5'>
                                        Occaecat pariatur! Quaerat ligula, ab,
                                        consequuntur orci mus ultricies praesent aute blandit beatae nisl aut,
                                        totam mauris rhoncus? Tellus netus fringilla class auctor dui. Dolores excepteur,
                                        doloribus, blanditiis aliquip nisl..
                                    </p>
                                    <ul>
                                        <li className='text-sm text-gray-500 my-2'>Travel cancellation insurance</li>
                                        <li className='text-sm text-gray-500 my-2'>Breakfast and dinner included</li>
                                        <li className='text-sm text-gray-500 my-2'>Health care included</li>
                                        <li className='text-sm text-gray-500 my-2'>Transfer to the airport and return to the agency</li>
                                        <li className='text-sm text-gray-500 my-2'>Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                                    </ul>
                                </TabPanel>
                                <TabPanel>
                                    <h3 className='text-gray-700 text-lg font-bold my-5'>Program ( 4 days )</h3>
                                    <p className='text-sm text-gray-500'>
                                        Dolores maiores dicta dolore. Natoque placeat libero sunt
                                        sagittis debitis? Egestas non non qui quos, semper aperiam lacinia eum nam!
                                        Pede beatae. Soluta, convallis irure accusamus voluptatum ornare saepe cupidatat.
                                    </p>
                                    <div className='flex items-center my-5 bg-slate-100 p-4'>
                                        <div className='mr-5 bg-red-500 text-white p-2 rounded-md text-center'>
                                            <p className='text-white font-bold'>Day <span>1</span></p>
                                        </div>
                                        <div>
                                            <h3 className='text-gray-700 font-bold'>Ancient Rome Visit</h3>
                                            <p className='text-gray-500 text-sm'>
                                                Nostra semper ultricies eu leo eros orci porta provident,
                                                fugit? Pariatur interdum assumenda, qui aliquip
                                                ipsa! Dictum natus potenti pretium
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex items-center my-5 bg-slate-100 p-4'>
                                        <div className='mr-5 bg-red-500 text-white p-2 rounded-md text-center'>
                                            <p className='text-white font-bold'>Day <span>2</span></p>
                                        </div>
                                        <div>
                                            <h3 className='text-gray-700 font-bold'>Ancient Rome Visit</h3>
                                            <p className='text-gray-500 text-sm'>
                                                Nostra semper ultricies eu leo eros orci porta provident,
                                                fugit? Pariatur interdum assumenda, qui aliquip
                                                ipsa! Dictum natus potenti pretium
                                            </p>
                                        </div>
                                    </div>
                                    <div className='flex items-center my-5 bg-slate-100 p-4'>
                                        <div className='mr-5 bg-red-500 text-white p-2 rounded-md text-center'>
                                            <p className='text-white font-bold'>Day <span>3</span></p>
                                        </div>
                                        <div>
                                            <h3 className='text-gray-700 font-bold'>Ancient Rome Visit</h3>
                                            <p className='text-gray-500 text-sm'>
                                                Nostra semper ultricies eu leo eros orci porta provident,
                                                fugit? Pariatur interdum assumenda, qui aliquip
                                                ipsa! Dictum natus potenti pretium
                                            </p>
                                        </div>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className='flex items-center bg-slate-100 p-5 my-5'>
                                        <div className='mr-5 bg-white p-4 rounded-lg'>
                                            <span className='font-bold text-gray-700 text-2xl'>4.9</span>
                                        </div>
                                        <div>
                                            <h3 className='font-bold text-gray-700 my-2'>Excellent <span className='text-sm text-gray-500 font-normal'>( Based on 24 reviews )</span></h3>
                                            <p className='text-sm text-gray-500'>
                                                Tincidunt iaculis pede mus lobortis hendrerit eveniet impedit
                                                aenean mauris qui, pharetra rem doloremque laboris euismod deserunt non,
                                                cupiditate, vestibulum.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='text-gray-700 font-bold text-lg'>3 Reviews</h3>
                                    </div>
                                    <div>
                                        <div className='flex my-10'>
                                            <div>
                                                <Image src={AvatarImg1} width="100px" height="100px" alt="Avatar" className='rounded-full object-cover' />
                                            </div>
                                            <div className='border border-slate-300 p-5 ml-5'>
                                                <p className='text-gray-700 font-semibold my-2'>John Doe <span className='text-sm text-gray-500 font-normal'>Jana 10 2020</span></p>
                                                <div className='my-2'>
                                                    <AiFillStar className='text-yellow-500 inline-block' />
                                                    <AiFillStar className='text-yellow-500 inline-block' />
                                                    <AiFillStar className='text-yellow-500 inline-block' />
                                                    <AiFillStar className='text-yellow-500 inline-block' />
                                                    <AiFillStar className='text-yellow-500 inline-block' />
                                                </div>
                                                <p className='my-2 text-sm text-gray-500'>Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.</p>
                                                <button className='bg-red-500 text-white text-sm py-1 px-4 my-2'>Reply</button>
                                            </div>
                                        </div>
                                        <div className='flex my-10 pl-10'>
                                            <div>
                                                <Image src={AvatarImg2} width="100px" height="100px" alt="Avatar" className='rounded-full object-cover' />
                                            </div>
                                            <div className='border border-slate-300 p-5 ml-5'>
                                                <p className='text-gray-700 font-semibold my-2'>Jack Leo <span className='text-sm text-gray-500 font-normal'>Jana 10 2020</span></p>
                                                <div className='my-2'>
                                                    <AiFillStar className='text-yellow-500 inline-block' />
                                                    <AiFillStar className='text-yellow-500 inline-block' />
                                                    <AiFillStar className='text-yellow-500 inline-block' />
                                                    <AiFillStar className='text-yellow-500 inline-block' />
                                                </div>
                                                <p className='my-2 text-sm text-gray-500'>Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.</p>
                                                <button className='bg-red-500 text-white text-sm py-1 px-4 my-2'>Reply</button>
                                            </div>
                                        </div>
                                        <div className='flex my-10'>
                                            <div>
                                                <Image src={AvatarImg3} width="100px" height="100px" alt="Avatar" className='rounded-full object-cover' />
                                            </div>
                                            <div className='border border-slate-300 p-5 ml-5'>
                                                <p className='text-gray-700 font-semibold my-2'>Will Sagrats <span className='text-sm text-gray-500 font-normal'>Jana 10 2020</span></p>
                                                <div className='my-2'>
                                                    <AiFillStar className='text-yellow-500 inline-block' />
                                                    <AiFillStar className='text-yellow-500 inline-block' />
                                                    <AiFillStar className='text-yellow-500 inline-block' />
                                                    <AiFillStar className='text-yellow-500 inline-block' />
                                                </div>
                                                <p className='my-2 text-sm text-gray-500'>Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor.</p>
                                                <button className='bg-red-500 text-white text-sm py-1 px-4 my-2'>Reply</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='text-gray-700 font-bold text-lg'>Gallery | Photos</h3>
                                    </div>
                                    <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-5 my-5'>
                                        <Image src={PackageImg2} alt="Package" className='rounded-md cursor-pointer' />
                                        <Image src={PackageImg3} alt="Package" className='rounded-md cursor-pointer' />
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                    <div className={`${mount && isTabletOrMobile ? 'col-span-3' : null}`}>
                        <div className='bg-red-500 p-4 text-center my-5'>
                            <h2 className='text-white text-lg font-bold'>$649 / per person</h2>
                            <div>
                                <AiFillStar className='inline-block text-yellow-500' />
                                <AiFillStar className='inline-block text-yellow-500' />
                                <AiFillStar className='inline-block text-yellow-500' />
                                <AiFillStar className='inline-block text-yellow-500' />
                            </div>
                        </div>
                        <div className="bg-slate-100 p-4 text-center my-5 border-2 border-b-blue-500">
                            <input
                                type="text"
                                placeholder='Enter Name'
                                className='w-full p-2 outline-none border border-slate-100 text-sm text-gray-500 my-2'
                            />
                            <input
                                type="text"
                                placeholder='Enter Email'
                                className='w-full p-2 outline-none border border-slate-100 text-sm text-gray-500 my-2'
                            />
                            <input
                                type="text"
                                placeholder='Enter Number'
                                className='w-full p-2 outline-none border border-slate-100 text-sm text-gray-500 my-2'
                            />
                            <button className='my-2 text-white bg-red-500 p-2'>Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PackageDetail