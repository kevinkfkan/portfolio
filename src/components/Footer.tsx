import { CiMail } from "react-icons/ci";

const Footer = () => {
  return (
    <div id='footer' className='bg-gray-600 flex flex-row justify-between items-center h-24'>
        <div className='pl-8 w-1/4 flex items-center tracking-widest text-white font-thin'>
            &#169; 2024 Kevin Kan
        </div>
        <div className='w-1/4 flex items-center text-white font-thin justify-end pr-8'>
            <div className='flex items-center justify-center flex-shrink-0'>
              <CiMail size={24} className='mr-2' /> kevinkfkan@gmail.com
            </div>
        </div>
    </div>
  )
}

export default Footer;
