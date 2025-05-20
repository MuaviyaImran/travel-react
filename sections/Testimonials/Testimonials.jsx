import { useMediaQuery } from 'react-responsive';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper';

// Images
import AvatarImg1 from '../../assets/images/avatars/1.jpg';
import AvatarImg2 from '../../assets/images/avatars/2.jpg';
import AvatarImg3 from '../../assets/images/avatars/3.jpg';
import AvatarImg4 from '../../assets/images/avatars/4.jpg';

import Card from './Card/Card';

import Title from '../../helpers/title/Title';

function Testimonials() {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });

    return (
        <section className='py-20'>
            <div className="container mx-auto px-10">
                <Title header="Testimonials" span="We Offer all of that" />
                <Swiper
                    spaceBetween={50}
                    slidesPerView={isTabletOrMobile ? 1 : 2}
                    autoplay={{
                        delay: '2000'
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <Card
                            reviewTitle="Amazing Taste!!!"
                            rating={5}
                            avatarUrl={AvatarImg1}
                            userName="May Hasna"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            reviewTitle="Very Taste"
                            rating={4}
                            avatarUrl={AvatarImg2}
                            userName="John Doe"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            reviewTitle="What that amazing taste?"
                            rating={5}
                            avatarUrl={AvatarImg3}
                            userName="John Doe"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card
                            reviewTitle="Very Recommended"
                            rating={5}
                            avatarUrl={AvatarImg4}
                            userName="John Doe"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    )
}

export default Testimonials