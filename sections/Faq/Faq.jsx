import React from 'react';

import questions from './data';

import { AiFillCaretDown } from 'react-icons/ai';

function Faq() {

    const toggleQuestion = (i) => {

        const questionBody = document.getElementById(i);

        if (questionBody.classList.contains('hidden')) {   
            questionBody.classList.remove('hidden');
        } else {
            questionBody.classList.add('hidden');
        }
    }

    return (
        <section className='py-20'>
            <div className="container mx-auto px-10">
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                        <span className='text-lg font-bold uppercase text-red-500'>Any Question?</span>
                        <h2 className='uppercase text-5xl font-bold text-gray-700 my-5'>FREQUENTLY ASKED QUESTIONS</h2>
                        <p className='text-gray-500 text-sm'>
                            Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Esse? Aut nostrum,
                            ornare quas provident laoreet nesciunt odio voluptates etiam, omnis.
                        </p>
                        {/* Questions */}
                        {
                            questions.map((question, i) => (
                                <div className='my-5' key={i}>
                                    <div className="flex items-center justify-between my-2 shadow-lg p-4 cursor-pointer" onClick={() => toggleQuestion(i)}>
                                        <h3 className='text-gray-700 font-bold'>{question.title}</h3>
                                        <AiFillCaretDown className='text-gray-700' />
                                    </div>
                                    <div className='p-4 my-2 shadow-lg hidden duration-300' id={i}>
                                        <p className='text-sm text-gray-500'>
                                            {question.answer}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='bg-white shadow-lg p-8 border border-slate-200' style={{height: '400px'}}>
                        <h3 className='uppercase text-lg font-bold text-center text-gray-700 my-5'>Still have a question?</h3>
                        <div>
                            <input type="text" placeholder='Enter Name' className='block w-full py-2 px-2 border border-slate-200 my-5 outline-none text-sm text-gray-500' />
                            <input type="text" placeholder='Enter Email' className='block w-full py-2 px-2 border border-slate-200 my-5 outline-none text-sm text-gray-500' />
                            <input type="text" placeholder='Enter Phone' className='block w-full py-2 px-2 border border-slate-200 my-5 outline-none text-sm text-gray-500' />
                            <input type="text" placeholder='Your Question!' className='block w-full py-2 px-2 border border-slate-200 my-5 outline-none text-sm text-gray-500' />
                            <button className='py-2 px-2 bg-red-500 text-white'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}



export default Faq