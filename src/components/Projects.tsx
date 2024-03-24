import creditcardImg from '../../public/images/creditcard.jpeg'
import portfolioImg from '../../public/images/portfolio.png'
import tokenizerImg from '../../public/images/tokenizer.jpeg'

interface ProjectItemProps {
    img: string;
    title: string;
    project_type: string;
    skills: string;
    description: string;
    hlink: string;
}

const ProjectItem = ({ img, title, project_type, skills, description, hlink }: ProjectItemProps) => {
    return (
        <a href={hlink} target='_blank' rel='noopener noreferrer' className='bg-white group my-8 md:max-w-screen-lg md:h-auto md:hover:scale-105 md:flex md:justify-center md:ease-in md:duration-200 cursor-pointer shadow-xl shadow-gray-400 rounded-xl overflow-hidden'>
            {/* Image Container */}
            <div className='md:w-2/5 relative'>
                <img src={img} alt={title} className='rounded-xl w-full h-full object-cover group-hover:opacity-20 md:group-hover:opacity-100'/>
                <h2 className='absolute inset-0 hidden group-hover:flex items-center justify-center text-2xl font-bold text-white tracking-wider text-center bg-black/70 px-4 md:hidden md:group-hover:hidden'>
                    {title}
                </h2>
            </div>
            {/* Text Container */}
            <div className='md:w-3/5 hidden md:block md:px-4'>
                <h2 className='text-2xl font-bold text-[#001b5e] tracking-wider text-center mt-4'>
                    {title}
                </h2>
                <h3 className='text-sm italic text-center mb-4'>
                    {project_type} - {skills}
                </h3>
                <p className=' ml-4 text-gray-700 font-thin'>
                    {description}
                </p>
            </div>
        </a>
    );
};

const Projects = () => {
    return (
        <div id='projects' className='bg-[#FCFCFF] max-w-full m-auto px-16 md:px-20 py-16'>
            <h1 className='text-4xl font-bold text-center'>
                Projects
            </h1>
            <p className='text-center py-8'>

            </p>
            <div className='flex flex-col items-center'>
                <ProjectItem 
                    img={tokenizerImg} 
                    title='BPE Tokenizer' 
                    project_type='Building GPT' 
                    skills='Python' 
                    hlink='https://github.com/kevinkfkan/BPETokenizer' 
                    description='Trainable tokenizer built from scratch using utf-8, byte pair encoding (BPE), and Regex splits taken from GPT-4.' />
                <ProjectItem 
                    img={creditcardImg} 
                    title='Credit Fraud Detection' 
                    project_type='Classification with Imbalanced Data' 
                    skills='Python, scikit-learn, scikit-optimize, plotly ' 
                    hlink='https://github.com/kevinkfkan/CreditFraud' 
                    description='Using a highly imbalanced dataset containing almost 300,000 transactions made by credit cards in Europe, a classification model was made that could reliably detect fraudulent transactions.' />
                <ProjectItem 
                    img={portfolioImg} 
                    title='Personal Website' 
                    project_type='Frontend Web Development' 
                    skills='JS, Bun, Vite, React, Tailwind' 
                    hlink='' 
                    description='Pretty self explanatory...' />
            </div>
        </div>
    );
};

export default Projects;
