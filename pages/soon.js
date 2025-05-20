import { Soon } from '../sections';

import Head from 'next/head';

function index() {
    return (
        <div>
            <Head>
                <title>Soon Page</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Soon />
        </div>
    )
}

export default index