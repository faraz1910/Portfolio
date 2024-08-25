import React from 'react'

const ExperienceCards = ({duration, company, role}) => {
  return (
    <div className="w-96 bg-[#ECECEC] flex flex-col p-6 font-dm-sans mt-6 rounded-xl">
      <div className="mb-6">
        <span className="text-sm">{duration}</span>
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="w-[7px] h-[7px] bg-[#FFB646] rounded-full" />
          <h1 className="font-medium">{company}</h1>
        </div>
        <h1 className="text-2xl font-bold">{role}</h1>
      </div>
    </div>
  )
}

export default ExperienceCards