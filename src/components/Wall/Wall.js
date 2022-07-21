import React, {Component} from 'react';
import './wallStyle.css'
class Wall extends Component {
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
            <div className='wall' onMouseEnter={this.props.touching} style={usedStyle} >

            </div>
        );
    }
}
 
export default Wall;