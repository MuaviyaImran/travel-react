import Image from 'next/image';

import { AiFillStar, AiFillFlag, AiFillCheckCircle } from 'react-icons/ai';

function Card({ imageUrl, name, rating, tickets, locations = [] }) {

    const Icons = ({ count }) => (
        Array.from({ length: count }).map((_item, index) =>
            <AiFillStar key={index} className='inline-block text-yellow-500' />
        )
    )

    return (
        <div className='bg-white shadow-lg px-5 py-10'>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                    <Image src={imageUrl} alt="Package" className='rounded-sm' />
                </div>
                <div>
                    <h3 className='text-2xl font-bold text-gray-700'>{name}</h3>
                    <div>
                        <Icons count={rating} />
                    </div>
                    <p className='my-5 text-gray-500 text-sm'>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer.
                    </p>
                    <div className='flex my-4'>
                        <div className='bg-green-500 text-white mr-2 px-2 text-sm'>
                            Available Tickets : {tickets}
                        </div>
                        <div className='bg-slate-200 text-gray-700 font-semibold mr-2 px-2 text-sm'>
                            Start Date : 12.01.2015
                        </div>
                        <div className='bg-slate-200 text-gray-700 font-semibold mr-2 px-2 text-sm'>
                            Ends Date : 12.01.2016
                        </div>
                    </div>
                    <div className='flex items-center my-4'>
                        <div className='mr-2 bg-green-500 p-1 text-white'>
                            <AiFillFlag />
                        </div>
                        <div>
                            <h3 className='text-gray-700 font-bold text-lg'>Package Locations</h3>
                        </div>
                    </div>
                    <div>
                        {
                            locations.map(location => (
                                <div className="inline-flex items-center mr-2">
                                    <AiFillCheckCircle className='mr-1 text-blue-500' />
                                    <p className='text-gray-700 font-semibold'>{location}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className='my-2'>
                        <button className='bg-red-500 text-white mr-2 py-1 px-2 rounded-sm text-sm'>Book Now</button>
                        <button className='bg-orange-500 text-white mr-2 py-1 px-2 rounded-sm text-sm'>View Package</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card