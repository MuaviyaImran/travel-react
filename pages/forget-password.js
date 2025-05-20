import { Footer, Navbar, Topbar } from "../components";
import { ForgetPassword } from '../sections';

import Head from "next/head";

function index() {
    return (
        <div>
            <Head>
                <title>Forget Password Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topbar />
            <Navbar />
            <ForgetPassword />
            <Footer />
        </div>
    )
}

export default index