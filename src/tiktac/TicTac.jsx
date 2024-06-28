import { useRef, useState } from 'react';
import circle from '../assets/circle.png';
import cross from '../assets/cross.png';
import Box from './Box';

const TicTac = () => {
  const [data, setData] = useState(Array(9).fill(''));
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);

  const toggle = (num) => {
    if (lock || data[num] !== '') {
      return;
    }

    const newData = [...data];
    if (count % 2 === 0) {
      newData[num] = 'x';
    } else {
      newData[num] = 'o';
    }
    setData(newData);
    setCount(count + 1);
    checkWin(newData);
  };

  const checkWin = (newData) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (newData[a] && newData[a] === newData[b] && newData[a] === newData[c]) {
        setLock(true);
        titleRef.current.innerHTML = `Congratulations: <img src=${newData[a] === 'x' ? cross : circle} /> Wins`;
        return;
      }
    }
  };

  const reset = () => {
    setLock(false);
    setData(Array(9).fill(''));
    setCount(0);
    titleRef.current.innerHTML = '';
  };

  return (
    <div>
      <h1 className='mt-[50px] text-[#26ffcb] text-6xl flex justify-center items-center font-bold'>Tic Tac Toe</h1>
      <p ref={titleRef} className='text-white font-bold text-5xl flex justify-center items-center mt-10'></p>
      <div className="h-[600px] w-[564px] flex m-auto mt-7">
        <div className="grid grid-cols-3 gap-x-2">
          {data.map((value, index) => (
            <Box key={index} value={value} onClick={() => toggle(index)} />
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className='w-[250px] h-[100px] border-none outline-none cursor-pointer rounded-[50px] bg-[#1f3540] text-[26px] text-[#26ffcb] mt-[25px] mb-[50px]'
          onClick={reset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TicTac;
