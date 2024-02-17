const data  = [
    {
        year: '2022 - 2023',
        company: 'Infosys Limited',
        title: 'Data Scientist Intern',
        duration: '1 year',
        details: 'Contributed to research and development in tools for risk management. Main project involved developing a risk management tool that utilizes web scraping, scripting, natural language processing (NLP) and large language models (LLMs) to detect adverse media on a potential client and classify the risk of associating with them.'
    },
    {
        year: '2021 - 2021',
        company: 'Tiny Mile',
        title: 'Engineer Intern',
        duration: '4 months',
        details: 'Participated in a dynamic start-up environment that pioneered the use of autonomous robots to provide food delivery services. Primary responsibilities included determining feasibility of drone designs for in-air deliveries, legal frameworks in Ontario regarding drone applications, and research into competitor technologies.'
    }
];

interface WorkItemProps {
    year: string;
    company: string;
    title: string;
    duration: string;
    details: string;
}

const WorkItem: React.FC<WorkItemProps> = ({ year, company, title, duration, details }) => {
    return (
        <ol className='flex flex-col md:flex-row relative'>
            <li className='mb-10 ml-4'>
                <p className='flex flex-wrap gap-3 flex-row items-center justify-start text-base'>
                    <span className='inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md'>
                        {year}
                    </span>
                    <span className='text-lg px-2 font-bold text-[#001b5e]'>
                        {company}
                    </span>
                </p>
                <ol className='flex flex-col py-4 md:flex-row relative border-l border-stone-200'>
                    <li className='mb-10 ml-4'>
                        <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white' />
                        <p className='flex flex-wrap gap-3 flew-row items-center justify-start text-xs md:text-sm'>
                            <span className='font-semibold text-base text-[#001b5e]'>
                                {title}
                            </span>
                            <span className='my-1 text-sm font-normal leading-none text-stone-400'>
                                {duration}
                            </span>
                         </p>
                         <p className='my-2 text-base font-normal text-stone-500'>
                            {details}
                        </p>
                    </li>
                </ol>
            </li>
        </ol>
    )
};

const Work = () => {
    return (
        <div id='work' className='max-w-screen-xl m-auto px-16 py-16 flex flex-col'>
            <h1 className='text-4xl pb-12 font-bold text-center'>Work</h1>
            <div className='pl-20'>
            {
                data.map((item, idx) => (
                    <WorkItem
                    key = {idx}
                    year = {item.year}
                    company= {item.company}
                    title = {item.title}
                    duration = {item.duration}
                    details = {item.details}
                    />
                ))
            }
            </div>
        </div>
    )
};

export default Work