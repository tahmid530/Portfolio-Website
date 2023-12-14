import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

const Banner = () => {

    const text2 = <Typewriter
        onInit={(typewriter) => {
            typewriter.typeString('Frontend Web Developer.')
                .callFunction(() => {
                    console.log('String typed out!');
                })
                .pauseFor(2500)
                // .deleteAll()
                .callFunction(() => {
                    console.log('All strings were deleted');
                })
                .start();
        }}
    />

    return (
        <>
            <div className="bg-transparent flex flex-1 items-center justify-evenly py-52">
                <div>
                    <h3 className="text-3xl font-semibold">
                        Hi, I'm <span className="text-4xl text-yellow-700 font-bold">Tahmid</span>, a results-driven <span className="text-5xl text-yellow-700 font-bold">{text2}</span>
                    </h3>
                    <p className='text-xl my-12'>
                        I specialize in crafting dynamic web applications that captivate and engage users. Let's turn your vision into a pixel-perfect reality.
                        <br />Explore my portfolio and let's build something extraordinary together!
                    </p>
                    <div className='flex gap-6'>
                        <Link to='/resume'><button className="btn btn-outline rounded-full h-40 w-40 text-xl bg-[#EEA302] hover:bg-white hover:text-black border-2">Resume</button></Link>
                        <Link to='/projects'><button className="btn btn-outline rounded-full h-40 w-40 text-xl bg-[#FF3B25] hover:bg-white hover:text-black border-2">Projects</button></Link>
                        <Link to='/contact'><button className="btn btn-outline rounded-full h-40 w-40 text-xl bg-[#80D8DA] hover:bg-white hover:text-black border-2">Contact</button></Link>
                    </div>
                </div>
                <div  data-aos="zoom-in-left">
                    <img src="https://i.ibb.co/Zh8wG87/my-professional-photo.png" alt="" className="rounded-full h-[500px] w-[500px]" />
                </div>
            </div>
            <div className='border-b-1 border-black'>
                <hr />
            </div>
        </>
    );
};

export default Banner;