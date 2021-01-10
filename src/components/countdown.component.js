import React, { Component }  from 'react';
import { Button, Alert } from 'react-bootstrap';

export default class Countdown extends Component {
  constructor(props) {
    super(props);

    this.startTimer = this.startTimer.bind(this);
    this.pauseTimer = this.pauseTimer.bind(this);
    this.clearTimer = this.clearTimer.bind(this);
    this.onChangeTimer = this.onChangeTimer.bind(this);

    this.state = {
      timerOn: false,
      timerStart: 0,
      timerTime: 0
    }
  }

  startTimer() {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 1000; // it removes a 10 milliseconds every 10 milliseconds
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime,
        });
        document.getElementById('alert').style.display = 'none'
      } else {
        clearInterval(this.timer); // it stops the chronometer
        this.setState({ timerOn: false });
        document.getElementById('alert').style.display = '';
      }
    }, 1000);
  };

  pauseTimer() {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };

  clearTimer() {
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: this.state.timerStart
      })
    }
  }

  onChangeTimer(input) {
    const max = 216000000;
    if (!this.state.timerOn) {
      if (input === 'increaseSeconds' && this.state.timerTime + 1000 < max) {
        this.setState({ timerTime: this.state.timerTime + 1000 })
      } else if (input === 'decreaseSeconds' && this.state.timerTime - 1000 >= 0) {
        this.setState({ timerTime: this.state.timerTime - 1000 })
      } else if (input === 'increaseMinutes' && this.state.timerTime + 60000 < max) {
        this.setState({ timerTime: this.state.timerTime + 60000 })
      } else if (input === 'decreaseMinutes' && this.state.timerTime - 60000 >= 0) {
        this.setState({ timerTime: this.state.timerTime - 60000 })
      } else if (input === 'increaseHours' && this.state.timerTime + 360000 < max) {
        this.setState({ timerTime: this.state.timerTime + 3600000  })
      } else if (input === 'decreaseHours' && this.state.timerTime - 360000 >= 0) {
        this.setState({ timerTime: this.state.timerTime - 3600000 })
      }
    }
  }

  render() {

    return (
      <>
        <div style={{minHeight: "90vh"}}>  
          <h3>Countdown</h3>    

          <Button className="w-25 m-1" variant="outline-success" onClick={ () => {this.onChangeTimer('increaseHours')} } >+1 hour</Button>
          <Button className="w-25 m-1" variant="outline-success" onClick={ () => {this.onChangeTimer('increaseMinutes')} } >+1 min</Button>
          <Button className="w-25 m-1" variant="outline-success" onClick={ () => {this.onChangeTimer('increaseSeconds')} } >+1 sec</Button>
          <br />
          <Button className="w-25 m-1" variant="outline-danger" onClick={ () => {this.onChangeTimer('decreaseHours')} } >-1 hour</Button>
          <Button className="w-25 m-1" variant="outline-danger" onClick={ () => {this.onChangeTimer('decreaseMinutes')} } >-1 min</Button>
          <Button className="w-25 m-1" variant="outline-danger" onClick={ () => {this.onChangeTimer('decreaseSeconds')} } >-1 sec</Button>
          
          <h1 style={{fontSize: "6rem"}}>
            {("0" + Math.floor((this.state.timerTime / 3600000) % 60)).slice(-2)}
            :
            {("0" + Math.floor((this.state.timerTime / 60000) % 60)).slice(-2)}
            :
            {("0" + (Math.floor((this.state.timerTime / 1000) % 60) % 60)).slice(-2)}
          </h1>

          <Button className="w-25 m-1" variant="outline-primary" onClick={ this.startTimer }>Play</Button>
          <Button className="w-25 m-1" variant="outline-primary" onClick={ this.pauseTimer }>Pause</Button>
          <Button className="w-25 m-1" variant="outline-primary" onClick={ this.clearTimer }>Restart</Button>
        
          <Alert id="alert" variant="warning" className="w-100 mt-1" onClose={() => document.getElementById('alert').style.display = 'none'} dismissible>
            The countdown has finished
          </Alert>
        </div> 
      </>
    );
  }
}