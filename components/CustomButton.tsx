// components/CustomButton.tsx"
'use client';
import React from 'react';
import { CustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || 'button'}
      className={`custom-btn custom-btn:hover ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      <span>
        {rightIcon && (
          <div className="relative w-6 h-6">
            <Image
              src={rightIcon}
              alt="right icon"
              fill
              className="ml-3 object-contain"
            />
          </div>
        )}
      </span>
    </button>
  );
};

export default CustomButton;
