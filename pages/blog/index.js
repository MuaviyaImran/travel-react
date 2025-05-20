import { Footer, Navbar, Topbar, Breadcrumb, ContactIcons} from "../../components"

import { DownloadApp, Post } from '../../sections';

function index() {
    return (
        <>
            <Topbar />
            <Navbar />
            <Breadcrumb pageName="Posts" />
            <Post />
            <DownloadApp />
            <Footer />
            <ContactIcons />
        </>
    )
}

export default index