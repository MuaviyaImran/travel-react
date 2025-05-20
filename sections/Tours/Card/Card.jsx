import Image from 'next/image';

import {
    BsAlarmFill,
    BsFillCursorFill,
    BsFillCartCheckFill,
    BsFillShareFill
} from 'react-icons/bs';

function Card({ imageUrl, name, city, off = null }) {
    return (
        <div className="bg-white shadow-lg border border-slate-200 rounded-md relative">
            <Image src={imageUrl} alt="Tour" className='rounded-tl-md rounded-tr-md cursor-pointer' />
            <div className="flex justify-between items-center p-4">
                <div>
                    <p className='text-sm text-gray-700 font-bold uppercase'>{name}
                        <span className='text-gray-500 font-normal mx-1'>({city})</span>
                    </p>
                </div>
                <div>
                    <BsAlarmFill className='inline-block text-blue-500 mx-1 cursor-pointer' title='Tour Timing' />
                    <BsFillCursorFill className='inline-block text-green-500 mx-1 cursor-pointer' title='View More Details' />
                    <BsFillCartCheckFill className='inline-block text-yellow-500 mx-1 cursor-pointer' title='Price' />
                    <BsFillShareFill className='inline-block text-red-500 mx-1 cursor-pointer' title='Location' />
                </div>
            </div>
            {
                off !== null ? (
                    <div className='absolute top-0 left-0 bg-green-500 text-white p-2 rounded-br-2xl text-sm'>
                        <span>{off} Off</span>
                    </div>
                ) : null
            }
        </div>
    )
}

export default Card