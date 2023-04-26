import React from 'react'

const Spinner = () => {
  return (
    <svg className='loadingSvg h-12' viewBox='0 0 100 100'>
        <circle className='loadingCircle' fill='none' strokeWidth={3} cx="50" cy="50" r="20"></circle>
    </svg>
  )
}

export default Spinner