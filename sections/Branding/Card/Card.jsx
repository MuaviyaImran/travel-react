import Image from "next/image";

import { AiFillStar } from 'react-icons/ai';

function Card({ imageUrl, name, city = null, rate, displayRaiting = false }) {

    const Icons = ({ count }) => (
        Array.from({ length: count }).map((_item, index) =>
            <AiFillStar key={index} className='inline-block text-yellow-500' />
        )
    )

    return (
        <div className="flex justify-between items-center px-4 py-2">
            <div className='w-1/4'>
                <Image src={imageUrl} alt="Package" className='rounded-md' />
            </div>
            <div>
                <h3 className='text-lg font-bold text-gray-700'>{name}</h3>
                {
                    city === null && displayRaiting ? (
                        <Icons count={rate} />
                    ) : (
                        <span className='text-sm text-gray-500'>City: {city ? city : 'illunois, United States'}</span>
                    )
                }
            </div>
            <div>
                <h3 className='p-2 border border-slate-300 font-bold text-gray-700'>{rate}</h3>
            </div>
        </div>
    )
}

export default Card