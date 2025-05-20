import { Footer, Navbar, Breadcrumb, Topbar, ContactIcons } from '../components';

import { DownloadApp, PackagesWithFilter } from '../sections';

import Head from 'next/head';

function index() {
    return (
        <div>
            <Head>
                <title>Packages Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="All Packages Page" />
            <PackagesWithFilter />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </div>
    )
}

export default index;