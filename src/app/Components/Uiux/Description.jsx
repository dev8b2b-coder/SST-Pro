import React from 'react'

const Description = ({description,color,align}) => {
  return (
    <div className='flex flex-col items-end'>
     <p 
      className={` ${color} ${align} main_description pb-4 font_light`}
      dangerouslySetInnerHTML={{__html:description}}
      />
     <div className="border-b-2 mt-[-8px] border-[#FFFFFF80]" style={{ width: "170px"}}></div>
    </div>
  )
}

export default Description
