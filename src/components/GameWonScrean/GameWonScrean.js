import React, { Component } from 'react';
import './GameWonScrean.css'
class GameWonSrean extends Component {
    state = {  } 

    backandler = (props) =>{
        this.props.restartGame();
    }
    render(props) { 
        return (
            <div className='GameWonScrean'>
        <button className='b' onClick={this.backandler}>Powrót</button>
        
    </div>
        );
    }
}
 
export default GameWonSrean;