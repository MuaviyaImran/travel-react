import { useEffect } from 'react';
import styles from './loading.module.scss';

function Loading() {

    useEffect(() => {
        let loadingProvider = document.getElementById('loading-provider');
        window.onload = function () {
            setTimeout(() => {
                loadingProvider.classList.add('opacity-0');
                setTimeout(() => {
                    loadingProvider.remove();
                }, 100);
            }, 500)
        };
    }, [])

    return (
        <section className={`${styles.loadingProvider}`} id='loading-provider'>
            <div className={`${styles.loader}`}>Loading...</div>
        </section>
    )
}

export default Loading