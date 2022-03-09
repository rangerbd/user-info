import logo from './logo.svg';
import './App.css';
import userdata from './data/data.json';
import { useEffect, useState } from 'react';

function App() {

  const [users ,setUsers] = useState([]);

  useEffect(() => {
    setUsers(userdata);
    console.log(userdata);
  },[])


  return (
    <div className="App">

      
      
    </div>
  );
}

export default App;
