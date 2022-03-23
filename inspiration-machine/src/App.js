import './App.css';
import { assignmentData }  from "./data/switch-assignment"

import InlineButton from './components/InlineButton/InlineButton';


function App() {

  // Helper function to return a random element from an array
  // eslint-disable-next-line no-extend-native
  Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }

  return (
    <div className="App">
      <h1>The Inspiration Machine ✨</h1>
      <div className="inspiration-output">
          <span>{assignmentData.assignment[0]} </span>
          <InlineButton color="#FF006E" string={assignmentData.user.random()} />
          <span>{assignmentData.assignment[3]} </span>
          <InlineButton color="#3A86FF" string={assignmentData.purpose.random()} />
          <InlineButton color="#FFBE0B" string={assignmentData.constraint.random()} />
          <InlineButton color="#8338EC" string={assignmentData.context.random()} />
      </div>
      <footer>© 2022 <a href="https://frederik-ueberschaer.de" target="blank">Frederik Ueberschär</a> & <a href="https://studiolab.ide.tudelft.nl/studiolab/about/" target="blank">StudioLab</a> </footer>
    </div>
  );
}

export default App;
