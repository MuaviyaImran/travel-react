
import Image from 'next/image';

// Images
import CityImg1 from '../../assets/images/cities/1.jpg';
import CityImg2 from '../../assets/images/cities/2.jpg';
import CityImg3 from '../../assets/images/cities/3.jpg';
import CityImg4 from '../../assets/images/cities/4.jpg';
import CityImg5 from '../../assets/images/cities/5.jpg';

import SectionImg from '../../assets/images/sections/1.png';

import Title from '../../helpers/title/Title';

function Cities() {
    return (
        <section className='py-20 relative'>
            <div className="container mx-auto px-10">
                <Title header="Cities" span="We Offer all of that" />
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className='relative'>
                        <Image src={CityImg1} alt="City" className='rounded-lg' />
                        <div className="absolute top-0 left-0 right-0 bottom-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
                        <div className='absolute bottom-3 right-3'>
                            <h3 className='text-2xl text-white font-bold text-right'>Europe</h3>
                            <p className='text-gray-300'>Starts From 2500$</p>
                        </div>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-8 mb-5">
                            <div className='relative'>
                                <Image src={CityImg2} alt="City" className='rounded-lg' />
                                <div className="absolute top-0 left-0 right-0 bottom-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
                                <div className='absolute bottom-3 right-3'>
                                    <h3 className='text-2xl text-white font-bold text-right'>Dubai</h3>
                                    <p className='text-gray-300'>Starts From 2500$</p>
                                </div>
                            </div>
                            <div className='relative'>
                                <Image src={CityImg3} alt="City" className='rounded-lg' />
                                <div className="absolute top-0 left-0 right-0 bottom-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
                                <div className='absolute bottom-3 right-3'>
                                    <h3 className='text-2xl text-white font-bold text-right'>USA</h3>
                                    <p className='text-gray-300'>Starts From 2500$</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div className='relative'>
                                <Image src={CityImg4} alt="City" className='rounded-lg' />
                                <div className="absolute top-0 left-0 right-0 bottom-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
                                <div className='absolute bottom-3 right-3'>
                                    <h3 className='text-2xl text-white font-bold text-right'>India</h3>
                                    <p className='text-gray-300'>Starts From 2500$</p>
                                </div>
                            </div>
                            <div className='relative'>
                                <Image src={CityImg5} alt="City" className='rounded-lg' />
                                <div className="absolute top-0 left-0 right-0 bottom-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} />
                                <div className='absolute bottom-3 right-3'>
                                    <h3 className='text-2xl text-white font-bold text-right'>London</h3>
                                    <p className='text-gray-300'>Starts From 2500$</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0" style={{ zIndex: '-1' }}>
                <Image src={SectionImg} alt="Section" />
            </div>
        </section>
    )
}

export default Cities