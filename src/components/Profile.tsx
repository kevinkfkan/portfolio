import headshotImg from '../../public/images/headshot.jpeg'

const Profile = () => {
  return (
    <div id='about' className='bg-[#FCFCFF] items-center max-w-full m-auto py-16 flex flex-col'>
        <h1 className='text-4xl pb-12 font-bold text-center'>
            About Me
        </h1>
        <div className='flex flex-col md:flex-row items-center md:justify-evenly max-w-screen-lg w-full mx-16'>
            <img src={headshotImg} className='rounded-full object-cover object=top w-60 h-60 flex flex-shrink-0 filter brightness-125 saturation-200'>
            </img>
            <div className='flex pl-16 py-4 pr-8 font-thin'>
                Welcome! I'm Kevin, I like solving puzzles and I'm passionate about solving real world problems with machine learning. I built this minimalistic website to introduce myself and showcase some of the projects I'm working on.
                <br/><br/> 
                Ongoing advancements in artificial intelligence are thrilling and fuels my continuous learning. My time at Infosys cultivated a special interest in natural language processing (NLP) and large language models (LLM).
                <br/><br/>
                This website is new and still under development. Some features are not working as intended yet. The projects section below is also constantly being updated.
            </div>
        </div>
        <a
            href="https://drive.google.com/file/d/1vE2w6ro8lRq7XCUWx-4vOGA1nrB9oEEi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-16 mx-auto block text-center justify-center px-6 py-3 bg-[#ffffff] text-black font-bold text-lg leading-tight uppercase rounded shadow-md hover:shadow-lg active:bg-green-800 active:text-white active:shadow-lg transition duration-300 ease-in-out"
            >
            Resume
        </a>

    </div>
  )
}

export default Profile