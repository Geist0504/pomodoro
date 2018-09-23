import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faPause } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { faSync } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowDown)

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: this.props.state.minutes,
      seconds: this.props.state.seconds,
      running: false
    }
    this.start_timer = this.start_timer.bind(this)
  }
  countdown() {
    if (Number(this.state.seconds) === 0) {
      this.setState({
        minutes: String(Number(this.state.minutes) - 1),
        seconds: '59'
      })
    } else {
      this.setState({
        seconds: String(Number(this.state.seconds) - 1)
      }
      )}
  }
  start_timer() {
    this.timer = setInterval(() => this.countdown(), 1000)
  }
  start_pause_timer() {
    if (!this.state.running) {
      this.setState({running: true})
      this.start_timer()
    } else {
      this.setState({running: false})
      clearInterval(this.timer)
    }
  }
  render() {
    return (
      <div>
        <h4 id='timer-label'>{this.state.session}</h4>
        <h2 id='time-left'>{this.state.minutes}:{this.state.seconds}</h2>
        <button id='start_stop' onClick={this.start_timer}><FontAwesomeIcon icon={faPlay} /><FontAwesomeIcon icon={faPause} /></button>
        <button id='reset' onClick={this.props.reset}><FontAwesomeIcon icon={faSync} /></button>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      minutes: '25',
      seconds: '00',
      break: '5',
      running: false,
      session: 'session',
      session_time: '25'
    }
    this.break_increment = this.break_increment.bind(this)
    this.break_decrement = this.break_decrement.bind(this)
    this.session_increment = this.session_increment.bind(this)
    this.session_decrement = this.session_decrement.bind(this)
    this.reset = this.reset.bind(this)
  }
  break_increment() {
    if (this.state.break >= 60){
      return null
    }
    this.setState({
      break: String(Number(this.state.break) + 1)
    })
  }
  break_decrement() {
    if (this.state.break <= 1) {
      return null
    }
    this.setState({
      break: String(Number(this.state.break) - 1)
    })
    return null
  }
  session_increment() {
    if (this.state.minutes >= 60) {
      return null
    }
    this.setState({
      minutes: String(Number(this.state.minutes) + 1)
    })
  }
  session_decrement() {
    if (this.state.minutes <= 1) {
      return null
    }
    this.setState({
      minutes: String(Number(this.state.minutes) - 1)
    })
    return null
  }
  reset() {
    this.setState({
      minutes: '25',
      seconds: '00',
      break: '5',
      running: false
    })
  }
  render() {
    return (
      <div className='App'>
        <h1>Pomodoro Clock</h1>
        <div id='interface'>
          <div id='break'>
            <h2 id='break-label'>Break Length</h2>
            <div className='controls'>
              <button id='break-decrement' onClick={this.break_decrement}><FontAwesomeIcon icon={faArrowDown} /></button>
              <p id='break-length'>{this.state.break}</p><button id='break-increment'
              onClick={this.break_increment}><FontAwesomeIcon icon={faArrowUp} /></button>
            </div>
          </div>
          <div id='session'>
            <h2 id='session-label'>Session Length</h2>
            <div className='controls'>
              <button id='session-decrement' onClick={this.session_decrement}><FontAwesomeIcon icon={faArrowDown} /></button>
              <p id='session-length'>{this.state.minutes}</p><button id='session-increment' onClick={this.session_increment}><FontAwesomeIcon icon={faArrowUp} /></button>
            </div>
          </div>
        </div>
        <Timer reset={this.reset} state={this.state}/>
      </div>
    );
  }
}

export default App;
