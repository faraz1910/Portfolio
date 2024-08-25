import React, { useEffect } from 'react'
import { GoArrowUpRight } from "react-icons/go";

const BigDetailButton = ({focus, setFocus, title}) => {

  return (
    <>
    <div className={`w-full ${focus ? 'bg-black text-white' : 'bg-white'} text-lg font-bold flex justify-between items-center p-4 rounded-lg mt-4`} onClick={setFocus}>
        <h1>{title}</h1>
        <GoArrowUpRight />
    </div>
    </>
  )
}

export default BigDetailButton