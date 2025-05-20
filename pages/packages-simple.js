import { Footer, Navbar, Breadcrumb, Topbar, ContactIcons } from '../components';

import { DownloadApp, PackagesSimple } from '../sections';

import Head from 'next/head';

function index() {
    return (
        <div>
            <Head>
                <title>Packages Simple</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="All Packages Page" />
            <PackagesSimple />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </div>
    )
}

export default index;