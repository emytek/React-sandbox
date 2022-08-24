import './App.css';
import { useState } from 'react';
import Classbtn from './components/Classbtn';

function App() {
  const [count, setCount] = useState(100)
  const [like, setLike] = useState(false)

  const users = [
    { name: "John Doe", id: 1 , rating: 7, text: "testing lorem app"},
    { name: "Jane Doe", id: 2  ,rating: 8, text: "testing lorem app"},
    { name: "Billy Doe", id: 3 ,  rating: 9, text: "testing lorem app"}
  ];


  const handleCount = () => {
    setCount(count + 1);
  //   console.log('button clicked!');
  }

  const handleLike = () => {
    setLike(like => !like);
  }

  const userItems = users.map((user) => <li key={user.id}>{user.name}</li>)
  
  return (
    <div className="App">
      <>
        <div>
            <h1>React Sandbox</h1>
            <h2>Like Button</h2>
            <h3>Users :</h3>
            <h5>{userItems}</h5>
            <button 
              onClick={() => {
              handleCount()
              handleLike() 
              }}
              className={`like-button ${like && 'liked'}`}
              > 
            Like | <span>{count}</span></button>
        </div>
      </>
      <Classbtn />
    </div>
  );
}

export default App;
