import {useEffect, useState} from 'react'
import githubLogo from "../../assets/github-mark-white.png";


const ProjectCard = ({project}) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        let interval;
        if (isHovered) {
            interval = setInterval(() => {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % project.images.length);
            }, 1500);
        } else {
            setCurrentImageIndex(0);
        }
        return () => clearInterval(interval);
    }, [isHovered, project.images.length]);


    return (
        <div className="flex flex-col justify-center items-center relative">
            <div className="flex sm:w-3/4 w-[90vw]">
                <a className="inline-block w-1/5" href={project.github} target="_blank"
                   rel="noopener noreferrer">
                    <img className="sm:w-[20%] w-[60%]" src={githubLogo} alt="Github link"/>
                </a>
                <p className="content-center sm:text-[16px] text-[11px]">{project.techStack}</p>
            </div>
            <img
                src={project.images[currentImageIndex]}
                alt={'Kaiju Project'}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className='md:w-3/4 cursor-pointer rounded-2xl w-full'
                onClick={() => window.open(project.liveDemo, '_blank')}
            />
            <div
                className="bg-gray-800 absolute bottom-0 w-[75%] h-[15%] opacity-80 sm:flex p-8 rounded-b-2xl gap-8 hidden">
                <h2 className="text-white font-extrabold md:text-xl text-lg">{project.name}</h2>
                <p className="text white">{project.description}</p>
            </div>
        </div>
    )
}
export default ProjectCard
