import styles from './header.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

function Header() {
    return (
        <Swiper
            slidesPerView={1}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false
            }}
            modules={[Autoplay]}
        >
            <SwiperSlide>
                <section className={`${styles.headerSlide1} text-center relative z-10`}>
                    <div className="container mx-auto px-10">
                        <div className='pt-24'>
                            <span className='text-white text-2xl font-semibold my-5 uppercase drop-shadow-md'>Do you want to travel today?</span>
                            <h2 className='text-white text-6xl font-bold my-5 uppercase'>Welcome In <span className='text-red-500'>TravelBea</span> <br /> Safe trip with us.</h2>
                            <input
                                type="text"
                                placeholder='Enter your email!'
                                className='py-4 px-4 rounded-3xl w-2/4 outline-none text-sm text-gray-500 my-5 mr-5'
                                required
                            />
                            <button className='py-4 px-8 bg-red-500 rounded-3xl text-white text-sm'>Sign Up</button>
                        </div>
                    </div>
                    <div
                        className="absolute top-0 left-0 right-0 bottom-0"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '-1' }}
                    />
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className={`${styles.headerSlide2} text-center relative z-10`}>
                    <div className="container mx-auto px-10">
                        <div className='pt-24'>
                            <span className='text-white text-2xl font-semibold my-5 uppercase drop-shadow-md'>Travel is really funny!</span>
                            <h2 className='text-white text-6xl font-bold my-5 uppercase'>Welcome In <span className='text-red-500'>TravelBea</span> <br /> Safe trip with us.</h2>
                            <input
                                type="text"
                                placeholder='Enter your email!'
                                className='py-4 px-4 rounded-3xl w-2/4 outline-none text-sm text-gray-500 my-5 mr-5'
                                required
                            />
                            <button className='py-4 px-8 bg-red-500 rounded-3xl text-white text-sm'>Sign Up</button>
                        </div>
                    </div>
                    <div
                        className="absolute top-0 left-0 right-0 bottom-0"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '-1' }}
                    />
                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className={`${styles.headerSlide3} text-center relative z-10`}>
                    <div className="container mx-auto px-10">
                        <div className='pt-24'>
                            <span className='text-white text-2xl font-semibold my-5 uppercase drop-shadow-md'>Everything will done in seconds.</span>
                            <h2 className='text-white text-6xl font-bold my-5 uppercase'>Welcome In <span className='text-red-500'>TravelBea</span> <br /> Safe trip with us.</h2>
                            <input
                                type="text"
                                placeholder='Enter your email!'
                                className='py-4 px-4 rounded-3xl w-2/4 outline-none text-sm text-gray-500 my-5 mr-5'
                                required
                            />
                            <button className='py-4 px-8 bg-red-500 rounded-3xl text-white text-sm'>Sign Up</button>
                        </div>
                    </div>
                    <div
                        className="absolute top-0 left-0 right-0 bottom-0"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '-1' }}
                    />
                </section>
            </SwiperSlide>
        </Swiper>
    )
}

export default Header