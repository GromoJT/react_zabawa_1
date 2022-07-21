import React, {Component} from 'react';
import './GameFinishLine.css'
class GameFinishLine extends Component {
    state = {  } 
    render(props) { 

        const {height,width,leftPos,topPos,rot} = this.props
        let sx = 'skewX(';
        const usedStyle = {
            height:height,
            width:width,
            margin: topPos+" "+leftPos,
            transform: sx+rot+')'
        }

        return (
            <div className='end' onMouseEnter={this.props.t} style={usedStyle}></div>
    
        );
    }
}
 
export default GameFinishLine;

