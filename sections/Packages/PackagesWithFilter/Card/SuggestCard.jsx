import Image from "next/image"

function SuggestCard({imageUrl, name, rate}) {
    return (
        <div className="flex justify-between items-center py-4 border-b border-slate-200">
            <div className="w-1/4">
                <Image src={imageUrl} alt="Package" className='rounded-md cursor-pointer' />
            </div>
            <div className="text">
                <h5 className='font-semibold text-gray-700'>{name}</h5>
                <p className='text-xs text-gray-500'>Bali is a living postcard</p>
            </div>
            <div className="rate">
                <h3 className='border border-slate-200 p-1 text-gray-700 font-bold cursor-pointer'>{rate}</h3>
            </div>
        </div>
    )
}

export default SuggestCard