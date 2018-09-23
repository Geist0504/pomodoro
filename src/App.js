import React, { Component } from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import { faExpandArrowsAlt } from '@fortawesome/free-solid-svg-icons'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowDown)

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1>Pomodoro Clock</h1>
        <div id='interface'>
          <div id='break'>
            <h2 id='break-label'> hey to oyou!</h2>
            <div className='controls'>
              <FontAwesomeIcon icon={faArrowDown} /><p>50</p><FontAwesomeIcon icon={faArrowDown} />
            </div>
          </div>
          <div id='session'>
            <h2 id='session-label'> hey to oyou!</h2>
            <p> 5</p>
          </div>
        </div>
        <h3> Footage vehicle industrial grade man narrative paranoid shrine sign
        Shibuya ablative long-chain hydrocarbons sunglasses Chiba decay. Tower shrine drugs
        refrigerator courier rebar into corrupted sign dome Kowloon cyber-boat San Francisco.
        Bomb denim tattoo corporation pre-range-rover sunglasses car nano-shrine
        youtube shanty town paranoid. Test</h3>
      </div>
    );
  }
}

export default App;
