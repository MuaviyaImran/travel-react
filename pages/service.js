import { Footer, Navbar, Breadcrumb, Topbar, ContactIcons } from "../components"

import { DownloadApp, Service } from '../sections';

import Head from "next/head";

function index() {
    return (
        <div>
            <Head>
                <title>Service Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Contact" />
            <Service />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </div>
    )
}

export default index