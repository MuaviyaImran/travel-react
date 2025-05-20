import { Footer, Navbar, Breadcrumb, Topbar, ContactIcons } from "../../../components"

import { DownloadApp, Single } from '../../../sections';

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Post Name" />
            <Single />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </>
    )
}

export default index