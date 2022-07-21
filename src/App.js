import React, { Component } from 'react';
import './App.css'
import GameArea from './components/GameArea/GameArea';
import GameOver from './components/GameOver/GameOver';
import GameMenu from './components/GameMenu/GameMenu';
import GameWonSrean from './components/GameWonScrean/GameWonScrean';
import howler from 'howler';
import krzyk from './audio/01-the-screaming-sheep.mp3';
import fanfary from'./audio/win.mp3'

class App extends Component {
 
  

  state={
    gameOverTrigger:false,
    gameStart:false,
    gameWon:false
  }

  startGameHandler=()=>{
    console.log("Gra sie zaczyna!");
    this.setState(
      {
        gameStart:true
      }
    )
  }

  soundSource="./audio/01-the-screaming-sheep.mp3";
  soundURL="https://www.myinstants.com/en/instant/screaming-sheep/?utm_source=copy&utm_medium=share";

  scream = (src) =>{
    let sound = new howler.Howl({
      src,
      html5:true
    })
    sound.play();
  } 
 
  gameOverHandler = () =>{
    console.log("Gra sie skończyła!");
    this.setState(
      {
        gameOverTrigger:true
      }
    )
    this.scream(krzyk);
  }

  resetendler = () =>{
    console.log("Reset!")
    this.setState({
      gameOverTrigger:false,
      gameStart:false,
      gameWon:false
    })
  }
  gameWonHandler = ()=> {
    this.setState({
      gameWon:true
    })
    this.scream(fanfary);
  }

  render() { 
    
    const gamePlaying = <div className="app"><GameArea go={()=>{this.gameOverHandler()}} win={()=>{this.gameWonHandler()}}/></div>;
    const gameOverScrean = <div className="app"><GameOver restartGame={()=>this.resetendler()}/></div>;
    const MenuScreen = <div className='app'><div className='preGame'><GameMenu onButtonClick={()=>this.startGameHandler()}/></div></div>;
    const gameWonSrean = <div className='app'><GameWonSrean restartGame={()=>this.resetendler()}/></div>;
   

    

    if(this.state.gameStart){
      if(this.state.gameOverTrigger){
        return gameOverScrean;
      }
      else if(this.state.gameWon){
        return gameWonSrean;
      }
      else{
        return gamePlaying;
      }
    }
    else{
      return MenuScreen;
    }
    
  }
}
 
export default App;


/*
<h1 onCopy={this.onCopyHandler} onMouseEnter={this.onMouseEnterHandler} onMouseLeave={this.onMauseLeveHandler}> DUPA </h1>
      <div className="formContainer">
        <label className="formLabel">Username:</label>
        <input type="text" id="username" className="formElement"></input>
        <label className="formLabel">Role:</label>
        <input type="text" id="role" className="formElement"/>
        <label className="formLabel">Active</label>
        <input type="checkbox" id="active" className="formElement"/>
        <button onClick={this.setUserDataHandler} className="formButton">Show user</button>
      </div>

      <User userName={this.state.username} role={this.state.role}>{this.state.active ? this.active : this.inactive}</User>

      <Customer/>
*/