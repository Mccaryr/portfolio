import { styles } from '../../styles.js'
import {fadeIn, textVariant} from "../../utils/motion.js";
import {motion} from "framer-motion";
import {portfolioProjects} from '../../constants/index.js'
import ProjectCard from "./ProjectCard.jsx";

const Projects = () => {

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
                {portfolioProjects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} project={project} />
                ))}
            </div>
        </div>
    )
}
export default Projects
