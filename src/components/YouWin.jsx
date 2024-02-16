import React from 'react';
import './../App.css'

const YouWin = (props) => {
    return (
        <div className='youWin rounded-[20px] flex justify-center items-center flex-col'>
            <div className='text-white text-[25px] tracking-wider font-bold'>{props.result} </div>
            <button onClick={props.Restart} className='text-[#ffffff] bg-[#ffffff1c] text-[15px] tracking-wider rounded-[10px] pt-3 pb-3 pl-10 pr-10 mt-4 transition-all font-bold hover:bg-green-300 hover:text-green-700 hover:tracking-[3px]'>PLAY AGAIN</button>
        </div>
    );
}

export default YouWin;
