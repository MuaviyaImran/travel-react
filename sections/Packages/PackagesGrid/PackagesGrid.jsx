import Card from './Card/Card';

// Images
import PackageImg1 from '../../../assets/images/packages/1.jpg';
import PackageImg2 from '../../../assets/images/packages/2.jpg';
import PackageImg3 from '../../../assets/images/packages/3.jpg';
import PackageImg4 from '../../../assets/images/packages/4.jpg';
import PackageImg5 from '../../../assets/images/packages/5.jpg';
import PackageImg6 from '../../../assets/images/packages/6.jpg';
import Title from '../../../helpers/title/Title';

function PackagesGrid() {
    return (
        <section className='py-20'>
            <div className="container mx-auto px-10">
                <Title header="Our Packages" span="Choose what you prefer!" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card imageUrl={PackageImg1}
                        title="Sunset view of beautiful lakeside resident"
                        review="25"
                        rate={5}
                        price="1900$"
                    />
                    <Card imageUrl={PackageImg2}
                        title="Sunset view of beautiful lakeside resident"
                        review="19"
                        rate={4}
                        price="1800$"
                    />
                    <Card imageUrl={PackageImg3}
                        title="Sunset view of beautiful lakeside resident"
                        review="08"
                        rate={2}
                        price="950$"
                    />
                    <Card imageUrl={PackageImg4}
                        title="Sunset view of beautiful lakeside resident"
                        review="23"
                        rate={3}
                        price="640$"
                    />
                    <Card imageUrl={PackageImg5}
                        title="Sunset view of beautiful lakeside resident"
                        review="32"
                        rate={4}
                        price="1150$"
                    />
                    <Card imageUrl={PackageImg6}
                        title="Sunset view of beautiful lakeside resident"
                        review="25"
                        rate={5}
                        price="915$"
                    />
                </div>
            </div>
        </section>
    )
}

export default PackagesGrid