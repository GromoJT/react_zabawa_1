import { render } from '@testing-library/react';
import React from 'react';


const GameMenu = (props) =>{

    return(
        <button onClick={props.onButtonClick}>Zagraj</button>
    );
}

export default GameMenu;