import Link from 'next/link';

function Topbar() {
    return (
        <nav className='bg-slate-100'>
            <div className="container mx-auto px-10">
                <div className="flex justify-between items-center">
                    <div>
                        <p className='text-xs text-gray-500'>Contact: Lake Road, Suite 180 Farmington Hills, U.S.A.</p>
                    </div>
                    <div>
                        <Link href="/contact">
                            <button className='text-sm text-white bg-red-500 py-1 px-2'>
                                Contact Info
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Topbar