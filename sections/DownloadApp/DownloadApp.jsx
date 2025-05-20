import Image from 'next/image';

import GooglePlay from '../../assets/images/download/1.svg';
import AppStore from '../../assets/images/download/2.svg';

import PhonesImage from '../../assets/images/download/mobile.png';

import SectionImg from '../../assets/images/sections/1.png';

function DownloadApp({ backgroundColor }) {
    return (
        <section className={`py-20 relative ${backgroundColor}`}>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <h2 className='text-6xl font-bold text-gray-700 drop-shadow-md my-8'>Download our mobile app.</h2>
                        <p className='text-gray-500 my-8 w-3/4'>
                            Consectetur numquam poro nemo veniam
                            eligendi rem adipisci quo modi,
                            eligendi rem adipisci quo modi,
                            Consectetur numquam poro nemo veniam
                            eligendi rem adipisci quo modi,
                            eligendi rem adipisci quo modi.
                        </p>
                        <div>
                            <Image src={GooglePlay} alt="Google Play" className='inline-block mr-5 cursor-pointer' />
                            <Image src={AppStore} alt="Google Play" className='inline-block mr-5 cursor-pointer' />
                        </div>
                    </div>
                    <div>
                        <Image src={PhonesImage} alt="Phone" />
                    </div>
                </div>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0" style={{zIndex: '-1'}}>
                <Image src={SectionImg} alt="Section" />
            </div>
        </section>
    )
}

export default DownloadApp