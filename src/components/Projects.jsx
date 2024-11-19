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

const Projects = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentWisneyImageIndex, setCurrentWisneyImageIndex] = useState(0);
    const images = [img1, img2, img3]
    const wisneyImages = [img4, img5, img6]
    const [isHovered, setIsHovered] = useState(false);
    const [isWisneyHovered, setIsWisneyHovered] = useState(false);



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

    return (
        <div id='recent projects' className='mt-5 py-5 px-[4rem]'>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Recent works</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>
            <div className="w-full flex">
                <motion.p variants={fadeIn("", "", 0.1, 1)}
                          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                    Following projects showcases my skills with real world examples of my work. Each project is linked
                    to live demos. Enjoy!
                </motion.p>
            </div>
            <div className="w-full h-1/2 flex justify-center pt-5 gap-10 flex-wrap md:flex-nowrap">
                <img
                    src={images[currentImageIndex]}
                    alt={'Kaiju Project'}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className='md:w-1/2 cursor-pointer'
                    onClick={() => window.open("https://kaiju-mke1.onrender.com/", '_blank')}
                />
                <img
                    src={wisneyImages[currentWisneyImageIndex]}
                    alt={'Wisney Project'}
                    onMouseEnter={() => {
                        setIsWisneyHovered(true)
                        setIsHovered(false)
                    }}
                    onMouseLeave={() => setIsWisneyHovered(false)}
                    className='md:w-1/2 cursor-pointer'
                    onClick={() => window.open("https://dalt-wisney-ecommerce.onrender.com/", '_blank')}
                />
            </div>
        </div>
    )
}
export default Projects
