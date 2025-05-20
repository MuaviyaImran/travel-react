import styles from './bread-crumb.module.scss';

import { useMediaQuery } from 'react-responsive';

import { AiFillCaretRight } from 'react-icons/ai';

function Breadcrumb({pageName, header = 'Best Journey To Peaceful Places'}) {

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' });

    return (
        <div className={`${styles.breadCrumb} relative z-10`}>
            <div className="container mx-auto px-10">
                <h2 className={`${isTabletOrMobile ? 'text-4xl pt-28' : 'text-5xl pt-32'} text-white font-bold w-2/4 uppercase`}>
                    {header}
                </h2>
                <div className='my-2 text-white font-bold'>
                    <span className='inline-block'>Home</span>
                    <AiFillCaretRight className='inline-block' />
                    <span className='inline-block text-red-500'>{pageName}</span>
                </div>
            </div>
            <div
                className="absolute top-0 left-0 right-0 bottom-0"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: '-1' }}
            />
        </div>
    )
}

export default Breadcrumb