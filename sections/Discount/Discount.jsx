import styles from './discount.module.scss';

function Discount() {
    return (
        <section className={`${styles.discount} relative py-28 z-10`}>
            <div className="container mx-auto px-10">
                <div>
                    <span className='block text-lg upper text-white font-semibold'>DISCOUNT OFFER</span>
                    <h2 className='font-bold text-5xl text-white w-2/4 my-5'>GET SPECIAL DISCOUNT ON SIGN UP !</h2>
                    <button className='my-5 bg-red-500 text-white py-2 px-12 rounded-lg'>Sign Up</button>
                </div>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: '-1' }} />
        </section>
    )
}

export default Discount