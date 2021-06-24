
import './App.css';
import {useEffect, useState} from "react";
import User from "./components/user/User";

function App() {



  let [users, setUsers] = useState([]);


  useEffect(() => {

      fetch('https://jsonplaceholder.typicode.com/comments')
          .then(value => value.json())
          .then(value => {
              setUsers(value);

          })
      },
  [])





  return (
    <div>

        {
            users.map(value => {return <User key={value.id} item={value}/>;})
        }

    </div>
  );
}

export default App;
