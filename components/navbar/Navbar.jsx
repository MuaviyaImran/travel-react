// import Image from 'next/image';
import Link from 'next/link';

import { AiOutlineMenu } from 'react-icons/ai';
// import Logo from '../../assets/images/logo.png';

function Navbar() {

    const toggleNav = () => {
        let navbar = document.getElementById('myNavbar');
        navbar.classList.toggle('responsive');
    }

    return (
        <div className="navbar" id="myNavbar">
            {/* <Image src={Logo} alt="Logo" id='logo' /> */}
            <Link href="/">
                <h2 className='text-2xl font-bold cursor-pointer'>Travel<span className='text-red-500 text-3xl'>BEA</span></h2>
            </Link>
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <div className="dropdown">
                    <button className="dropdown-btn">About</button>
                    <div className="dropdown-content">
                        <Link href="/about-1">
                            <a>About 1</a>
                        </Link>
                        <Link href="/about-2">
                            <a>About 2</a>
                        </Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropdown-btn">Pacakges</button>
                    <div className="dropdown-content">
                        <Link href="/packages">
                            <a>All Packages</a>
                        </Link>
                        <Link href="/packages-grid">
                            <a>Packages Grid</a>
                        </Link>
                        <Link href="/packages-simple">
                            <a>Packages Simple</a>
                        </Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropdown-btn">Pages</button>
                    <div className="dropdown-content">
                        <Link href="/tours">
                            <a>Tours</a>
                        </Link>
                        <Link href="/cities">
                            <a>Cities</a>
                        </Link>
                        <Link href="/hotels">
                            <a>Hotels</a>
                        </Link>
                        <Link href="/branding">
                            <a>Branding</a>
                        </Link>
                        <Link href="/faq">
                            <a>Faq</a>
                        </Link>
                        <Link href="/testimonials">
                            <a>Testimonials</a>
                        </Link>
                        <Link href="/price">
                            <a>Pricing</a>
                        </Link>
                        <Link href="/service">
                            <a>Service</a>
                        </Link>
                        <Link href="/soon">
                            <a>Soon</a>
                        </Link>
                        <Link href="/404">
                            <a>Not found</a>
                        </Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropdown-btn">Auth</button>
                    <div className="dropdown-content">
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                        <Link href="/register">
                            <a>Register</a>
                        </Link>
                        <Link href="/forget-password">
                            <a>Forget Password</a>
                        </Link>
                    </div>
                </div>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </div>
            <a href='#' className="icon" onClick={toggleNav}><AiOutlineMenu /></a>
        </div>
    )
}

export default Navbar