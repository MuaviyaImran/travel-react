import Card from './Card/Card';

// Images
import PackageImg1 from '../../../assets/images/packages/1.jpg';
import PackageImg2 from '../../../assets/images/packages/2.jpg';
import PackageImg3 from '../../../assets/images/packages/3.jpg';
import PackageImg4 from '../../../assets/images/packages/4.jpg';
import PackageImg5 from '../../../assets/images/packages/5.jpg';
import Title from '../../../helpers/title/Title';

function PackagesSimple() {
    return (
        <section className='py-20 bg-slate-100'>
            <div className="container mx-auto px-10">
                <Title header="Our Packages" span="Choose what you prefer" />
                <Card imageUrl={PackageImg1} name="Family Package 12 Night/13 Days" rating={4} tickets="5" locations={['Rio, Brazil(3 days)', 'Italy (3 Days)', 'London (3 Days)', 'America (3 Days)']} />
                <Card imageUrl={PackageImg2} name="Family Package 25 Night/26 Days" rating={5} tickets="28" locations={['Moroco (3 days)', 'Paris, France (3 Days)', 'London (3 Days)', 'San Fransicso ( 3 Days )']}  />
                <Card imageUrl={PackageImg3} name="Family Package 9 Night/10 Days" rating={3} tickets="15" locations={['Rio, Brazil(3 days)', 'Egypt (3 Days)', 'Italy (3 Days)', 'Indonsia ( 3 Days )']}  />
                <Card imageUrl={PackageImg4} name="Family Package 15 Night/16 Days" rating={5} tickets="18" locations={['Paris, France (3 days)', 'London (3 Days)', 'German (3 Days)', 'Egypt ( 3 Days )']}  />
                <Card imageUrl={PackageImg5} name="Family Package 29 Night/30 Days" rating={5} tickets="24" locations={['London(3 days)', 'Paris (3 Days)', 'New York (3 Days)', 'United Arab Emirates ( 3 Days )']}  />
            </div>
        </section>
    )
}

export default PackagesSimple