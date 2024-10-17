import logo from './logo.svg';
import './App.css';
import Friends from './Components/Friends';
import AddFriends from './Components/AddFriends';
import SplitBill from './Components/SplitBill';
import { useState } from 'react';

function App() {
  const [friendName, setFriendName] = useState([
    
  ])
  
  const [select, setSelect] = useState(false)
  const [frndslct , setFrndSlct] = useState(null)
  const [value, setValue] = useState({})
  console.log(value);
  
  
  return (
    <div className="App">
      <div className='right'>
        <Friends friendName={friendName} select={select} setSelect={setSelect}  setFrndSlct={setFrndSlct} value={value} frndslct={frndslct}/>
        <AddFriends friendName={friendName} setFriendName={setFriendName}/>
      </div>

      <div className='left'>
        {
          select && <SplitBill frndslct={frndslct} setValue={setValue}/>
        }
      </div>
    </div>
  );
}

export default App;
