import Image from 'next/image';
import Link from 'next/link';

import NotfoundImg from '../../assets/svg/404/4.svg';

function Notfound() {
    return (
        <section className='bg-gray-700 relative'>
            <Image
                src={NotfoundImg} alt="Notfound"
                style={{ height: '100vh'}}
            />
            <div className='absolute bottom-5 left-5'>
                <Link href='/'>
                    <button className='bg-red-500 text-white p-2 mx-auto text-center'>
                        Back to Home
                    </button>
                </Link>
            </div>
        </section>
    )
}

export default Notfound