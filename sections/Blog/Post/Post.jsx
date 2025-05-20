import React from 'react';

// Images
import BlogImage1 from '../../../assets/images/blog/1.jpg';
import BlogImage2 from '../../../assets/images/blog/2.jpg';
import BlogImage3 from '../../../assets/images/blog/3.jpg';
import BlogImage4 from '../../../assets/images/blog/4.jpg';
import BlogImage5 from '../../../assets/images/blog/5.jpg';

import Card from './Card/Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';

import { useMediaQuery } from 'react-responsive';

import Title from '../../../helpers/title/Title';

function Post({ backgroundColor }) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 980px)' });

    return (
        <section className={`py-10 ${backgroundColor}`}>
            <div className="container mx-auto px-10">
                <Title header="Latest Posts" span="Be in touch with us" />
                <Swiper
                    spaceBetween={50}
                    slidesPerView={isTabletOrMobile ? 1 : 3}
                    autoplay={{
                        delay: '2000'
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <Card imageUrl={BlogImage1} badge="Muslims" title="Do you want to travel somewhere comfortable?" author="Jane Martin" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card imageUrl={BlogImage2} badge="Arabian" title="We offer you many beautiful places in the world" author="Jane Martin" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card imageUrl={BlogImage3} badge="India" title="We make more than a thousand trips annually" author="Jane Martin" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card imageUrl={BlogImage4} badge="France" title="Don't be afraid, we do everything for you" author="Jane Martin" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card imageUrl={BlogImage5} badge="Landscape" title="Do you really understand the concept of product value?" author="Jane Martin" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Post