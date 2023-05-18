import "./App.css";
import { SinglePost } from "./SinglePost";

function App() {
  return (
    <div className="App">
      <section className="header">
        <div className="leftside">
          <h1>Notifications</h1>
        </div>
        <p>Mark all as read</p>
      </section>
      {SinglePost.map((object) => console.log(object.author.name))}
    </div>
  );
}

export default App;
