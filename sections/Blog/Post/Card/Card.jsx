import Image from 'next/image'

function Card({imageUrl, badge, title, author}) {
    return (
        <div className='bg-white border border-slate-200 cursor-pointer rounded-lg hover:shadow-lg duration-300'>
            <div className="imageProvider">
                <Image src={imageUrl} alt="Blog" className='rounded-lg opacity-90 hover:opacity-100 duration-300 object-cover' />
            </div>
            <div className="px-4 my-4">
                <span className='bg-red-100 text-gray-700 py-1 px-2 rounded-md text-xs font-semibold'>{badge}</span>
            </div>
            <div className="px-4 my-4">
                <h3 className='text-lg font-bold text-gray-700 my-2'>{title}</h3>
                <p className='text-sm text-gray-500'>
                    Pociety is fragmenting into two parallel realities. In one reality, you
                </p>
            </div>
            <div className="px-4 my-4">
                <div className="description">
                    <h4 className='font-semibold'>{author}</h4>
                    <span className='text-sm text-gray-500'>April 24, 2021</span>
                </div>
            </div>
        </div>
    )
}

export default Card