import Image from 'next/image';

import { AiFillStar } from 'react-icons/ai';

function Card({reviewTitle, rating, avatarUrl, userName}) {

    const Icons = ({count}) => (
        Array.from({length: count}).map((_item, index) =>
            <AiFillStar key={index} className='inline-block text-yellow-500'/>
        )
    )

    return (
        <div>
            <h3 className='text-lg font-bold text-gray-700'>{reviewTitle}</h3>
            <div>
                <Icons count={rating} />
            </div>
            <p className='text-gray-500 my-2'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Facilis quam ab consequatur ipsam inventore voluptatum, maiores tempora animi pariatur natus odio quasi cum architecto dolor!
                Officia unde hic sint repellat?
            </p>
            <div className='flex items-center mt-5'>
                <div>
                    <Image src={avatarUrl} alt="Avatar" width="50px" height="50px" className='rounded-full' />
                </div>
                <p className='text-sm font-bold text-gray-500 ml-4'>{userName}</p>
            </div>
        </div>
    )
}

export default Card