import { Footer, Navbar, Topbar, Breadcrumb, ContactIcons } from "../components"

import { DownloadApp, ContactInfo, ContactForm } from '../sections';

import Head from "next/head";

function index() {
    return (
        <div>
            <Head>
                <title>Contact Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Contact" />
            <ContactInfo />
            <ContactForm />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </div>
    )
}

export default index