import Card from './Card/Card';

// Images
import HotelImg1 from '../../assets/images/hotels/1.jpg';
import HotelImg2 from '../../assets/images/hotels/2.jpg';
import HotelImg3 from '../../assets/images/hotels/3.jpg';
import HotelImg4 from '../../assets/images/hotels/4.jpg';

import SectionImg from '../../assets/images/sections/1.png';

import Image from 'next/image';

import Title from '../../helpers/title/Title';

function Hotels() {
    return (
        <section className='py-20 relative'>
            <div className="container mx-auto px-10">
                <Title header="Hotels" span="We Offer all of that" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card imageUrl={HotelImg1} tickets={41} name="Crowne Plaza." city="France" rating={5} price={20} />
                    <Card imageUrl={HotelImg2} tickets={25} name="Emerald Bay Inn" city="Brazil" rating={5} price={18} />
                    <Card imageUrl={HotelImg3} tickets={2} name="Hotel Bliss." city="German" rating={4} price={75} />
                    <Card imageUrl={HotelImg4} tickets={12} name="University Inn." city="Italy" rating={5} price={10} />
                    <Card imageUrl={HotelImg1} tickets={5} name="The New View." city="Roma" rating={4} price={15} />
                    <Card imageUrl={HotelImg4} tickets={65} name="Hotel Elite." city="Egypt" rating={5} price={24} />
                </div>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0" style={{ zIndex: '-1' }}>
                <Image src={SectionImg} alt="Section" />
            </div>
        </section>
    )
}

export default Hotels