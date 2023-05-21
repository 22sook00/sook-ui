import React, { FC } from 'react';

interface ButtonProps {
  text: string;
}

const Button: FC<ButtonProps> = ({ text = 'SOOK BUTTON' }) => {
  return (
    <button className="w-fit rounded-md bg-primary-default hover:bg-primary-dark text-white font-semibold transition-all px-4 py-2">
      {text}
    </button>
  );
};

export default Button;
