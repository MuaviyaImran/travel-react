import React from 'react'
import { ContactIcons, Footer, Navbar, Topbar } from '../components';
import { Breadcrumb, News, Offer, Testimonials, Tours } from '../sections';

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="About Us" />
            <Offer />
            <Tours />
            <Testimonials />
            <News />
            <Footer />
            <ContactIcons />
        </>
    )
}

export default index;