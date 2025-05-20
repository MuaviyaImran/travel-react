import Image from 'next/image';

import { AiFillStar } from 'react-icons/ai';

function Card({ imageUrl, tickets, name, city, rating, price }) {

    const Icons = ({count}) => (
        Array.from({length: count}).map((_item, index) =>
            <AiFillStar key={index} className='inline-block text-yellow-500'/>
        )
    )

    return (
        <div className='relative bg-white shadow-2xl rounded-md'>
            <div className='relative'>
                <Image src={imageUrl} alt="Hotel" className='rounded-tr-md rounded-tl-md' />
                <div className="top-0 left-0 bottom-0 right-0 absolute" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }} />
                <div className='absolute bottom-2 right-2 bg-green-500 px-2 text-white rounded-lg text-sm'>
                    <p>Available Tickets: {tickets}</p>
                </div>
            </div>
            <div className='p-4'>
                <h3 className='text-lg font-semibold text-gray-700 my-1'>{name}</h3>
                <p className='text-sm text-gray-500 my-1'>City: {city}</p>
                <div className='text-sm text-gray-500 my-1'>
                    <span className='mr-2'>Rating:</span>
                    <Icons count={rating} />
                </div>
            </div>
            <div className='absolute bottom-5 right-5'>
                <h2 className='text-2xl font-bold text-green-500'>${price}</h2>
            </div>
        </div>
    )
}

export default Card