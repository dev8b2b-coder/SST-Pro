import React from 'react'

const Button = ({color,btn_background,btn_name,btn_border,shadow}) => {
  return (
    <button className={`text-[23px] px-[28px] cursor-pointer py-[13px] border-2 ${btn_border ? btn_border : 'border-primary'} rounded-[50px] ${btn_background} ${color} ${shadow ? 'shadow-[1px_3px_0px_#3A3A3A]' : ''}`}>
      {btn_name}
    </button>
  )
}

export default Button
