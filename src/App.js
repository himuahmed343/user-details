import './App.css';
import Header from './components/Header/Header.jsx';
import User from './components/User/User.jsx';
import Cart from './components/Cart/Cart.jsx';
import React, {useState} from 'react';
import userAPI from './userlist.json';


function App() {
  const [user, ] = useState(userAPI);
  const [cart, setCart] = useState([])
  const handlerAdd = (user) => {
      // console.log("User Added", user)
      const newCart = [...cart, user]
      setCart(newCart)
  }
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res => res.json())
  //   .then(data=> {
  //     setUsers(data)
  //   })
  //   .catch(error => console.log(error))
  //  }, [])

  return (
    <div className="App">
        <Header></Header>
        <h1>User Loaded: {user.length}</h1>
        <Cart cart={cart}></Cart>
        
        <ol>
          {
            user.map(user => <User user = {user} key = {user.id} eventHandle = {handlerAdd}></User>)
          }
        
        </ol>

    </div>
  );
}

export default App;
