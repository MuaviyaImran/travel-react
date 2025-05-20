import { Footer, Navbar, Breadcrumb, Topbar, ContactIcons } from "../components"

import { DownloadApp, Price } from '../sections';

import Head from "next/head";

function index() {
    return (
        <div>
            <Head>
                <title>Price Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Price" />
            <Price />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </div>
    )
}

export default index