'use client'

type Props = {
    titles: string[],
    currentIndex: number
}

const Steps = ({titles, currentIndex}: Props) => {
  return (
    <div className='flex items-center'>
        {titles.map((title, index) => (
            <>
                {index !== 0 && <div key={index} className='h-[2px] w-12 bg-teal-400 mx-1'></div>}
                <div key={title} className={`rounded-full p-1 border-teal-500 ${currentIndex === index && 'bg-teal-400'} border-2 w-8 h-8 flex justify-center items-center font-medium text-teal-500 relative`}>
                    <span className={`${currentIndex === index && 'text-white'}`}>{index + 1}</span>
                    <span className='absolute left-[50%] translate-x-[-50%] top-[100%] whitespace-nowrap text-xs font-medium mt-1 flex'>{title}</span>
                </div>
            </>
        ))}
    </div>
  )
}

export default Steps