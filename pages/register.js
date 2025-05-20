import { Footer, Navbar, Topbar } from "../components";

import { Register } from '../sections';

import Head from "next/head";

function register() {
    return (
        <div>
            <Head>
                <title>Register Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topbar />
            <Navbar />
            <Register />
            <Footer />
        </div>
    )
}

export default register