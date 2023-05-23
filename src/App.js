import "./App.css";
import { datalist } from "./SinglePost";
import Posts from "./Posts";
import { useState } from "react";
function App() {
  const [read, setRead] = useState(false);
  const [number, setNumber] = useState(3);
  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="leftside">
            <h1>Notifications</h1>
            <div className="number">{number}</div>
          </div>
          <p
            className="mark"
            onClick={() => {
              for (let i = 0; i < datalist.length; i++) {
                datalist[i].read = true;
              }
              if (number == 0) {
                setNumber((prevNum) => prevNum - 0);
              } else {
                setNumber((prevNum) => prevNum - 3);
              }
            }}
          >
            Mark all as read
          </p>
        </header>
        {datalist.map((data, index) => (
          <Posts
            key={index}
            data={data}
            read={read}
            setRead={setRead}
            setNumber={setNumber}
            number={number}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
