import React from 'react';

const Scroll = (props) => {
    
    return (
        <div style={{overflowY: 'scroll', borderTop: '2px solid black', overflow: 'hidden'}}>
            {props.children}
        </div>
    );
}


export default Scroll;