import { Footer, Navbar, Topbar } from "../components";

import { Login } from '../sections';

import Head from 'next/head';

function index() {
    return (
        <div>
            <Head>
                <title>Login Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Topbar />
            <Navbar />
            <Login />
            <Footer />
        </div>
    )
}

export default index