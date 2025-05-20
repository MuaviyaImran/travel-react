import Image from 'next/image';

import { AiFillStar, AiFillCaretRight, AiOutlineHeart} from 'react-icons/ai';

function Card({imageUrl, title, review, rate, price}) {

    const Icons = ({count}) => (
        Array.from({length: count}).map((_item, index) =>
            <AiFillStar key={index} className='inline-block text-yellow-500'/>
        )
    )

    return (
        <div className='bg-white shadow-lg relative'>
            <div>
                <Image src={imageUrl} alt="Package" />
            </div>
            <div className='p-8'>
                <h3 className='text-gray-700 text-2xl font-bold mb-2'>{title}</h3>
                <div>
                    <span className='text-gray-500 text-sm mr-2'>({review} reviews)</span>
                    <Icons count={rate} />
                </div>
                <p className='my-5 text-gray-500'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam.
                    Ut elit tellus, luctus nec ullam elit tellpus.
                </p>
                <hr className='my-5' />
                <div className='flex justify-between'>
                    <button className='p-2 text-xs bg-green-500 text-white'>
                        Book Now
                        <AiFillCaretRight className='inline-block ml-2' />
                    </button>
                    <button className='p-2 text-xs bg-red-500 text-white'>
                        Wish List
                        <AiOutlineHeart className='inline-block ml-2' />
                    </button>
                </div>
            </div>
            <div className="absolute top-0 right-0 bg-red-500 text-white p-1 font-semibold text-sm rounded-bl-lg">
                <p>{price} / per person</p>
            </div>
        </div>
    )
}

export default Card