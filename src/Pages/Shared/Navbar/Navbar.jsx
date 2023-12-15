import { Link } from "react-router-dom";


const Navbar = () => {

    const navItems = <>
        <><Link to='/resume' className="hover:text-[#EEA302] py-1 lg:py-0 lg:px-2">Resume</Link></>
        <><Link to='/projects' className="hover:text-[#EEA302] py-1 lg:py-0 lg:border-l-2 lg:border-black lg:px-2">Projects</Link></>
        <><Link to='/contact' className="hover:text-[#EEA302] py-1 lg:py-0 lg:border-l-2 lg:border-black lg:pl-2">Contact</Link></>
    </>

    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <div className="flex gap-3 items-center">
                        <svg preserveAspectRatio="none" data-bbox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="fill-[#EEA302] hidden lg:inline" viewBox="0 0 200 200" role="img" aria-label="Homepage">
                            <g>
                                <path d="M200 100c0 55.228-44.772 100-100 100S0 155.228 0 100 44.772 0 100 0s100 44.772 100 100z"></path>
                            </g>
                        </svg>
                        <Link Link to='/'>
                            <button className="btn btn-ghost text-md lg:text-xl font-extrabold">Abdus Salam Tahmid</button>
                        </Link>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                    </ul>
                </div>
                <div className="navbar-end hidden lg:flex lg:mr-4">
                    {navItems}
                </div>
            </div>
        </>
    );
};

export default Navbar;