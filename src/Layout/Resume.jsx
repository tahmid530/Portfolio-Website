import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";


const Resume = () => {
    return (
        <>
            <div><Navbar></Navbar></div>
            <div className="flex border-t-8 border-[#d09f35] rounded-lg">
                <hr />
                {/* resume side bar */}
                <div className="w-64 min-h-screen bg-[#d09f35] text-black text-lg font-semibold">
                    <ul className="menu p-6">
                        <li>
                            <NavLink to="/resume/experience">
                                <img src="/src/assets/gif icon/experience.gif" alt="" className="h-8 w-8" />
                                My Experience</NavLink>
                        </li>
                        <li>
                            <NavLink to="/education">
                                <img src="/src/assets/gif icon/education.gif" alt="" className="h-8 w-8" />
                                My Education</NavLink>
                        </li>
                        <li>
                            <NavLink to="/resume/skills">
                                <img src="/src/assets/gif icon/skills.gif" alt="" className="h-8 w-8" />
                                My Skills</NavLink>
                        </li>
                    </ul>
                </div>
                {/* resume content */}
                <div className="flex-1 p-8">
                <h3 className="text-5xl font-bold pb-10">Resume</h3>
                    <Outlet></Outlet>
                </div>
            </div>
            <div><Footer></Footer></div>
        </>
    );
};

export default Resume;