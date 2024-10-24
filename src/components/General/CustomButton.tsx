import { CustomButtonProps } from '@/types/types'
import React from 'react'

const CustomButton = ({title, ContainerStyles, handelclick} : CustomButtonProps) => {

  return (
    <button
    disabled={false}
    type={'button'}
    className={` h-9 rounded-xl px-4 py-1.5 text-gray ${ContainerStyles} `}
    onClick= {handelclick}
    >
        {title}
    </button>
  )
}

export default CustomButton
