import { styles } from '../styles'
import {fadeIn, textVariant} from "../utils/motion.js";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import img1 from '../assets/kaiju-1.png'
import img2 from '../assets/kaiju-2.png'
import img3 from '../assets/kaiju-3.png'
import img4 from '../assets/wisney-1.png'
import img5 from '../assets/wisney-2.png'
import img6 from '../assets/wisney-3.png'
import img7 from '../assets/recipe-app/rfd-1.png'
import img8 from '../assets/recipe-app/rfd-2.png'

const Projects = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentWisneyImageIndex, setCurrentWisneyImageIndex] = useState(0);
    const [currentRFDImageIndex, setCurrentRFDImageIndex] = useState(0);
    const images = [img1, img2, img3]
    const wisneyImages = [img4, img5, img6]
    const rfdImages = [img7, img8]
    const [isHovered, setIsHovered] = useState(false);
    const [isWisneyHovered, setIsWisneyHovered] = useState(false);
    const [isRFDHovered, setIsRFDHovered] = useState(false);



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
    }, [isRFDHovered, wisneyImages.length]);

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
                <div className="flex flex-col justify-center items-center">
                    <a href={'https://github.com/Mccaryr/kaiju'} target="_blank" rel="noopener noreferrer">Github
                        repo</a>
                    <img
                        src={images[currentImageIndex]}
                        alt={'Kaiju Project'}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className='md:w-3/4 cursor-pointer'
                        onClick={() => window.open("https://kaiju-mke1.onrender.com/", '_blank')}
                    />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <a href={'https://github.com/Mccaryr/dalt-wisney-ecommerce'} target="_blank"
                       rel="noopener noreferrer">Github repo</a>
                    <img
                        src={wisneyImages[currentWisneyImageIndex]}
                        alt={'Wisney Project'}
                        onMouseEnter={() => {
                            setIsWisneyHovered(true)
                            setIsHovered(false)
                        }}
                        onMouseLeave={() => setIsWisneyHovered(false)}
                        className='md:w-3/4 cursor-pointer'
                        onClick={() => window.open("https://dalt-wisney-ecommerce.onrender.com/", '_blank')}
                    />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img
                        src={rfdImages[currentRFDImageIndex]}
                        alt={'Recipe for Disaster Project'}
                        onMouseEnter={() => {
                            setIsRFDHovered(true)
                        }}
                        onMouseLeave={() => setIsRFDHovered(false)}
                        className='md:w-3/4 cursor-pointer'
                        onClick={() => window.open("https://recipe-for-disaster-liart.vercel.app/", '_blank')}
                    />
                </div>
            </div>
        </div>
    )
}
export default Projects
