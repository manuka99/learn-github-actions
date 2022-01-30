import logo from "./logo.svg";
import "./App.css";
// import Greet1 from './components/functional_component';
import { Greet } from "./components/functional_component";
import Welcome from "./components/class_component";
import Hello from "./components/jsx";
import Message from "./components/message";
import Counter from "./components/counters";

function App() {
  return (
    <div className="App">
      <Greet name="34gf" age="ada" />
      <Greet name="34gf" age="ada">
        <p>this is childeren</p>
      </Greet>
      <Welcome name="556gfgfg" />
      <Hello />
      <Message />
      <Counter/>
    </div>
  );
}

export default App;
