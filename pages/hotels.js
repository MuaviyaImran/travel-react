import { Footer, Navbar, Topbar, Breadcrumb, ContactIcons } from "../components";

import { DownloadApp, Hotels } from '../sections';

import Head from "next/head";

function index() {
    return (
        <div>
            <Head>
                <title>Hotels Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Hotels" />
            <Hotels />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </div>
    )
}

export default index;