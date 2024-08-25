import React from 'react'
import EducationCards from '../cards/EducationCards'

const Education = () => {
  return (
    <div className='w-full font-dm-sans'>
        <h1 className='mb-6 text-4xl font-bold'>Education</h1>
        <hr />
        <EducationCards duration={'08/2023 - Present'} institute={'Vellore Institute of Technology'} course={'Master of Computer Applications'} />
        <EducationCards duration={'08/2020 - 07/2023'} institute={'Integral University Lucknow'} course={'Bachelor of Computer Applications'} />
    </div>
  )
}

export default Education