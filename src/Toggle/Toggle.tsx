import React, { FC, SetStateAction, useState } from 'react';

interface ToggleProps {
  idx: number;
  onChangeToggle?: React.Dispatch<SetStateAction<number | null>>;
}

const Toggle: FC<ToggleProps> = ({ onChangeToggle, idx }) => {
  const [toggle, setToggle] = useState(false);
  const toggleClass = 'transform translate-x-8';
  const handleChange = () => {
    setToggle(!toggle);
    onChangeToggle && onChangeToggle(idx);
  };
  return (
    <div
      className={`${
        toggle ? 'bg-point-blue-dark' : 'bg-gray-default'
      } relative w-14 h-6 flex items-center  rounded-full p-1 cursor-pointer`}
      onClick={() => handleChange()}
    >
      <p
        className={`${
          toggle ? ' text-gray-light left-6' : 'black-default left-2 '
        } text-[10px] font-semibold absolute transform duration-300 ease-in-out`}
      >
        {toggle ? 'ON' : 'OFF'}
      </p>
      <div
        className={
          'bg-white h-4 w-4 rounded-full shadow-md  transform duration-300 ease-in-out' +
          (toggle ? null : toggleClass)
        }
      ></div>
    </div>
  );
};

export default Toggle;
