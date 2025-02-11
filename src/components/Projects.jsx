import { styles } from '../styles'
import {fadeIn, textVariant} from "../utils/motion.js";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import img1 from '../assets/kaiju/kaiju-1.png'
import img2 from '../assets/kaiju/kaiju-2.png'
import img3 from '../assets/kaiju/kaiju-3.png'
import img4 from '../assets/wisney/wisney-1.png'
import img5 from '../assets/wisney/wisney-2.png'
import img6 from '../assets/wisney/wisney-3.png'
import img7 from '../assets/recipe-app/rfd-1.png'
import img8 from '../assets/recipe-app/rfd-2.png'
import img9 from '../assets/find-a-friend/faf-1.png'
import img10 from '../assets/find-a-friend/faf-2.png'
import githubLogo from '../assets/github-mark-white.png'

const Projects = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentWisneyImageIndex, setCurrentWisneyImageIndex] = useState(0);
    const [currentRFDImageIndex, setCurrentRFDImageIndex] = useState(0);
    const [currentFAFImageIndex, setCurrentFAFImageIndex] = useState(0);
    const images = [img1, img2, img3]
    const wisneyImages = [img4, img5, img6]
    const rfdImages = [img7, img8]
    const fafImages = [img9, img10]
    const [isHovered, setIsHovered] = useState(false);
    const [isWisneyHovered, setIsWisneyHovered] = useState(false);
    const [isRFDHovered, setIsRFDHovered] = useState(false);
    const [isFAFHovered, setIsFAFHovered] = useState(false);



    useEffect(() => {
        let interval;
        if (isHovered) {
            interval = setInterval(() => {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
            }, 1500);
        } else {
            setCurrentImageIndex(0);
        }
        return () => clearInterval(interval);
    }, [isHovered, images.length]);

    useEffect(() => {
        let wisneyInterval;
        if (isWisneyHovered) {
            wisneyInterval = setInterval(() => {
                setCurrentWisneyImageIndex(prevIndex => (prevIndex + 1) % wisneyImages.length);
            }, 1500);
        } else {
            setCurrentWisneyImageIndex(0);
        }
        return () => clearInterval(wisneyInterval);
    }, [isWisneyHovered, wisneyImages.length]);

    useEffect(() => {
        let rfdInterval;
        if (isRFDHovered) {
            rfdInterval = setInterval(() => {
                setCurrentRFDImageIndex(prevIndex => (prevIndex + 1) % rfdImages.length);
            }, 1500);
        } else {
            setCurrentRFDImageIndex(0);
        }
        return () => clearInterval(rfdInterval);
    }, [isRFDHovered, rfdImages.length]);

    useEffect(() => {
        let fafInterval;
        if (isFAFHovered) {
            fafInterval = setInterval(() => {
                setCurrentFAFImageIndex(prevIndex => (prevIndex + 1) % fafImages.length);
            }, 1500)
        }
        return () => clearInterval(fafInterval);
    }, [isFAFHovered, fafImages.length]);

    return (
        <div id='recent projects' className='mt-5 py-5 px-[4rem]'>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Recent works</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>
            <div className="w-full flex">
                <motion.p variants={fadeIn("", "", 0.1, 1)}
                          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                    Following projects showcases my skills with real world examples of my work. 
                    Click on each project to view live demos. Enjoy!
                </motion.p>
            </div>
            <div className="w-full h-1/2 flex justify-center pt-5 gap-10 flex-wrap">
                <div className="flex flex-col justify-center items-center relative">
                    <div className="flex sm:w-3/4 w-[90vw]">
                        <a className="inline-block w-1/5" href={'https://github.com/Mccaryr/kaiju'} target="_blank"
                           rel="noopener noreferrer">
                            <img className="sm:w-[20%] w-[60%]" src={githubLogo} alt="Github link"/>
                        </a>
                        <p className="content-center sm:text-[16px] text-[11px]">Tech Stack: React | Tailwind | Spring |
                            Postgres | AWS Lambda</p>
                    </div>
                    <img
                        src={images[currentImageIndex]}
                        alt={'Kaiju Project'}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className='md:w-3/4 cursor-pointer rounded-2xl w-full'
                        onClick={() => window.open("https://kaiju-mke1.onrender.com/", '_blank')}
                    />
                    <div
                        className="bg-gray-800 absolute bottom-0 w-[75%] h-[15%] opacity-80 sm:flex p-8 rounded-b-2xl gap-8 hidden">
                        <h2 className="text-white font-extrabold md:text-xl text-lg">Kaiju</h2>
                        <p className="text white">Task Management app. React front-end, Spring Boot back-end, Postgres
                            database</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center relative">
                    <div className="flex sm:w-3/4 w-[90vw]">
                        <a className='inline-block w-1/5' href={'https://github.com/Mccaryr/dalt-wisney-ecommerce'}
                           target="_blank"
                           rel="noopener noreferrer">
                            <img className='sm:w-[20%] w-[60%]' src={githubLogo} alt="Github link"/>
                        </a>
                        <p className="content-center sm:text-[16px] text-[11px]">Tech Stack: React | Redux | Node.js |
                            NoSQL</p>
                    </div>
                    <img
                        src={wisneyImages[currentWisneyImageIndex]}
                        alt={'Wisney Project'}
                        onMouseEnter={() => {
                            setIsWisneyHovered(true)
                        }}
                        onMouseLeave={() => setIsWisneyHovered(false)}
                        className='md:w-3/4 cursor-pointer rounded-2xl w-full'
                        onClick={() => window.open("https://dalt-wisney-ecommerce.onrender.com/", '_blank')}
                    />
                    <div
                        className="bg-gray-800 absolute bottom-0 w-[75%] h-[15%] opacity-80 sm:flex p-8 rounded-b-2xl gap-8 hidden">
                        <h2 className="text-white font-extrabold md:text-xl text-lg">Dalt Wisney</h2>
                        <p className="text white">E-commerce app. React front-end, Node.js back-end, NoSQL
                            database</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center relative">
                    <div className="flex sm:w-3/4 w-[90vw]">
                        <a className='inline-block w-1/5' href="https://github.com/Mccaryr/recipe-for-disaster"
                           target="_blank" rel="noopener noreferrer">
                            <img className='sm:w-[20%] w-[60%]' src={githubLogo} alt="Github link"/>
                        </a>
                        <p className="content-center sm:text-[16px] text-[11px]">Tech Stack: Next | Tailwind |
                            Postgres</p>
                    </div>

                    <img
                        src={rfdImages[currentRFDImageIndex]}
                        alt={'Recipe for Disaster Project'}
                        onMouseEnter={() => {
                            setIsRFDHovered(true)
                        }}
                        onMouseLeave={() => setIsRFDHovered(false)}
                        className='md:w-3/4 cursor-pointer rounded-2xl w-full'
                        onClick={() => window.open("https://recipe-for-disaster-liart.vercel.app/", '_blank')}
                    />
                    <div
                        className="bg-gray-800 absolute bottom-0 w-[75%] h-[15%] opacity-80 sm:flex p-8 rounded-b-2xl gap-8 hidden">
                        <h2 className="text-white font-extrabold md:text-xl text-md">Recipe for Disaster</h2>
                        <p className="text white">Recipe app. Next.js for SSR, Tailwind for styling, Postgres
                            database</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center relative">
                    <div className="flex sm:w-3/4 w-[90vw]">
                        <a className='inline-block w-1/5' href="https://github.com/Mccaryr/fetch-a-friend"
                           target="_blank" rel="noopener noreferrer">
                            <img className='sm:w-[20%] w-[60%]' src={githubLogo} alt="Github link"/>
                        </a>
                        <p className="content-center sm:text-[16px] text-[11px]">Tech Stack: React | SCSS |
                            Jest</p>
                    </div>

                    <img
                        src={fafImages[currentFAFImageIndex]}
                        alt={'Fetch A Friend'}
                        onMouseEnter={() => {
                            setIsFAFHovered(true)
                        }}
                        onMouseLeave={() => setIsFAFHovered(false)}
                        className='md:w-3/4 cursor-pointer rounded-2xl w-full'
                        onClick={() => window.open("https://fetch-a-friend-eight.vercel.app/", '_blank')}
                    />
                    <div
                        className="bg-gray-800 absolute bottom-0 w-[75%] h-[15%] opacity-80 sm:flex p-8 rounded-b-2xl gap-8 hidden">
                        <h2 className="text-white font-extrabold md:text-xl text-md">Fetch A Friend</h2>
                        <p className="text white">Dog Adoption site that has pagination, advanced filtering, and robust testing</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Projects
