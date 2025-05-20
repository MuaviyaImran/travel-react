import styles from './soon.module.scss';

import {
    AiFillFacebook,
    AiFillTwitterCircle,
    AiFillInstagram,
    AiFillGoogleCircle
} from 'react-icons/ai';

function Soon() {
    return (
        <section className={`${styles.soon} text-center relative z-10`}>
            <div className="container mx-auto px-10">
                <div className='pt-40'>
                    <span className='text-white text-2xl font-semibold my-5 uppercase drop-shadow-md'>We Are Coming Soon !</span>
                    <h2 className='text-white text-6xl font-bold my-5'>GET NOTIFIED WHEN <br /> SITE GOES LIVE.</h2>
                    <input
                        type="text"
                        placeholder='Enter your email!'
                        className='py-4 px-4 rounded-3xl w-2/4 outline-none text-sm text-gray-500 my-5 mr-5'
                        required
                    />
                    <button className='py-4 px-8 bg-red-500 rounded-3xl text-white text-sm'>Sign Up</button>
                    <div className='my-5'>
                        <div className='inline-block p-1 bg-red-500 mr-2 cursor-pointer text-white rounded-sm'>
                            <AiFillFacebook className='mx-auto inline-block text-lg' />
                        </div>
                        <div className='inline-block p-1 bg-red-500 mr-2 cursor-pointer text-white rounded-sm'>
                            <AiFillTwitterCircle className='mx-auto inline-block text-lg' />
                        </div>
                        <div className='inline-block p-1 bg-red-500 mr-2 cursor-pointer text-white rounded-sm'>
                            <AiFillInstagram className='mx-auto inline-block text-lg' />
                        </div>
                        <div className='inline-block p-1 bg-red-500 mr-2 cursor-pointer text-white rounded-sm'>
                            <AiFillGoogleCircle className='mx-auto inline-block text-lg' />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="absolute top-0 left-0 right-0 bottom-0"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '-1' }}
            />
        </section>
    )
}

export default Soon