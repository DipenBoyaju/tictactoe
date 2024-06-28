import React from 'react';
import circle from '../assets/circle.png';
import cross from '../assets/cross.png';

const Box = ({ value, onClick }) => {
  return (
    <div
      className="flex h-[180px] w-[180px] bg-[#1f3540] border-4 border-[#0f1b21] rounded-[12px] cursor-pointer justify-center items-center"
      onClick={onClick}
    >
      {value === 'x' && <img className="m-10" src={cross} alt="X" />}
      {value === 'o' && <img src={circle} alt="O" />}
    </div>
  );
};

export default Box;
