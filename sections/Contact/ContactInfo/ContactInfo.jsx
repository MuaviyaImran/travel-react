import { AiFillMessage, AiFillMail, AiFillPhone } from 'react-icons/ai'
import Title from '../../../helpers/title/Title'

function ContactInfo({backgroundColor}) {
    return (
        <section className={`${backgroundColor} py-10`}>
            <div className="container mx-auto px-10">
                <Title header="Contact US!" span="There's alot of methods for contact" />
                <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className='bg-white hover:shadow-lg cursor-pointer duration-300 border border-slate-200 text-center py-10 rounded-lg'>
                        <div className="iconProvider">
                            <AiFillMessage className='mx-auto text-4xl text-red-600' />
                        </div>
                        <div className="description my-5">
                            <h3 className='text-2xl font-bold my-2'>Chat with us</h3>
                            <p className='text-gray-700 w-3/4 mx-auto my-2'>
                                We have got live Social Experts
                                waiting to help you monday
                                to friday from9am to 5pm EST.
                            </p>
                        </div>
                        <div>
                            <button className='text-red-500 underline'>Contact Now!</button>
                        </div>
                    </div>
                    <div className='bg-white hover:shadow-lg cursor-pointer duration-300 border border-slate-200 text-center py-10 rounded-lg'>
                        <div className="iconProvider">
                            <AiFillMail className='mx-auto text-4xl text-red-600' />
                        </div>
                        <div className="description my-5">
                            <h3 className='text-2xl font-bold my-2'>Email Us</h3>
                            <p className='text-gray-700 w-3/4 mx-auto my-2'>
                                We have got live Social Experts
                                waiting to help you monday
                                to friday from9am to 5pm EST.
                            </p>
                        </div>
                        <div>
                            <button className='text-white bg-red-500 rounded-lg shadow-md py-2 px-8'>Email Us</button>
                        </div>
                    </div>
                    <div className='bg-white hover:shadow-lg cursor-pointer duration-300 border border-slate-200 text-center py-10 rounded-lg'>
                        <div className="iconProvider">
                            <AiFillPhone className='mx-auto text-4xl text-red-600' />
                        </div>
                        <div className="description my-5">
                            <h3 className='text-2xl font-bold my-2'>Give us a call</h3>
                            <p className='text-gray-700 w-3/4 mx-auto my-2'>
                                We have got live Social Experts
                                waiting to help you monday
                                to friday from9am to 5pm EST.
                            </p>
                        </div>
                        <div>
                            <button className='text-red-500 underline'>00-11-22-33</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactInfo