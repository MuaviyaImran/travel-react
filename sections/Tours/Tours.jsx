import Card from './Card/Card';

// Images
import TourImg1 from '../../assets/images/tours/1.png';
import TourImg2 from '../../assets/images/tours/2.png';
import TourImg3 from '../../assets/images/tours/3.png';
import TourImg4 from '../../assets/images/tours/4.png';
import TourImg5 from '../../assets/images/tours/5.png';
import TourImg6 from '../../assets/images/tours/6.png';

import SectionImg from '../../assets/images/sections/1.png';

import Image from 'next/image';

import Title from '../../helpers/title/Title';

function Tours() {
    return (
        <section className='py-20 relative'>
            <div className="container mx-auto px-10">
                <Title header="Our Tours" span="We Offer all of that" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card imageUrl={TourImg1} name="Rio De Janeiro" city="Brazil" off="50%" />
                    <Card imageUrl={TourImg2} name="Maui" city="Maui" off="75%" />
                    <Card imageUrl={TourImg3} name="Paris" city="France" />
                    <Card imageUrl={TourImg4} name="New Zealand" city="German" />
                    <Card imageUrl={TourImg5} name="London" city="England" />
                    <Card imageUrl={TourImg6} name="Rome" city="Italy" off="25%" />
                </div>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0" style={{ zIndex: '-1' }}>
                <Image src={SectionImg} alt="Section" />
            </div>
        </section>
    )
}

export default Tours