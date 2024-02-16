import React, {useRef} from 'react';
import './../App.css'

const RulesButton = (props) => {

    let modalRef = useRef(null)

    let modalDisplay = ()=> {
        modalRef.current.classList.toggle("appear")
    }

    return (
        <div className=''>
            <div ref={modalRef} className='modal justify-center items-center absolute w-full h-[102vh] aspect-square bg-[#000000c7] top-0 bottom-0 right-0 left-0 m-[auto] hidden'>
                <div className='bg-gray-300 w-[500px] h-[500px] rounded-[20px] flex justify-center items-center pt-6 relative max-sm:w-[300px] max-sm:h-[300px]'>
                    <img className='w-[70%] max-sm:w-[70%]' src={props.Modal} alt="" />
                    <button onClick={()=> modalDisplay()} className='absolute top-[30px] right-[30px] transition-all hover:rotate-[90deg] filterBrightness'><img src={props.Close} alt="" /></button>
                </div>
            </div>
            <button onClick={()=> modalDisplay()} className='text-[15px] text-white tracking-widest pl-10 pr-10 pt-3 pb-3 rounded-[10px] absolute bottom-[20px] right-[20px] max-sm:left-[40px] max-sm:right-[40px] max-sm:bottom-[40px] max-sm:bg-[#f2f2f200] transition-all font-bold bg-[#ffffff1c] hover:bg-blue-300 hover:text-[hsl(214,47%,23%)]'>RULES</button>
        </div>
    );
}

export default RulesButton;