import {useState} from 'react';
import React from "react";
import './App.css';


//muuttujat
function App() {
  const [gasprice, setGasprice] = useState('');
  const [journey, setJourney] = useState('');
  const [consumption, setConsumption] = useState('');
  const tripPrice = (gasprice * journey * (consumption / 100)); 
  const tripPrice1 = tripPrice.toFixed(2);


  
  return (    
  <div className='photo'>
  <div className="Parent">
  <div className="App">
      <table>  
        <td>
          <tr>
            <input 
            type="text" 
            placeholder="Gas price / l" 
            className="Input"
            onChange={e => setGasprice(e.target.value)}>
            </input>
          
            <input 
            type="text" 
            placeholder="Journey / km"
            className="Input"
            onChange={e => setJourney(e.target.value)}>  
            </input>

            <input 
            type="text" 
            placeholder="Gas consumption l/100km" 
            className="Input"
            onChange={e => setConsumption(e.target.value)}>  
            </input>
            
            <button 
            class='button' 
            type='submit'
            onClick={setValues}>
              save
            </button>
          </tr> 
        </td>
      </table>

    <div className='valueBox'>
      <div classname='gasprice'>
          <div>Gas price: </div>
          <div> {gasprice} </div>
      </div>
      <br></br>
      <div classname='Journey'>
          <div>Length of Journey:</div> 
          <div> {journey} </div> 
      </div>
      <br></br>
      <div classname='Consumption'>
          <div> Gas consumption: </div>
          <div> {consumption} </div>
      </div>
      <br></br>
      <div classname='tripPrice'>
          <div> Trip price </div>
          <div> {tripPrice1} € </div>
      </div>
    </div>
  </div>
  </div>
  </div>  
      
  );
}

export default App;
