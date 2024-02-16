import React from 'react';
import './../App.css'

const Rock = (props) => {


    return (
        <button onClick={()=> {props.choiceFunction("rock"); props.setUnclickable(true)}} 
        className={`rockButton group aspect-square rounded-full flex justify-center items-center 
        ${props.unclickable == true ? `pointer-events-none`:``} 
        ${props.choice != "rock" && props.houseDisplay == true ? `youWinRight`:``} 
        ${props.choice == "rock" ? `youWinLeft` : ``}  `}>

            <div className='w-[75%] h-[75%] flex justify-center items-center bg-white rounded-full transition-all group-hover:scale-[90%]'>
                <img src={props.RockIcon} alt="" className='w-[50%] '/>
            </div>
        </button>
    );
}

export default Rock;
