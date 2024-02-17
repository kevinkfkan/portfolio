
import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div id='footer' className='bg-gray-600 flex flex-row justify-between h-24'>
        <div className=' pl-48 w-1/4 flex items-center tracking-widest text-white font-thin'>
            &#169; 2024 Kevin Kan
        </div>
        <div className='w-1/4 flex items-center text-white font-thin justify-end pr-24'>
            <CiMail />: kevinkfkan@gmail.com
        </div>
    </div>
  )
}

export default Footer