import Image from 'next/image';

import { AiFillCheckCircle } from 'react-icons/ai';

import OfferImg from '../../assets/images/gallery/3.jpg';
import OfferImg2 from '../../assets/images/gallery/4.jpg';

function Offer() {
    return (
        <section className='py-20'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-2">
                    <div>
                        <span className='text-red-500 font-bold my-5'>About Us</span>
                        <h3 className='text-gray-700 text-5xl font-bold my-5 w-3/4'>All About our company</h3>
                        <p className='text-gray-500 my-5'>
                            We also know those epic stories,
                            those modern-day legends surrounding
                            the early failures of such supremely successful folks as
                            Michael Jordan and Bill Gates.
                        </p>
                        <div className='my-5'>
                            <div className='flex items-center my-2'>
                                <AiFillCheckCircle className='text-blue-500 mr-2' />
                                <p className='text-gray-500'>Success is something of which we all want more.</p>
                            </div>
                            <div className='flex items-center my-2'>
                                <AiFillCheckCircle className='text-blue-500 mr-2' />
                                <p className='text-gray-500'>Most people believe that success is difficult..</p>
                            </div>
                            <div className='flex items-center my-2'>
                                <AiFillCheckCircle className='text-blue-500 mr-2' />
                                <p className='text-gray-500'>They’re wrong – it’s not!</p>
                            </div>
                            <div className='flex items-center my-2'>
                                <AiFillCheckCircle className='text-blue-500 mr-2' />
                                <p className='text-gray-500'>We blieve our mession</p>
                            </div>
                            <div className='flex items-center my-2'>
                                <AiFillCheckCircle className='text-blue-500 mr-2' />
                                <p className='text-gray-500'>We can change the world to be much better.</p>
                            </div>
                        </div>
                        <div className='my-5'>
                            <button className='bg-red-500 text-white px-4 py-2 rounded-md'>Learn More</button>
                        </div>
                    </div>
                    <div className='relative shadow-lg border border-slate-200 rounded-lg'>
                        <Image src={OfferImg} alt="Offer" className='z-10 rounded-lg' />
                        <div className='absolute bottom-0 right-0 ' >
                            <Image src={OfferImg2} alt="Offer" className='rounded-lg' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offer