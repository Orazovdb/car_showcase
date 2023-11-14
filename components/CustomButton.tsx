'use client'
import Image from 'next/image'
import { CustomButtonProps } from '@/types'

const CustomButton = ({ title, containerStyles, handleClick, btnType, isDisabled, rightIcon, textStyles }: CustomButtonProps) => {
  return (
    <button disabled={isDisabled} type={btnType || 'button'} className={`custom-btn ${containerStyles}`} onClick={handleClick}>
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <span>
          <div className="relative w-6 h-6">
            <Image src={rightIcon} alt="right-icon" fill className="object-contain" />
          </div>
        </span>
      )}
    </button>
  )
}

export default CustomButton
