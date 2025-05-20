import { Notfound } from '../sections';

import Head from 'next/head';

function index() {
    return (
        <div>
            <Head>
                <title>Notfound Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Notfound />
        </div>
    )
}

export default index