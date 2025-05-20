import React from 'react';

import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGoogle, AiOutlineWhatsApp } from 'react-icons/ai';

function ContactIcons() {

    // Icons Colors:
    const facebookColor = '#4267B2';
    const twitterColor = '#1DA1F2';
    const linkedInColor = '#0E76A8';
    const googleColor = '#dd4b39';
    const whatsAppColor = '#25D366';

    return (
        <section className='fixed top-48 left-0 z-20'>
            <div>
                <div className='text-white p-2 cursor-pointer' title='Facebook' style={{backgroundColor: facebookColor}}>
                    <AiOutlineFacebook/>
                </div>
                <div className='text-white p-2 cursor-pointer' title='Twitter' style={{backgroundColor: twitterColor}}>
                    <AiOutlineTwitter/>
                </div>
                <div className='text-white p-2 cursor-pointer' title='LinkedIn' style={{backgroundColor: linkedInColor}}>
                    <AiOutlineLinkedin/>
                </div>
                <div className='text-white p-2 cursor-pointer' title='Google' style={{backgroundColor: googleColor}}>
                    <AiOutlineGoogle/>
                </div>
                <div className='text-white p-2 cursor-pointer' title='WhatsApp' style={{backgroundColor: whatsAppColor}}>
                    <AiOutlineWhatsApp/>
                </div>
            </div>
        </section>
    )
}

export default ContactIcons