import React, { Component } from 'react';
import './GameArea.css';
import Wall from '../Wall/Wall';
import GameFinishLine from '../GameFinishLine/GameFinishLine';

class GameArea extends Component {
    state = {  } 

    boo = (props) =>{
        console.log("Działa!");
        this.props.go()
    };
    win = (props) =>{
        console.log("WYGRANA!");
        this.props.win()
    };

    render() { 

        return (
        <div className='gameField' onContextMenu={this.boo}>
            <Wall touching={this.boo} height="30%" width="45%" leftPos="0%" topPos="0%"/>
            <Wall touching={this.boo} height="60%" width="45%" leftPos="55%" topPos="0%"/>
            <Wall touching={this.boo} height="25%" width="5%" leftPos="7.5%" topPos="35.5%" rot="30deg"/>
            <Wall touching={this.boo} height="25%" width="45%" leftPos="17%" topPos="35%" rot="30deg"/>
            <Wall touching={this.boo} height="15%" width="5%" leftPos="0%" topPos="30%"/>
            <Wall touching={this.boo} height="20.5%" width="7%" leftPos="0%" topPos="40%"/>
            <Wall touching={this.boo} height="13.5%" width="7%" leftPos="4%" topPos="47%"/>
            <Wall touching={this.boo} height="6.5%" width="7%" leftPos="8%" topPos="54%"/>
            <Wall touching={this.boo} height="39.5%" width="20%" leftPos="0%" topPos="60.5%"/>
            <Wall touching={this.boo} height="38%" width="50%" leftPos="20%" topPos="62%"/>
            <Wall touching={this.boo} height="40%" width="28.5%" leftPos="71.5%" topPos="60%"/>
            <Wall touching={this.boo} height="1%" width="100%" leftPos="0%" topPos="99%"/>
            <GameFinishLine t={this.win} height="5%" width="5%" leftPos="68.5%" topPos="94%"/>
        </div>
        );
    }
}
 
export default GameArea;

//<Wall action={()=>this.boo()} height="20px" width="100px" leftPos="250px" topPos="250px"/>