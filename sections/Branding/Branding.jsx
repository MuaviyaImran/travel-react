// Images
import PackageImg1 from '../../assets/images/packages/1.jpg';
import PackageImg2 from '../../assets/images/packages/2.jpg';
import PackageImg3 from '../../assets/images/packages/3.jpg';
import PackageImg4 from '../../assets/images/packages/4.jpg';
import PackageImg5 from '../../assets/images/packages/5.jpg';

import HotelImg1 from '../../assets/images/hotels/1.jpg';
import HotelImg2 from '../../assets/images/hotels/2.jpg';
import HotelImg3 from '../../assets/images/hotels/3.jpg';
import HotelImg4 from '../../assets/images/hotels/4.jpg';

import Card from './Card/Card';

import Title from '../../helpers/title/Title';

function Branding() {
    return (
        <section className='py-20'>
            <div className="container mx-auto px-10">
                <Title header="Branding" span="We Offer all of that" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className='bg-white shadow-lg border border-slate-200 pb-5'>
                        <div className="text-center bg-gray-900 text-white p-4 w-full mb-5">
                            <h2 className='text-lg font-bold'>Top Branding <span className='text-red-500'>Hotels</span></h2>
                        </div>
                        <Card imageUrl={HotelImg1} name="Crowne Plaza." rate="5.0" />
                        <Card imageUrl={HotelImg2} name="Emerald Bay Inn." rate="4.9" />
                        <Card imageUrl={HotelImg3} name="Hotel Bliss." rate="4.5" />
                        <Card imageUrl={HotelImg4} name="University Inn." rate="4.4" />
                        <Card imageUrl={HotelImg1} name="The New View." rate="3.9" />
                    </div>
                    <div className='bg-white shadow-lg border border-slate-200 pb-5'>
                        <div className="text-center bg-gray-900 text-white p-4 w-full mb-5">
                            <h2 className='text-lg font-bold'>Top Branding <span className='text-red-500'>Packages</span></h2>
                        </div>
                        <Card imageUrl={PackageImg1} name="France Package" city="illunois, United States" rate="5.0" />
                        <Card imageUrl={PackageImg2} name="London Package" city="illunois, United States" rate="4.9" />
                        <Card imageUrl={PackageImg3} name="Morocco Package" city="illunois, United States" rate="4.8" />
                        <Card imageUrl={PackageImg4} name="Italy Package" city="illunois, United States" rate="3.8" />
                        <Card imageUrl={PackageImg5} name="Paris Pacakge" city="illunois, United States" rate="2.9" />
                    </div>
                    <div className='bg-white shadow-lg border border-slate-200 pb-5'>
                        <div className="text-center bg-gray-900 text-white p-4 w-full mb-5">
                            <h2 className='text-lg font-bold'>Top Branding <span className='text-red-500'>Reviews</span></h2>
                        </div>
                        <Card imageUrl={PackageImg5} name="Taaj Club House" rate="5" displayRaiting={true} />
                        <Card imageUrl={PackageImg1} name="Paris Club House" rate="4" displayRaiting={true} />
                        <Card imageUrl={PackageImg2} name="Morocco Masjed" rate="4" displayRaiting={true} />
                        <Card imageUrl={PackageImg4} name="Italy Club House" rate="3" displayRaiting={true} />
                        <Card imageUrl={PackageImg3} name="Taaj Club House" rate="2" displayRaiting={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Branding