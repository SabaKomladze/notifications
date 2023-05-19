import "./App.css";
import { datalist } from "./SinglePost";
import Posts from "./Posts";

function App() {
  return (
    <div className="App">
      <section className="header">
        <div className="leftside">
          <h1>Notifications</h1>
          <div className="number">3</div>
        </div>
        <p className="mark">Mark all as read</p>
      </section>
      {datalist.map((data, index) => (
        <Posts key={index} data={data} />
      ))}
    </div>
  );
}

export default App;
