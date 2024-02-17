import headshotImg from '../../public/images/headshot.jpeg'

const Profile = () => {
  return (
    <div id='about' className='bg-[#FCFCFF] items-center max-w-full m-auto py-16 flex flex-col'>
        <h1 className='text-4xl pb-12 font-bold text-center'>
            About Me
        </h1>
        <div className='flex flex-row justify-evenly max-w-screen-lg w-full mx-16'>
            <img src={headshotImg} className='rounded-full object-cover object=top w-60 h-60 flex flex-shrink-0 filter brightness-125 saturation-200'>
            </img>
            <div className='flex pl-16 py-4 font-thin'>
                Welcome! I'm Kevin, I like solving puzzles and I'm passionate about solving real world problems with machine learning. I built this minimalistic website to introduce myself and showcase some of the projects I'm working on.
                <br/><br/> 
                New discoveries in artificial intelligence are really exciting to meso I am constantly learning. I developed a special interest in natural language processing (NLP) and large language models (LLM) during 
                my tenure at Infosys. 
                <br/><br/>
                This website is new and still under development. Some features are not working as intended yet. The projects section below is also constantly being updated.
            </div>
        </div>
        <a
            href="path_to_your_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-16 inline-block w-1/4 text-center px-6 py-3 bg-[#ffffff] text-black font-bold text-lg leading-tight uppercase rounded shadow-md hover:shadow-lg active:bg-green-800 active:shadow-lg transition duration-300 ease-in-out"
            >
            Resume
        </a>

    </div>
  )
}

export default Profile