import { TypeAnimation } from 'react-type-animation'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Main = () => {
    return (
        <div id='main'>
            <img src='../../public/images/disney_sat.jpeg' className='w-full h-screen object-cover filter blur-sm'></img>
            <div className='w-full h-screen absolute top-0 left-0 bg-white/70'>
                <div className='max-w-[30rem] m-auto h-full w-full flex flex-col justify-center text-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold'>
                        Hello, I'm Kevin Kan
                    </h1>
                    <h2 className='flex sm:text-3xl text-xl pt-4 pb-4 text-gray-800 justify-center'>
                        <TypeAnimation
                            sequence={[
                                'I am a data scientist',
                                2000,
                                'I am an engineer',
                                2000,
                                'I am a ML enthusiast',
                                2000
                            ]}
                            wrapper="div"
                            cursor={true}
                            style={{ fontSize: '1em', paddingLeft: '0em', textAlign: 'center' }}
                            repeat={Infinity}
                            />
                    </h2>
                    <div className='flex flex-row w-full justify-evenly my-8'>
                        <a href='https://www.linkedin.com/in/kevinkfkan/' target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className='cursor-pointer' size={28}/>
                        </a>
                        <a href='https://github.com/kevinkfkan' target='_blank' rel='noopener noreferrer'>
                            <FaGithub className='cursor-pointer' size={28}/>
                        </a> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main