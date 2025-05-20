import React from 'react'
import { ContactIcons, Footer, Navbar, Topbar } from '../components';
import { Breadcrumb, ContactForm, Offer, Post } from '../sections';

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="About Us" />
            <Offer />
            <ContactForm />
            <Post />
            <Footer />
            <ContactIcons />
        </>
    )
}

export default index;