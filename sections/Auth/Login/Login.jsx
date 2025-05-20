import Image from 'next/image';

import SectionImg from '../../../assets/images/sections/1.png';

function Login() {
    return (
        <section className='py-20 relative'>
            <div className="container mx-auto px-10">
                <div className="bg-white shadow-lg px-8 py-16 lg:w-2/4 md:w-3/4 mx-auto border border-slate-200">
                    <div className="text-center">
                        <h3 className='font-bold my-2 text-3xl text-gray-700'>Sign In</h3>
                        <p className='text-sm text-gray-500'>It's free and always will be.</p>
                    </div>
                    <input type="text" placeholder='Your Email' className='block mx-auto p-2 outline-none border border-slate-100 my-5 w-full' />
                    <input type="password" placeholder='Your Password' className='block mx-auto p-2 outline-none border border-slate-100 my-5 w-full' />
                    <button className='py-2 px-8 border border-red-500 text-red-500 w-full hover:bg-red-500 hover:text-white duration-300'>Login</button>
                </div>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0" style={{zIndex: '-1'}}>
                <Image src={SectionImg} alt="Section" />
            </div>
        </section>
    )
}

export default Login