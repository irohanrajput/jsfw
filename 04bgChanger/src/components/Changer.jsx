import React from 'react';
function Changer(props) {
    return (
        <button onClick={() => props.setColor(props.color)}
            className='rounded-full m-1 gap-3 outline-none px-4 shadow-lg'
            style={{backgroundColor: props.color}}
        >
            {props.color}
        </button>
    );
};

export default Changer; 
