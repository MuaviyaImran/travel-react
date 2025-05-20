import Image from 'next/image';
import { AiFillStar, AiOutlineFacebook, AiOutlineTwitter, AiOutlineGithub } from 'react-icons/ai'

import LogoImg from '../../assets/images/logo.png';

function Footer() {
    return (
        <>
            <footer className='py-10 border-t border-slate-200 text-gray-700'>
                <div className="container mx-auto px-10">
                    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <div className='my-2'>
                                <Image src={LogoImg} alt="Logo" />
                            </div>
                            <p className='text-gray-500'>
                                Our latest news, articles, and resources, we will sent to your inbox weekly.
                            </p>
                            <input type="text" placeholder='Enter you email' className='border border-slate-200 outline-none px-4 py-2 my-4 rounded-lg block' />
                            <span className='font-semibold'>10/10 Overall rating</span>
                            <div className="rate">
                                <AiFillStar className='inline-block text-yellow-500' />
                                <AiFillStar className='inline-block text-yellow-500' />
                                <AiFillStar className='inline-block text-yellow-500' />
                                <AiFillStar className='inline-block text-yellow-500' />
                                <AiFillStar className='inline-block text-yellow-500' />
                            </div>
                        </div>
                        <div>
                            <h3 className='text-lg mb-4 font-bold'>Primary Pages</h3>
                            <ul>
                                <li className='my-2 cursor-pointer'>Home</li>
                                <li className='my-2 cursor-pointer'>About Us</li>
                                <li className='my-2 cursor-pointer'>Services</li>
                                <li className='my-2 cursor-pointer'>Career</li>
                                <li className='my-2 cursor-pointer'>Blog</li>
                                <li className='my-2 cursor-pointer'>Service Single</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-lg mb-4 font-bold'>Secondary Pages</h3>
                            <ul>
                                <li className='my-2 cursor-pointer'>Testimonials</li>
                                <li className='my-2 cursor-pointer'>Carrer</li>
                                <li className='my-2 cursor-pointer'>Latest News</li>
                                <li className='my-2 cursor-pointer'>Contact Us</li>
                                <li className='my-2 cursor-pointer'>Have a Question?</li>
                                <li className='my-2 cursor-pointer'>Places to Visit</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='text-lg mb-4 font-bold'>Another Links</h3>
                            <ul>
                                <li className='my-2 cursor-pointer'>FAQ</li>
                                <li className='my-2 cursor-pointer'>Testimonials</li>
                                <li className='my-2 cursor-pointer'>Trips</li>
                                <li className='my-2 cursor-pointer'>Hotels</li>
                                <li className='my-2 cursor-pointer'>Why Us?</li>
                                <li className='my-2 cursor-pointer'>Lets Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
            <hr />
            <div className='copyRight py-5 text-gray-700'>
                <div className="container mx-auto px-10">
                    <div className="flex justify-between">
                        <p>@ 2022 Quiety Rights Reserved.</p>
                        <div>
                            <div className='inline-block shadow-lg p-2 border border-slate-200 mx-1 cursor-pointer'>
                                <AiOutlineFacebook />
                            </div>
                            <div className='inline-block shadow-lg p-2 border border-slate-200 mx-1 cursor-pointer'>
                                <AiOutlineTwitter />
                            </div>
                            <div className='inline-block shadow-lg p-2 border border-slate-200 mx-1 cursor-pointer'>
                                <AiOutlineGithub />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer