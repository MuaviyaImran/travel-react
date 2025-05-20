import { Footer, Navbar, Breadcrumb, Topbar, ContactIcons } from "../components"

import { DownloadApp, Tours } from '../sections';

import Head from "next/head";

function index() {
    return (
        <div>
            <Head>
                <title>Tours Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Tours" />
            <Tours />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </div>
    )
}

export default index