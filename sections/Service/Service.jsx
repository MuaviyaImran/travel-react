import Image from 'next/image';

import {
    AiOutlineAppstoreAdd,
    AiOutlineCalculator,
    AiOutlineCodeSandbox,
    AiOutlineDollar,
    AiOutlineDiff, AiOutlineFund
} from 'react-icons/ai';

import SectionImg from '../../assets/images/sections/1.png';

function Service() {
    return (
        <section className='py-20 relative z-10'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className='card hover:shadow-2xl text-center p-8 rounded-lg hover:translate-x-2 transition-all duration-300 ease-in-out'>
                        <div className="my-8 w-20 h-20 mx-auto bg-red-600 shadow-xl text-white text-5xl rounded-full relative">
                            <AiOutlineAppstoreAdd className='mx-auto absolute top-4 left-4' />
                        </div>
                        <h3 className='text-2xl font-bold my-3 text-gray-700'>
                            Strategy & Research
                        </h3>
                        <p className='text-gray-500 text-sm'>
                            Fusce sit amet dui vitae urna tristique imperdiet.
                            Donec eget sapien euismod, faucibus nibh non, consequat elit.
                            Praesent sed vehicula.
                        </p>
                    </div>
                    <div className='card hover:shadow-2xl text-center p-8 rounded-lg hover:translate-x-2 transition-all duration-300 ease-in-out'>
                        <div className="my-8 w-20 h-20 mx-auto bg-yellow-600 shadow-xl text-white text-5xl rounded-full relative">
                            <AiOutlineCalculator className='mx-auto absolute top-4 left-4' />
                        </div>
                        <h3 className='text-2xl font-bold my-3 text-gray-700'>
                            Web Development
                        </h3>
                        <p className='text-gray-500 text-sm'>
                            Fusce sit amet dui vitae urna tristique imperdiet.
                            Donec eget sapien euismod, faucibus nibh non, consequat elit.
                            Praesent sed vehicula.
                        </p>
                    </div>
                    <div className='card hover:shadow-2xl text-center p-8 rounded-lg hover:translate-x-2 transition-all duration-300 ease-in-out'>
                        <div className="my-8 w-20 h-20 mx-auto bg-blue-600 shadow-xl text-white text-5xl rounded-full relative">
                            <AiOutlineCodeSandbox className='mx-auto absolute top-4 left-4' />
                        </div>
                        <h3 className='text-2xl font-bold my-3 text-gray-700'>
                            Web Solution
                        </h3>
                        <p className='text-gray-500 text-sm'>
                            Fusce sit amet dui vitae urna tristique imperdiet.
                            Donec eget sapien euismod, faucibus nibh non, consequat elit.
                            Praesent sed vehicula.
                        </p>
                    </div>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className='card hover:shadow-2xl text-center p-8 rounded-lg hover:translate-x-2 transition-all duration-300 ease-in-out'>
                        <div className="my-8 w-20 h-20 mx-auto bg-green-600 shadow-xl text-white text-5xl rounded-full relative">
                            <AiOutlineDiff className='mx-auto absolute top-4 left-4' />
                        </div>
                        <h3 className='text-2xl font-bold my-3 text-gray-700'>
                            Company Branding
                        </h3>
                        <p className='text-gray-500 text-sm'>
                            Fusce sit amet dui vitae urna tristique imperdiet.
                            Donec eget sapien euismod, faucibus nibh non, consequat elit.
                            Praesent sed vehicula.
                        </p>
                    </div>
                    <div className='card hover:shadow-2xl text-center p-8 rounded-lg hover:translate-x-2 transition-all duration-300 ease-in-out'>
                        <div className="my-8 w-20 h-20 mx-auto bg-orange-600 shadow-xl text-white text-5xl rounded-full relative">
                            <AiOutlineDollar className='mx-auto absolute top-4 left-4' />
                        </div>
                        <h3 className='text-2xl font-bold my-3 text-gray-700'>
                            SEO & Markting
                        </h3>
                        <p className='text-gray-500 text-sm'>
                            Fusce sit amet dui vitae urna tristique imperdiet.
                            Donec eget sapien euismod, faucibus nibh non, consequat elit.
                            Praesent sed vehicula.
                        </p>
                    </div>
                    <div className='card hover:shadow-2xl text-center p-8 rounded-lg hover:translate-x-2 transition-all duration-300 ease-in-out'>
                        <div className="my-8 w-20 h-20 mx-auto bg-red-600 shadow-xl text-white text-5xl rounded-full relative">
                            <AiOutlineFund className='mx-auto absolute top-4 left-4' />
                        </div>
                        <h3 className='text-2xl font-bold my-3 text-gray-700'>
                            24x7 Support
                        </h3>
                        <p className='text-gray-500 text-sm'>
                            Fusce sit amet dui vitae urna tristique imperdiet.
                            Donec eget sapien euismod, faucibus nibh non, consequat elit.
                            Praesent sed vehicula.
                        </p>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0" style={{zIndex: '-1'}}>
                <Image src={SectionImg} alt="Section" />
            </div>
        </section>
    )
}

export default Service