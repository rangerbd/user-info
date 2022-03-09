import logo from './logo.svg';
import './App.css';
import userdata from './data/data.json';
import { useEffect, useState } from 'react';
import Header from './Header/Header';
import User from './User/User';
import Cart from './Cart/Cart'




function App() {

  const [users ,setUsers] = useState([]);
  const [cart, setCart] =useState([]);

    useEffect(() => {
      setUsers(userdata);
      console.log(userdata);
    },[])



 const clickhandle = (user) =>{
   console.log("This is" ,user);

   const newcart =[...cart, user]
   setCart(newcart);
 }




  return (
    <div className="App">
     
      <Header></Header>
      <h1>User Added: {cart.length}</h1>
      <Cart cart={cart}></Cart>

      <ul>
        {
          users.map(user => <User user={user} clickhandle={clickhandle} key={user.id}></User>)
        }
      </ul>
      
      
    </div>
  );
}

export default App;
