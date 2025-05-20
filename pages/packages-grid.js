import { Footer, Navbar, Breadcrumb, Topbar, ContactIcons } from '../components';
import { DownloadApp, PackagesGrid } from '../sections';

import Head from 'next/head';

function index() {
    return (
        <div>
            <Head>
                <title>Packages Grid</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="All Packages Page" />
            <PackagesGrid />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </div>
    )
}

export default index;