import { Footer, Navbar, Topbar, Breadcrumb, ContactIcons } from "../components"

import { DownloadApp, Cities } from '../sections';

import Head from "next/head";

function index() {
    return (
        <>
            <Head>
                <title>Cities Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Cities" />
            <Cities />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </>
    )
}

export default index