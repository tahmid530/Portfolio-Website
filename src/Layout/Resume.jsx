import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import Intro from "../Pages/Resume/Intro/Intro";


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
                                <img src="https://i.ibb.co/VgGNkCg/experience.gif" alt="" className="h-8 w-8" />
                                My Experience</NavLink>
                        </li>
                        <li>
                            <NavLink to="/resume/education">
                                <img src="https://i.ibb.co/L5QtbSF/education.gif" alt="" className="h-8 w-8" />
                                My Education</NavLink>
                        </li>
                        <li>
                            <NavLink to="/resume/skills">
                                <img src="https://i.ibb.co/CpcFjtN/skills.gif" alt="" className="h-8 w-8" />
                                My Skills</NavLink>
                        </li>
                        <li>
                            <NavLink to="/resume/download">
                                <img src="https://i.ibb.co/sgKvkcB/download-1.gif" alt="" className="h-8 w-8" />
                                Download Resume</NavLink>
                        </li>
                    </ul>
                </div>
                {/* resume content */}
                <div className="flex-1 p-8">
                    <Intro></Intro>
                    <Outlet></Outlet>
                </div>
            </div>
            <div className="mt-1">
                <hr />
            </div>
            <div><Footer></Footer></div>
        </>
    );
};

export default Resume;